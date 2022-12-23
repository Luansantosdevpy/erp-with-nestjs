import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  DeleteDateColumn,
} from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity({ name: 'clients' })
export class ClientsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column({ name: 'adress' })
  adress: string;

  @Column({ name: 'number' })
  number: number;

  @Column({ name: 'district' })
  district: string;

  @Column({ name: 'cep' })
  cep: string;

  @Column({ name: 'cpf' })
  cpf: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn()
  deletedAt: string;
}
