import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  userName: string;
  age: number;
  todayDate: Date;
  isUserLoggedIn = true;
  isTheNgContentExample = true;
  x: number = 15.45;
  
  informations = [
    { name: 'Sectret Information 1', author: 'Julia' },
    { name: 'Sectret Information 2', author: 'Julia' },
    { name: 'Sectret Information 3', author: 'Julia' },
    { name: 'Sectret Information 4', author: 'Julia' },
    { name: 'Sectret Information 5', author: 'Julia' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.userName = 'Julia';
    this.age = 9.6;
    this.todayDate = new Date();

  }

  logout(): void {
    this.isUserLoggedIn = false;
    alert('User has been logged out');
  }


  @ViewChild(ProfileComponent, { static: false })
  private counterComponent: ProfileComponent;

  increment() { this.counterComponent.increment(); }
  decrement() { this.counterComponent.decrement(); }

}
