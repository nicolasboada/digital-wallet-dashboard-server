import { Injectable } from '@nestjs/common';
import { Wallet } from './interfaces/wallet.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WalletsService {
  constructor(@InjectModel('Wallet') private readonly walletModel: Model<Wallet>) {}

  async findAll(): Promise<Wallet[]> {
    return await this.walletModel.find();
  }

  async findOne(id: string): Promise<Wallet> {
    return await this.walletModel.findOne({ _id: id });
  }

  async findAllByUserId(userId: string): Promise<Wallet[]> {
    return await this.walletModel.find({ userId: userId });
  }

  async create(wallet: Wallet): Promise<Wallet> {
    const newWallet = new this.walletModel(wallet);
    return await newWallet.save();
  }

  async delete(id: string): Promise<Wallet> {
    return await this.walletModel.findByIdAndRemove(id);
  }

  async update(id: string, wallet: Wallet): Promise<Wallet> {
    return await this.walletModel.findByIdAndUpdate(id, wallet, { new: true });
  }
}
