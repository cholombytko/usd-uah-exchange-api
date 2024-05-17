import { Injectable } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';

@Injectable()
export class SubscribeService {
  create(createSubscribeDto: CreateSubscribeDto) {
    return 'This action adds a new subscribe';
  }
}
