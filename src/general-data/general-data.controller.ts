import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateGeneraldataDto } from './dto/create-general-data.dto';
import { UpdateGeneraldataDto } from './dto/update-general-data.dto';
import { GeneralDataService } from './general-data.service';

@Controller('general-data')
export class GeneralDataController {
  constructor(private readonly generalDataService: GeneralDataService) {}

  @Post()
  create(@Body() createGeneralDatumDto: CreateGeneraldataDto) {
    return this.generalDataService.create(createGeneralDatumDto);
  }

  @Get()
  findAll() {
    return this.generalDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalDataService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGeneralDatumDto: UpdateGeneraldataDto,
  ) {
    return this.generalDataService.update(id, updateGeneralDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalDataService.remove(id);
  }
}
