import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AdvancedConceptInAngular';
  se:any;
  students=[
    {
      name:"Rajesh Kumar",
      email:"rajesh@gmail.com",
      address:"Kanpur"
    },
    {
      name:"Surendra Kumar",
      email:"surendra@gmail.com",
      address:"Fatehpur"
    },
    {
      name:"Prashant Kumar",
      email:"prashant@gmail.com",
      address:"Kamasi"
    },
    {
      name:"Mayank Kumar",
      email:"mayank@gmail.com",
      address:"Gurugram"
    },
    {
      name:"Avinash Kumar",
      email:"avinash@gmail.com",
      address:"Hariyana"
    }
  ]
}
