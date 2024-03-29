import { Test, TestingModule } from '@nestjs/testing';
import { Shopper4Controller } from '../../src/controller/shopper4.controller';
import { Shopper4Service } from '../../src/services/shopper4.service';

describe('Shopper4Controller', () => {
  let controller: Shopper4Controller;
  let service: Shopper4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Shopper4Controller],
      providers: [Shopper4Service],
    }).compile();

    controller = module.get<Shopper4Controller>(Shopper4Controller);
    service = module.get<Shopper4Service>(Shopper4Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a string from the service', () => {
      const mockResponse = 'Mock response from service';
      jest.spyOn(service, 'findAll').mockReturnValue(mockResponse);

      const result = controller.findAll();
      expect(result).toEqual(mockResponse);
    });
  });
});
