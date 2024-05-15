import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  // selectedOption: string = '';

  // onOptionSelected(): void {
  //   console.log('Selected option:', this.selectedOption);
  //   // Implement any additional logic based on the selected option
  // }

  // populoate the drop -down after getting the data via api call......

  selectedOption: string = '';
  dropdownOptions: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make API call to fetch dropdown options
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (response) => {
          this.dropdownOptions = response; // Assuming API response is an array of objects
        },
        (error) => {
          console.error('Failed to fetch dropdown options:', error);
        }
      );
  }

  onOptionSelected(): void {
    console.log('Selected option:', this.selectedOption);
    // Implement any additional logic based on the selected option
  }
}
