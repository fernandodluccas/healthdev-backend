export class CreateAddressDto {
  state: string;
  city: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  user: {
    connect: {
      id: string;
    };
  };
}
