import { HttpException, HttpStatus } from '@nestjs/common';

export class ExistingEmailException extends HttpException {
  constructor() {
    super('E-mail already exists', HttpStatus.CONFLICT);
  }
}
