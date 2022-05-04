export interface Wallet {
  id?: string;
  address: string;
  balance: number;
  isFavorite: boolean,
  isOld: boolean,
  userId: string,
}
