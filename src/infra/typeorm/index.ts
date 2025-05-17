import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './entities/user-entity.typeorm';
import { FII } from './entities/fii-entity.typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'fii-track',
  synchronize: true,
  logging: false,
  entities: [User, FII],
  migrations: ['./migrations/*.ts'],
};

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: typeOrmConfig.host,
  port: typeOrmConfig.port,
  username: typeOrmConfig.username,
  password: typeOrmConfig.password,
  database: typeOrmConfig.database,
  synchronize: typeOrmConfig.synchronize,
  logging: typeOrmConfig.logging,
  entities: typeOrmConfig.entities,
  migrations: typeOrmConfig.migrations,
};

export const AppDataSource = new DataSource(dataSourceOptions);

export const initializeDatabase = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log('Banco de dados conectado com sucesso!');
    }
    return AppDataSource;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    process.exit(1);
  }
};
