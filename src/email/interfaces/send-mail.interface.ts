export interface ISendMail {
  readonly to: string;

  readonly subject: string;

  readonly html: string;
}
