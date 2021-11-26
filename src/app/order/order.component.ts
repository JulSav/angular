import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { OrdersService } from '../services/orders.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: Order[];
  showModal: boolean;

  constructor(private orderService: OrdersService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.orderService.getAll().subscribe((orders: Order[]) => this.orders = orders);
  }

  orderLogout(): void {
    this.authService.logout();
  }
}
