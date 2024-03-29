import { Test, TestingModule } from '@nestjs/testing';
import { Shopper4Service } from '../../src/services/shopper4.service';

describe('Shopper4Service', () => {
  let service: Shopper4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Shopper4Service],
    }).compile();

    service = module.get<Shopper4Service>(Shopper4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string', () => {
      const result = service.findAll();
      expect(result).toEqual(expect.any(String));
    });

    it('should return a greeting message', () => {
      const result = service.findAll();
      expect(result).toEqual('Hello from shopper4 service');
    });
  });
});
