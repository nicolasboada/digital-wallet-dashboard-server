import { Module } from '@nestjs/common';
import { WalletsController } from './wallets/wallets.controller';

import { WalletsService } from './wallets/wallets.service';
import { WalletsModule } from './wallets/wallets.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [WalletsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [WalletsController],
  providers: [WalletsService],
})
export class AppModule {}
