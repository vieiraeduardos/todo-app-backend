const postgres = require("postgres");

require("dotenv").config();

const sql = postgres(`${process.env.DATABASE_URL}`);

async function createTable() {
    const result = await sql`CREATE TABLE todos (
        code VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255),
        created_at TIMESTAMP,
        updated_at TIMESTAMP,
        is_completed BOOLEAN
    )`
    
    console.log("tabela adicionada", result);
}

createTable();