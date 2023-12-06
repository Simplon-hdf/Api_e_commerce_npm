// src/orders/order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  private orders = []; // Replace with your actual data store (database, in-memory storage, etc.)

  createOrder(createOrderDTO: CreateOrderDTO) {
    // Logic to create an order
    const newOrder = {
      orderId: this.orders.length + 1,
      ...createOrderDTO,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  getOrder(orderId: string) {
    // Logic to retrieve an order
    const order = this.orders.find(o => o.orderId === +orderId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  updateOrder(orderId: string, updateOrderDTO: UpdateOrderDTO) {
    // Logic to update an order
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
}

