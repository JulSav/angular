import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


  people = PEOPLE;
  person: Person = {
    id: 1,
    name: 'Person1'
  };

  selectedPerson?: Person;

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }


}
