import { Module } from '@nestjs/common';

import { Shopper4Controller } from './controller/shopper4.controller';
import { Shopper4Service } from './services/shopper4.service';

@Module({
    controllers: [Shopper4Controller],
    providers: [Shopper4Service]
})
export class Shopper4Module {}