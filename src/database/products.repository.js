import Database from "./my-sql.db.js";
import { Product } from "../entities/index.js";


export default class ProductsRepository {
    #db;
    /**@param {Database} database - The database to run the commands*/
    constructor(database) {
        if (database == null)
            throw new Error('Database is required!');
        if (!(database instanceof Database))
            throw new Error('The value passed to de constructor of ProductsRepository is not a valid database!');

        this.#db = database;
    }

    /** @param {Product} product the product to create into the database */
    async add(product) {
        if (!(product instanceof Product))
            throw new Error('The paramater passed to ProductsRepository.add is not a valid product');
        try {
            await this.#db.executeNonQuery(
                'INSERT INTO Product(description, meauserement_unit, subcategory_id) VALUES (:description, :unit, :subcategory);',
                {
                    description: product.description,
                    unit: product.measurementUnit,
                    subcategory: 10000 // até segunda ordem 
                }
            );
        } catch (error) {
            throw new Error(`Erro while executing the insert at ProductsRepository.add\n${error}`);
        }
    }

    async update(product) {
        if (!(product instanceof Product))
            throw new Error('The paramater passed to ProductsRepository.add is not a valid product');

        try 
        {
            await this.#db.executeNonQuery(
                'UPDATE Product SET description = :description, meauserement_unit = :unit, subcategory_id = :subcategory WHERE id = :id;',
                {
                    description: product.description,
                    unit: product.unit,
                    subcategory: 1000,
                    id: product.id
                }
            );
        }
        catch (error) {

        }
    }

    async delete(product) {
        if (!(product instanceof Product))
            throw new Error('The paramater passed to ProductsRepository.add is not a valid product');
        this.#db.executeNonQuery('DELETE FROM Product WHERE id = ?;', [product.id]);
    }

    async getById(product) {
        if (!(product instanceof Product))
            throw new Error('The paramater passed to ProductsRepository.add is not a valid product');
        this.#db.executeNonQuery(
            'INSERT INTO product(description, meauserement_unit, subcategory_id) VALUES (:description, :unit, :subcategory)',
            {
                description: product.description,
                unit: product.unit

            }
        );
    }

    async get(product) {
        if (!(product instanceof Product))
            throw new Error('The paramater passed to ProductsRepository.add is not a valid product');
        this.#db.executeNonQuery(
            'INSERT INTO product(description, meauserement_unit, subcategory_id) VALUES (:description, :unit, :subcategory)',
            {
                description: product.description,
                unit: product.unit

            }
        );
    }

}
