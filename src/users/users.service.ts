import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: data.username,
      },
    });

    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    data.password = hashedPassword;

    return await this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        address: true,
        generalData: true,
        professionalData: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    const user = this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    data.password = hashedPassword;

    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    const user = this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
