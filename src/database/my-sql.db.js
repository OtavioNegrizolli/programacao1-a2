import { createPool } from 'mysql2/promise';

const dbPool = createPool({
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    connectionLimit: process.env.DB_POOL_LIMIT || 20,
    waitForConnections: true,
    enableKeepAlive: true,
});

export default class Database {

    constructor() { }
    async executeNonQuery(sql, params) {
        try {
            const [rows, fields] = await dbPool.query({ 
                sql, 
                values: params,
                namedPlaceholders: !Array.isArray(params) 
            });
            console.log(rows, fields);
            return rows.insertId;
        } catch (error) {
            throw new Error(`Faild to execute the query\n${error}`);
        }
    }
}
