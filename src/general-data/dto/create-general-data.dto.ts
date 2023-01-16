export class CreateGeneraldataDto {
  fullName: string;
  birthDate: string;
  gender: 'MALE' | 'FEMALE';
  photo: string;
  email: string;
  phone: string;
  rg: string;
  cpf: string;
  cns: string;
  user: {
    connect: {
      id: string;
    };
  };
}
