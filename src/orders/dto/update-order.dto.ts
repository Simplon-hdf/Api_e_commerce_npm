 import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDTO } from './create-order.dto';
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

//export class UpdateOrderDto extends CreateOrderDto{}

// src/orders/dto/update-order.dto.ts

export class UpdateOrderDTO{
//export class UpdateOrderDTO {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsArray()
  products: string[]; // Assuming product IDs or details

  @IsOptional()
  @IsNumber()
  @IsPositive()
  totalAmount: number;
}

