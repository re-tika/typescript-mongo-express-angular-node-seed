import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AppNotification} from "./notification";

@Injectable()
export class NotifyService {

  constructor() {
    const doNotify = () => {
      setTimeout(() => {
        if (this.counter < 20) {
          this.counter++;
          if (this.counter % 2 == 0) {
            this.success('cool');
          } else {
            this.error('beans');
          }
          doNotify();
        }
      }, 500);
    };
    doNotify();
    console.log(this.notifications);
  }

  counter = 0;

  success(message) {
    this._notifications.next({
      type: 'success',
      message: message
    });
  }

  error(message) {
    this._notifications.next({
      type: 'error',
      message: message
    })
  }

  private _notifications: Subject<AppNotification> = new Subject();
  public get notifications() { //TODO: make this const somehow. static?
    return this._notifications;
  }


}
