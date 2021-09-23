import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  private statusSource = new BehaviorSubject(null); // set default status
  private title = new BehaviorSubject(null); // set default status
  private error  = new BehaviorSubject(null); // set default status

  currentStatus = this.statusSource.asObservable();
  titleStatus = this.title.asObservable();
  errorStatus = this.error.asObservable();

  constructor() { }

  changeStatus(status: string) {
    this.statusSource.next(status)
  }

  changeTitle(title){
    this.title.next(title);
  }

  changeError(errorMessage){
    this.error.next(errorMessage);
  }
}
