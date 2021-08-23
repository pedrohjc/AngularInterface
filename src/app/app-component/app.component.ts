import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@Angular/common/http';
import { without } from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'Wisdom Pet Medicine';
  theList: any;

  addApt(theApt: object){
    this.theList.unshift(theApt);
  }

  deleteApt(theApt: object){
    this.theList = without(this.theList, theApt);
  }

  constructor( private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Object[]>('../assets/data.json').subscribe(data => {
      this.theList = data;
    });
  }

}
