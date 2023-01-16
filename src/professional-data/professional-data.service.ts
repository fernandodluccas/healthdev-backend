import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfessionalDataDto } from './dto/create-professional-data.dto';
import { UpdateProfessionalDataDto } from './dto/update-professional-data.dto';

@Injectable()
export class ProfessionalDataService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateProfessionalDataDto) {
    return await this.prisma.professionalData.create({
      data,
    });
  }

  findAll() {
    return `This action returns all professionalData`;
  }

  findOne(id: string) {
    return `This action returns a #${id} professionalDatum`;
  }

  async update(id: string, data: UpdateProfessionalDataDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
      include: {
        professionalData: true,
      },
    });

    return await this.prisma.professionalData.update({
      where: {
        id: user.professionalData.id,
      },
      data,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} professionalDatum`;
  }
}
