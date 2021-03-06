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
        'Employee' : {
          'Name' : {
            'First' : 'Roy',
            'Last' : 'Agasthyan'
          },
          'Address' : {
            'HouseNo' : 100,
            'State' : 'Kerala',
            'Country' : 'India'
          }
        }
      },
      {
        'Employee' : {
          'Name' : {
            'First' : 'Sam',
            'Last' : 'Thomson'
          },
          'Address' : {
            'HouseNo' : 120,
            'State' : 'Delhi',
            'Country' : 'India'
          }
        }
      }
    ];
  }

  getKeys(obj) {
    return Object.keys(obj);
  }
}
