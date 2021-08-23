import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent{

  @Input() aptList: any;
  @Output() deleteEvt = new EventEmitter();

  handleDelete(theApt: object){
    console.log(theApt);
    this.deleteEvt.emit(theApt);
  }
}
