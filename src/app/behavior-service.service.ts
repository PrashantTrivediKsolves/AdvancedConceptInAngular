import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BehaviorServiceService {
  messageSource=new BehaviorSubject("Main Message");
  // newMSG=this.messageSource.asObservable;

  constructor() { }
}
