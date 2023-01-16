import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessionalDataDto } from './create-professional-data.dto';

export class UpdateProfessionalDataDto extends PartialType(
  CreateProfessionalDataDto,
) {}
