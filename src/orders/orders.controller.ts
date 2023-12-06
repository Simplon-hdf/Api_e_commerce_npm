// src/orders/order.controller.ts
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';
import { UpdateOrderDTO } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDTO: CreateOrderDTO) {
    return this.ordersService.createOrder(createOrderDTO);
  }

  @Get(':orderId')
  findOne(@Param('orderId') orderId: string) {
    return this.ordersService.getOrder(orderId);
  }

  @Put(':orderId')
  update(@Param('orderId') orderId: string, @Body() updateOrderDTO: UpdateOrderDTO) {
    return this.ordersService.updateOrder(orderId, updateOrderDTO);
  }
}

