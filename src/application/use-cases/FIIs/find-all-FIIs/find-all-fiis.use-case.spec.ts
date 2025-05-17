import { Test, TestingModule } from '@nestjs/testing';
import { IFiiRepository } from 'src/domain/interfaces/fii/fii.interface';
import { FindAllFIIsDto } from '../dtos/find-all-fiis.dto';
import { FindAllFIIsUseCase } from './find-all-fiis.use-case';
import { FiiEntity } from 'src/domain/entities/fii/fii.entity';

describe('FindAllFIIsUseCase', () => {
  let findAllFIIsUseCase: FindAllFIIsUseCase;
  let fiiRepositoryMock: jest.Mocked<IFiiRepository>;

  beforeEach(async () => {
    fiiRepositoryMock = {
      find: jest.fn(),
      save: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllFIIsUseCase,
        {
          provide: 'IFiiRepository',
          useValue: fiiRepositoryMock,
        },
      ],
    }).compile();

    findAllFIIsUseCase = module.get<FindAllFIIsUseCase>(FindAllFIIsUseCase);
  });

  it('should be defined', () => {
    expect(findAllFIIsUseCase).toBeDefined();
  });

  it('should return a list of FindAllFIIsDto when handle is called', async () => {
    const mockData: FiiEntity[] = [
      {
        id: 1,
        name: 'FII A',
        initialPurchaseValue: 100,
        numberOfShares: 10,
        userId: 4,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: 'FII B',
        initialPurchaseValue: 200,
        numberOfShares: 20,
        userId: 3,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ];
    fiiRepositoryMock.find.mockResolvedValue(mockData);

    jest.spyOn(FindAllFIIsDto, 'toDto').mockImplementation((entity) => {
      return {
        id: entity.id,
        name: entity.name,
        initialPurchaseValue: entity.initialPurchaseValue,
        numberOfShares: entity.numberOfShares,
        userId: entity.userId,
        isActive: entity.isActive,
        createdAt: entity.createdAt,
        updatedAt: entity.updatedAt,
        deletedAt: entity.deletedAt,
      };
    });

    const result = await findAllFIIsUseCase.handle();

    expect(fiiRepositoryMock.find).toHaveBeenCalledTimes(1);
    expect(result).toEqual([
      {
        id: 1,
        name: 'FII A',
        initialPurchaseValue: 100,
        numberOfShares: 10,
        userId: 4,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: 'FII B',
        initialPurchaseValue: 200,
        numberOfShares: 20,
        userId: 3,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  });

  it('should call the repository find method', async () => {
    fiiRepositoryMock.find.mockResolvedValue([]);
    await findAllFIIsUseCase.handle();
    expect(fiiRepositoryMock.find).toHaveBeenCalled();
  });
});
