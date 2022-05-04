import * as mongoose from 'mongoose';

export const WalletSchema = new mongoose.Schema({
  address: String,
  balance: Number,
  isFavorite: Boolean,
  isOld: Boolean,
  userId: String,
});
