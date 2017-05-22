import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  public mergeObjectTwoIntoObjectOne(objectOne, objectTwo) {

    console.log(JSON.stringify(objectOne))

    //ATTENTION: overwrites existing props of object one
    for (var attrname in objectTwo) { objectOne[attrname] = objectTwo[attrname]; }

    console.log(JSON.stringify(objectOne))

  }

}
