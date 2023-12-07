import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

public async create(createUserDto: CreateUserDto) {
  const createdUser = await this.prisma.users.create({
    data: {
      pseudo: createUserDto.pseudo,
      username: createUserDto.username,
      password: createUserDto.password,
      created_at: new Date(),
    },
  });
  return createdUser;
}

  findAll() {
    return `This action returns all users`;
  }

  public async getByUUID(uuid: string) {
    const gettedUser = await this.prisma.users.findUnique({
      where: {
        UUID: uuid,
      },
    });
    return gettedUser;
  }

  public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prisma.users.update({
      where: {
        UUID: uuid,
      },
      data: {
        pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
        username: !!updateUserDto.username ? updateUserDto.username : undefined,
        password: !!updateUserDto.password ? updateUserDto.password : undefined,
      },
    });
    return updatedUser;
  }

  public async deleteByUUID(uuid: string) {
    const deletedUser = await this.prisma.users.delete({
      where: {
        UUID: uuid,
      },
    });
    return deletedUser;
}
}
