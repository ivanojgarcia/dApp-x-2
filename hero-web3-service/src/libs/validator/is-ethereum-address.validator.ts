import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsEthereumAddressConstraint
  implements ValidatorConstraintInterface
{
  validate(value: any, _args: ValidationArguments) {
    if (typeof value !== 'string') return false;
    return /^0x[a-fA-F0-9]{40}$/.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'The value must be a valid Ethereum address';
  }
}

export function IsEthereumAddress(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEthereumAddressConstraint,
    });
  };
}
