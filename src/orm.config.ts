import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: 'root',
    port: 6969,
    host: '127.0.0.1',
    database: 'RVFdb',
    synchronize: true,
    entities:['dist/**/*.entity{.ts,.js}'],
}; 