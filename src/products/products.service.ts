import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(createProductDto: CreateProductDto) {
    const { product_name, product_description, product_price, product_quantity } = createProductDto;

    return this.prisma.products.create({
      data: {
        name: product_name,
        description: product_description,
        price: product_price,
        quantity: product_quantity,
      },
    });
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.products.update({
      where: {
        UUID: id,
      },
      data: {
        name: updateProductDto.product_name,
        description: updateProductDto.product_description,
        price: updateProductDto.product_price,
        quantity: updateProductDto.product_quantity,
      },
    });
  }

  async deleteProduct(id: string) {
    const product = await this.prisma.products.findUnique({
      where: {
        UUID: id,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.prisma.products.delete({
      where: {
        UUID: id,
      },
    });
  }
}
