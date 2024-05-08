import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryData:unknown;
  constructor(private msgservice:MessageServiceService) {
    // here we are subscribing the data
    this.msgservice.sharingdata.subscribe((msg)=>
    {
      this.galleryData=msg;
    })
}

  ngOnInit(): void {
  }
  onSubmit(data:any)
  {
   this.msgservice.sharingdata.next(data.value); // here we are sending the data
  }

}
