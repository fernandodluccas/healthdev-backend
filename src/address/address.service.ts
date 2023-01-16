import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateAddressDto) {
    return await this.prisma.address.create({
      data,
    });
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: string) {
    return `This action returns a #${id} address`;
  }

  async update(id: string, data: UpdateAddressDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        address: true,
      },
    });

    return await this.prisma.address.update({
      where: {
        id: user.address.id,
      },
      data,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} address`;
  }
}
