import { Pool, QueryResult } from 'pg';
import env from 'dotenv';
env.config({ path: `${__dirname}/../../.env` });

class PostgresDB {
    private query: (text: string, params?: string[]) => Promise<QueryResult<any>>;

    constructor() {
        const pool = new Pool({
            host: process.env.DB_URL,
            port: +process.env.DB_PORT!,
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        });

        this.query = (text: string, params: string[] = []) => pool.query(text, params);
    }

    public async insert(tableName: string, fields: Record<string, any>) {
        let keys: string[] = [];
        let values: string[] = [];
        for (let [k, v] of Object.entries(fields)) {
            keys.push(k);
            typeof v === 'string' ? values.push(`'${v}'`) : values.push(v);
        }

        const { rows } = await this.query(`INSERT INTO "${tableName}" (${keys.join(',')}) VALUES (${values.join(',')});`);

        return rows;
    }
}

const postgres = new PostgresDB();

export { postgres };
