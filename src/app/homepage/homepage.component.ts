import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  currentName = 'NameFromHomepage';
  currentAge = 'AgeFromHomepage';
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
}
