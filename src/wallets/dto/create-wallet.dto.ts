export class CreateWalletDto {
  readonly address: string;
  readonly balance: number;
  readonly isFavorite: boolean;
  readonly isOld: boolean;
  readonly userId: string;
}
