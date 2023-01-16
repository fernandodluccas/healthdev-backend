import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneraldataDto } from './create-general-data.dto';

export class UpdateGeneraldataDto extends PartialType(CreateGeneraldataDto) {}
