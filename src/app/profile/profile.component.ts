import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  @Input() ngTemplateChildExample: ElementRef<any>;
  counter: number = 0;
  increment() { this.counter++; }
  decrement() { this.counter--; }

  constructor() { }

  ngOnInit(): void {
  }


}
