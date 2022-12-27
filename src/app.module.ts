import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './app/users/user.module';
import { AuthModule } from './auth/auth.module';
import { ClientsModule } from './app/clients/clients.module';
import { isNumber } from 'class-validator';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: isNumber(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts, .js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      extra: {
        trustServerCertificate: true,
      },
    } as TypeOrmModuleOptions),
    UserModule,
    AuthModule,
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
