import { IsEthereumAddress } from '@libs/validator/is-ethereum-address.validator';

export class HeaderUserAdresssDTO {
  @IsEthereumAddress()
  'x-user-address': string;
}
