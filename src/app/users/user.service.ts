import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.userRepository.find({
      select: ['id', 'firstName', 'lastName', 'email'],
    });
  }
  async findOne(id?: string, email?: string) {
    return await this.userRepository.findOne({
      where: { id, email },
    });
  }
  async store(data: CreateUserDto) {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }
  async update(id: string, data: UpdateUserDto) {
    const user = await this.findOne(id);
    this.userRepository.merge(user, data);
    return await this.userRepository.save(user);
  }
  async destroy(id: string) {
    await this.findOne(id);
    this.userRepository.softDelete(id);
  }
}
