import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  public mergeObjectTwoIntoObjectOne(objectOne, objectTwo) {
    //ATTENTION: overwrites existing props of object one
    for (var attrname in objectTwo) { objectOne[attrname] = objectTwo[attrname]; }
  }

  /* Copies the data, but loses function assignments! */
  public deepCopyData(data: Object) {
    return JSON.parse(JSON.stringify(data));
  }

}
