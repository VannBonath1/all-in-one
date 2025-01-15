import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MerchantModule } from './modules/merchant/merchant/merchant.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Replace with your database host
      port: 5432, // Default PostgreSQL port
      username: 'postgres', // Your PostgreSQL username
      password: 'admin', // Your PostgreSQL password
      database: 'all-in-one', // Your PostgreSQL database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to entities
      synchronize: true, // Auto-sync schema in development (disable in production)
    }),
    MerchantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
