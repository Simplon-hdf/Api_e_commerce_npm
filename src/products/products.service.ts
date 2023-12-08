import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import NormalizedResponse from 'src/utils/normalized-response'; 

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  public async createProduct(createProductDto: CreateProductDto) {
    const createdProduct = new NormalizedResponse(
      `Product ${createProductDto.product_name} has been created`,
      await this.prisma.products.create({
        data: {
          name: createProductDto.product_name,
          description: createProductDto.product_description,
          price: createProductDto.product_price,
          quantity: createProductDto.product_quantity,
        },
      }),
    );
    return createdProduct.toJSON();
  }

  public async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = new NormalizedResponse(
      `Product with ID ${id} has been updated`,
      await this.prisma.products.update({
        where: {
          UUID: id,
        },
        data: {
          name: updateProductDto.product_name,
          description: updateProductDto.product_description,
          price: updateProductDto.product_price,
          quantity: updateProductDto.product_quantity,
        },
      }),
    );
    return updatedProduct.toJSON();
  }

  public async deleteProduct(id: string) {
    const product = await this.prisma.products.findUnique({
      where: {
        UUID: id,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    const deletedProduct = new NormalizedResponse(
      `Product with ID ${id} has been deleted`,
      await this.prisma.products.delete({
        where: {
          UUID: id,
        },
      }),
    );
    return deletedProduct.toJSON();
  }

  public async getAllProducts() {
    return this.prisma.products.findMany();
  }
}
