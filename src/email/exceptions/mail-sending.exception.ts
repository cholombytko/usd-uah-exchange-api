import { HttpException, HttpStatus } from '@nestjs/common';

export class MailSendingException extends HttpException {
  constructor() {
    super('Failed to send email', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
