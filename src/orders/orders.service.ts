import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  private orders = []; 

  createOrder(createOrderDTO: CreateOrderDTO) {
    const newOrder = {
      orderId: this.orders.length + 1,
      ...createOrderDTO,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  getOrder(orderId: string) {

    const order = this.orders.find(o => o.orderId === +orderId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  updateOrder(orderId: string, updateOrderDTO: UpdateOrderDTO) {

    const orderIndex = this.orders.findIndex(o => o.orderId === +orderId);
    if (orderIndex === -1) {
      throw new NotFoundException('Order not found');
    }

    this.orders[orderIndex] = {
      ...this.orders[orderIndex],
      ...updateOrderDTO,
    };

    return this.orders[orderIndex];
    
    
  }
    getAllOrders() {
     
    return this.orders;
  }
}

