import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nom du produit',
    minLength: 1,
    maxLength: 20,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  product_name: string;

  @ApiProperty({
    description: 'Description du produit',
    minLength: 1,
    maxLength: 500,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 500)
  product_description: string;

  @ApiProperty({
    description: 'Prix du produit',
    minimum: 0.01,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0.01)
  product_price: number;

  @ApiProperty({
    description: 'Quantité du produit',
    minimum: 1,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  product_quantity?: number;
}
