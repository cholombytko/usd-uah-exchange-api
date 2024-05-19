import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './email/entities/email.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/**/entities/*.entity.{ts,js}'],
        synchronize: false,
        migrations: [__dirname + '/../migrations/*.{ts,js}'],
        cli: {
          migrationDir: 'src/migrations',
        },
        migrationsRun: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
