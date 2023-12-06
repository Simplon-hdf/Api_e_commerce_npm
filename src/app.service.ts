import { Injectable } from '@nestjs/common';
import { OrderService } from './orders/orders.service'; 
import { CreateOrderDTO } from './orders/dto/create-order.dto';

@Injectable()
export class AppService {
  constructor(private readonly orderService: OrderService) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderDTO: CreateOrderDTO) {
    return this.orderService.createOrder(createOrderDTO);
  }
}
