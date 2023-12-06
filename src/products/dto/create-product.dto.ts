import { IsString, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';
//npm install reflect-metadata && npm install class-validator

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  product_name: string;

  @IsString()
  @IsNotEmpty()
  product_description: string;

  @IsNumber()
  @IsNotEmpty()
  product_price: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  product_quantity?: number;
}
