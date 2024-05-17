import { Controller, Post, Body } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { CreateSubscribtionDto } from './dto/create-subscription.dto';

@Controller('subscribe')
export class SubscribeController {
  constructor(private readonly subscribeService: SubscribeService) {}

  @Post()
  create(@Body() createSubscribtionDto: CreateSubscribtionDto) {
    return this.subscribeService.createSubscription(createSubscribtionDto);
  }
}
