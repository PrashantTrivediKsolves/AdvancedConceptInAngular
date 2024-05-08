import { Component, OnInit } from '@angular/core';
import { BehaviorServiceService } from '../behavior-service.service';
@Component({
  selector: 'app-about-behavior',
  templateUrl: './about-behavior.component.html',
  styleUrls: ['./about-behavior.component.css']
})
export class AboutBehaviorComponent implements OnInit {
  subscribe:any;
  message:any;
  constructor(private dataService:BehaviorServiceService) { }

  ngOnInit(): void {
    this.subscribe=this.dataService.messageSource.subscribe((msg)=>
    {
      this.message=msg;
    })
  }
  changeMSG(msg:any)
  {
    this.dataService.messageSource.next(msg.value);
    // this.dataService.messageSource.next("Hello");

  }
}
