import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list : Array <string> = [];
  @Output() deleteName = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeName(item:number){
    this.deleteName.emit(item)
  }

}
