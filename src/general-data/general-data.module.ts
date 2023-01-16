import { Module } from '@nestjs/common';
import { GeneralDataService } from './general-data.service';
import { GeneralDataController } from './general-data.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GeneralDataController],
  providers: [GeneralDataService, PrismaService],
})
export class GeneralDataModule {}
