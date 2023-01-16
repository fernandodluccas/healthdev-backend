export class CreateProfessionalDataDto {
  council: string;
  councilState: string;
  councilNumber: string;
  specialty: string;
  rqe: string;
  idUser: string;
  memedSync: boolean;
  user: {
    connect: {
      id: string;
    };
  };
}
