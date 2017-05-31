import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotifyService} from "../notify.service";
import {AppNotification} from "../notification";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit, OnDestroy {

  constructor(
      private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.notifyService.notifications.takeUntil(this.onDestroyStarted).subscribe(notification => {
      this.notification = notification;

      let somethinElseHappened: boolean = false;
      const oneSecond = Observable.timer(1000);
      const innerSubscription = this.notifyService
          .notifications
          .takeUntil(oneSecond)
          .subscribe(newNotification => {
            somethinElseHappened = true;
          });


      setTimeout(() => {
        if (!somethinElseHappened) {
          this.notification = undefined;
        }
      }, 1000);
    })
  }

  private onDestroyStarted: Subject<void> = new Subject<void>();
  ngOnDestroy() {
    this.onDestroyStarted.next();
  }

  public notification: AppNotification;


}
