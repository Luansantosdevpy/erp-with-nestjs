import { IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateClientDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  adress: string;

  @IsNotEmpty()
  number: number;

  @IsNotEmpty()
  district: string;

  @IsNotEmpty()
  cep: string;

  @IsNotEmpty()
  cpf: string;
}
