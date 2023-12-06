// src/orders/order.controller.ts
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrderService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDTO: CreateOrderDTO) {
    return this.orderService.createOrder(createOrderDTO);
  }

  @Get(':orderId')
  findOne(@Param('orderId') orderId: string) {
    return this.orderService.getOrder(orderId);
  }

  @Put(':orderId')
  update(@Param('orderId') orderId: string, @Body() updateOrderDTO: UpdateOrderDTO) {
    return this.orderService.updateOrder(orderId, updateOrderDTO);
  }
}

