import {
  createParamDecorator,
  ExecutionContext,
  ValidationPipe,
} from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';

/**
 * Decorator for validating headers with ValidationPipe, class-transformer and class-validator.
 *
 * @example
 * // require user agent to accept english
 *
 * class GetBooksHeadersDto {
 *  (a)Contains('en')
 *  'accept-language': string
 * }
 *
 * (a)Get()
 * getBooks(
 *  (a)HeadersWithValidation(() => GetBooksHeadersDto) headers: GetBooksHeadersDto,
 * ) {...}
 */
export const HeadersWithValidation = createParamDecorator(
  async (
    typeResolver: () => ClassConstructor<unknown>,
    ctx: ExecutionContext,
  ) => {
    // extract headers
    const headers = ctx.switchToHttp().getRequest().headers;

    const validationPipe = new ValidationPipe({
      expectedType: typeResolver(),
      transform: true,
      whitelist: true,
      validateCustomDecorators: true,
    });

    const result = await validationPipe.transform(headers, {
      type: 'custom',
    });

    return result;
  },
);
