import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Resource} from "./resource";

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/of';

@Injectable()
export class ResourceService {

  private resourcesUrl(resourceName: ResourceName) {
    return '/api/v1/' + resourceName + '/'
  };  // URL to web api

  // A store for resources
  private resourceStore = {

    //contains data of the following format:
    //[resourceName][resourceId]

    /* METHODS OF THE RESOURCE STORE */
    insertResourceInStore: (resource: Resource, resourceName: ResourceName) => {
      this.resourceStore[resourceName] = this.resourceStore[resourceName] || {};
    },

    updateResourceInStore: (resource: Resource, resourceName: ResourceName) => {

    },

    deleteResourceInStore: (resource: Resource, resourceName: ResourceName) => {

    },

    getResourceInStore: (resource: Resource, resourceName: ResourceName) => {

    },

  };



  constructor(private http: Http) { }
  getResources(resourceName: ResourceName): Promise<Resource[]> {

    const resourcesObservable: Observable<Resource> = this.http.get(this.resourcesUrl(resourceName));


    return this.http.get(this.resourcesUrl(resourceName))
        .toPromise()
        .then(response => response.json().data as Resource[])
        .catch(this.handleError);
  }
  
  createResource(resource: Resource, resourceName: ResourceName): Promise<Resource> {
    return this.http.post(this.resourcesUrl(resourceName), resource)
        .toPromise()
        .then(response => response.json().data as Resource)
        .catch(this.handleError);
  }

  deleteResource(resourceId: string, resourceName: ResourceName): Promise<Object> {
    return this.http.delete(this.resourcesUrl(resourceName) + resourceId + '/')
        .toPromise()
        .then(response => response.json().data as Object)
        .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

export type ResourceName = 'heroes'
