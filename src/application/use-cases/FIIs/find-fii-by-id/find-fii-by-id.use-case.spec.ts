import { Test, TestingModule } from '@nestjs/testing';
import { FindFiiByIdUseCase } from './find-fii-by-id.use-case';
import { IFiiRepository } from 'src/domain/interfaces/fii/fii.interface';
import { FindFiiByIdDto } from '../dtos/find-fii-by-id.dto';
import { NotFoundException } from '@nestjs/common';
import { FiiEntity } from 'src/domain/entities/fii/fii.entity';

describe('FindFiiByIdUseCase', () => {
  let findFiiByIdUseCase: FindFiiByIdUseCase;
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
        FindFiiByIdUseCase,
        {
          provide: 'IFiiRepository',
          useValue: fiiRepositoryMock,
        },
      ],
    }).compile();

    findFiiByIdUseCase = module.get<FindFiiByIdUseCase>(FindFiiByIdUseCase);
  });

  it('should be defined', () => {
    expect(findFiiByIdUseCase).toBeDefined();
  });

  it('should return a FindFiiByIdDto when a Fii is found', async () => {
    // Arrange
    const mockFii: FiiEntity = {
      id: 1,
      name: 'FII A',
      initialPurchaseValue: 100,
      numberOfShares: 10,
      userId: 1,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: undefined,
    };

    fiiRepositoryMock.findById.mockResolvedValue(mockFii);

    jest.spyOn(FindFiiByIdDto, 'toDto').mockImplementation((entity) => {
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

    // Act
    const result = await findFiiByIdUseCase.handle(1);

    // Assert
    expect(fiiRepositoryMock.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual({ id: '1', name: 'FII A', category: 'Category A' });
  });

  it('should throw a NotFoundException when no Fii is found', async () => {
    // Arrange
    fiiRepositoryMock.findById.mockResolvedValue(null);

    // Act & Assert
    await expect(findFiiByIdUseCase.handle(1)).rejects.toThrowError(
      NotFoundException,
    );
    expect(fiiRepositoryMock.findById).toHaveBeenCalledWith(1);
  });
});
