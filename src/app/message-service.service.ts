import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  sharingdata=new Subject<any>();

  constructor() { }
}
