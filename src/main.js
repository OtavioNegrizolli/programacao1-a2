import dotenv from 'dotenv';
dotenv.config();

import { Database, ProductsRepository } from './database/index.js';
import { Product } from './entities/index.js';


const p = new Product({
    description: 'prod 03',
    measurementUnit: 'KG'
});
const database  = new Database();
const repo = new ProductsRepository(database);
try {
    await repo.add(p);
} catch (error) {
    console.log(error);
}
