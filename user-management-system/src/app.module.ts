import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module'; 
import { LogModule } from './log/log.module'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'postgres',
      password: '@2Harshiv@2', 
      database: 'user-management', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    UserModule,
    LogModule,  
  ],
})
export class AppModule {}
