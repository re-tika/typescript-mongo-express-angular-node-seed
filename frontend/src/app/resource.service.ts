import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Resource} from "./resource";

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {toPromise} from "rxjs/operator/toPromise";


@Injectable()
export class ResourceService {

  private resourcesUrl(resourceName: ResourceName) {
    return '/api/v1/' + resourceName + '/'
  };  // URL to web api

  // A store for resources
  private resourceStore = {

    //contains data of the following format:
    //[resourceName][resourceId]

  };

  constructor(private http: Http) { }

  getResources(resourceName: ResourceName): Promise<Observable<Resource>[]> {

    return this.http.get(this.resourcesUrl(resourceName))
        .toPromise()
        .then(resp => {
          //Store the resources as observables into the resource store.
          if (Array.isArray(resp.json().data)) {

            const observableArray: Observable<Resource>[] = [];

            resp.json().data.forEach((resource: Resource) => {
              this.storeResourceAsObservable(resource, resourceName);
              observableArray.push(this.resourceStore[resourceName][resource.uid])
            });

            //Return the response data
            return observableArray;

          } else {
            console.error('Expected an array');
          }
        })
        .catch(this.handleError);
  }

  getResource(resourceId: string, resourceName: ResourceName): Observable<Resource> {

    if (this.resourceStore[resourceName][resourceId]) {
      return this.resourceStore[resourceName][resourceId];
    } else {
      return this.http.get(this.resourcesUrl(resourceName) + resourceId + '/')
          .map(resp => {
            const resource = resp.json().data;
            this.storeResourceAsObservable(resource, resourceName);
            return resource
          })
          .catch(this.handleError);
    }

  }


  createResource(newResource: Resource, resourceName: ResourceName): Observable<Resource> {

    return this.http.post(this.resourcesUrl(resourceName), newResource)
        .map(resp => {
          const createdResource = resp.json().data;
          this.storeResourceAsObservable(createdResource, resourceName);
          return createdResource;
        })
        .catch(this.handleError);
  }

  updateResource(resource: Resource, resourceName: ResourceName): Observable<Resource> {
    return this.http.put(this.resourcesUrl(resourceName), resource)
        .map(resp => {
          setTimeout(() => {
            this.resourceStore[resourceName][resource.uid].next(resource);
          }, 0);
          return resource;
        })
        .catch(this.handleError);
  }

  deleteResource(resourceId: string, resourceName: ResourceName): Promise<Object> {
    return this.http.delete(this.resourcesUrl(resourceName) + resourceId + '/')
        .toPromise()
        .then(response => {
          (<Observable<Resource>>this.resourceStore[resourceName][resourceId])
          return response.json().data as Object
        })
        .catch(this.handleError);
  }

  private storeResourceAsObservable (resource: Resource, resourceName: ResourceName): void {
    if (resource.uid) {

      const subject = new Subject();
      this.resourceStore[resourceName] = this.resourceStore[resourceName] || {};
      this.resourceStore[resourceName][resource.uid] = subject;

      setTimeout(() => {
        subject.next(resource)
      }, 0);

    } else {
      console.error('Expected a uid field the resource');
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

export type ResourceName = 'heroes'
