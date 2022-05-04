import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletsService } from './wallets.service';
import { Wallet } from './interfaces/wallet.interface';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly WalletsService: WalletsService) {}

  @Get()
  findAll(): Promise<Wallet[]> {
    return this.WalletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Wallet> {
    return this.WalletsService.findOne(id);
  }

  @Get('/user/:userId')
  findAllByUserId(@Param('userId') userId): Promise<Wallet[]> {
    return this.WalletsService.findAllByUserId(userId);
  }

  @Post()
  create(@Body() createWalletDto: CreateWalletDto): Promise<Wallet> {
    return this.WalletsService.create(createWalletDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Wallet> {
    return this.WalletsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateWalletDto: CreateWalletDto, @Param('id') id): Promise<Wallet> {
    return this.WalletsService.update(id, updateWalletDto);
  }
}
