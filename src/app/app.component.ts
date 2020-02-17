import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngfor-angular';
  dataList: any[];
  constructor() {
    this.dataList = [
      {
        'FirstName' : 'Roy',
        'LastName'  : 'Agasthyan'
      },
      {
        'FirstName' : 'Sam',
        'LastName'  : 'Johnson'
      },
      {
        'FirstName' : 'Anjali',
        'LastName'  : 'Sharma'
      },
      {
        'FirstName' : 'Julia',
        'LastName'  : 'Sherwood'
      }
    ];
  }
}
