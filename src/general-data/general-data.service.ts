import { Injectable, Scope } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneraldataDto } from './dto/create-general-data.dto';
import { UpdateGeneraldataDto } from './dto/update-general-data.dto';

@Injectable({ scope: Scope.REQUEST })
export class GeneralDataService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateGeneraldataDto) {
    return await this.prisma.generalData.create({
      data,
    });
  }

  findAll() {
    return `This action returns all generalData`;
  }

  async findOne(id: string) {
    const generalData = await this.prisma.generalData.findFirst({
      where: {
        userId: id,
      },
    });

    return generalData;
  }

  async update(id: string, data: UpdateGeneraldataDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        generalData: true,
      },
    });

    return await this.prisma.generalData.update({
      where: {
        id: user.generalData.id,
      },
      data,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} generaldata`;
  }
}
