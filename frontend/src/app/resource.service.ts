import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Resource} from "./resource";

@Injectable()
export class ResourceService {

  private resourcesUrl(resourceName: ResourceName) {
    return '/api/v1/' + resourceName + '/'
  };  // URL to web api

  constructor(private http: Http) { }
  getResources(resourceName: ResourceName): Promise<Resource[]> {
    console.log('gettin');
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
