import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfessionalDataService } from './professional-data.service';
import { CreateProfessionalDataDto } from './dto/create-professional-data.dto';
import { UpdateProfessionalDataDto } from './dto/update-professional-data.dto';

@Controller('professional-data')
export class ProfessionalDataController {
  constructor(
    private readonly professionalDataService: ProfessionalDataService,
  ) {}

  @Post()
  create(@Body() data: CreateProfessionalDataDto) {
    return this.professionalDataService.create(data);
  }

  @Get()
  findAll() {
    return this.professionalDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionalDataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateProfessionalDataDto) {
    return this.professionalDataService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionalDataService.remove(id);
  }
}
