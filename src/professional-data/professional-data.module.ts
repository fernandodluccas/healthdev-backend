import { Module } from '@nestjs/common';
import { ProfessionalDataService } from './professional-data.service';
import { ProfessionalDataController } from './professional-data.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProfessionalDataController],
  providers: [ProfessionalDataService, PrismaService],
})
export class ProfessionalDataModule {}
