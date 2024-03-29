import { Controller, Get, Inject } from '@nestjs/common';

import { Shopper4Service } from '../services/shopper4.service';

@Controller('shopper4')
export class Shopper4Controller {
    @Inject(Shopper4Service)
    private readonly shopper4Service: Shopper4Service;

    constructor(shopper4Service: Shopper4Service) {
        this.shopper4Service = shopper4Service;
    }

    @Get()
    findAll(): string {
        return this.shopper4Service.findAll();
    }
}