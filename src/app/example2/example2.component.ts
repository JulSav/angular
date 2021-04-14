import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  myFunction(): void {
    alert('You pressed cool button to show one-way binding');
  }


  val: string = '';
  @Input() name: string;
  @Input() age: string;
  // @Output() onlogout = new EventEmitter<boolean>();
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }


}
