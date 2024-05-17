import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column({ unique: true })
  public readonly email: string;

  @Column('boolean', { default: true })
  public readonly isSubscribed: boolean;
}
