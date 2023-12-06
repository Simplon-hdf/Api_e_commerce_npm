// src/orders/dto/create-order.dto.ts
import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsArray()
  products: string[]; // Assuming product IDs or details

  @IsNumber()
  @IsPositive()
  totalAmount: number;
}

