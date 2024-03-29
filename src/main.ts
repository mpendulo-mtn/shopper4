import { NestFactory } from '@nestjs/core';

import { Shopper4Module } from './shopper4.module';

const bootstrap = async () => {
    const app = await NestFactory.create(Shopper4Module);
    await app.listen(3000);
}

bootstrap();