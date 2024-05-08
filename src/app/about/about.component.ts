import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  aboutData:unknown;
  constructor(private msgservice:MessageServiceService) {
      this.msgservice.sharingdata.subscribe((msg)=>
      {
        this.aboutData=msg;
      })
  }

  ngOnInit(): void {
  }
  onSubmit(data:any)
  {
   this.msgservice.sharingdata.next(data.value);
  }

}
