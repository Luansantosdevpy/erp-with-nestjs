import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsEntity } from './clients.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientsEntity)
    private readonly userRepository: Repository<ClientsEntity>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }
  async findOne(id?: string) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }
  async store(data: CreateClientDto) {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }
  async update(id: string, data: UpdateClientDto) {
    const user = await this.findOne(id);
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  }
  async destroy(id: string) {
    await this.findOne(id);
    this.userRepository.softDelete(id);
  }
}
