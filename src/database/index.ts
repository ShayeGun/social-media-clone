import { Pool } from 'pg';
import env from 'dotenv';
env.config({ path: `${__dirname}/../../.env` });

const pool = new Pool({
    host: process.env.DB_URL,
    port: +process.env.DB_PORT!,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

export const query = (text: string, params: string[] = []) => pool.query(text, params);