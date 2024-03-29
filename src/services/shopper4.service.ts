import { Injectable } from '@nestjs/common';

@Injectable()
export class Shopper4Service {
    findAll(): string {
        return 'Hello from shopper4 service';
    }
}