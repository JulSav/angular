import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order } from '../model/order.model';
import { AuthService } from '../services/auth.service';
import { OrdersService } from '../services/orders.service';

import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let order: OrderComponent;
  let ordersService: OrdersService;
  let authService: AuthService;
  let router: Router;
  // let fixture: ComponentFixture<TableComponent>;
  const orders = [
    {name: 'Order_test', category: 'Category_test', price: 22 }
  ];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      providers: [
        { provide: HttpClient, useValue: HttpClient }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    ordersService = jasmine.createSpyObj(['getAll']);
    authService = jasmine.createSpyObj(['logout']);
    router = jasmine.createSpyObj(['navigate']);
    order = new OrderComponent(ordersService, authService);
    const observable: Observable<Order[]> = of(orders);
    ordersService.getAll = jasmine.createSpy().and.callFake(() => {
      return observable;
    });
    order.ngOnInit();
  });

  // checking if the table component is created
  it('should create', () => {
    expect(order).toBeTruthy();
  });

  // checking if the orders are displayed correctly
  it('should display received orders', () => {
      expect(order.orders).toEqual(orders);
  });
});
