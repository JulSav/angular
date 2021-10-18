import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.orderService.getAll().subscribe((orders: Order[]) => this.orders = orders);
  }
}
