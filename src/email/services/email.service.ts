import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Email } from '../entities/email.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private readonly emailRepository: Repository<Email>,
  ) {}

  public async create(email: string): Promise<Email> {
    const existingEmail = await this.emailRepository.findOne({
      where: { email },
    });

    if (existingEmail) {
      throw new HttpException('E-mail already exists', HttpStatus.CONFLICT);
    }

    const newEmail = this.emailRepository.create({ email });
    await this.emailRepository.save(newEmail);
    return newEmail;
  }

  public async findAll(isSubscribed: boolean): Promise<Email[]> {
    const emails = await this.emailRepository.find({
      where: { isSubscribed },
    });
    return emails;
  }
}
