import { Pool } from "pg"
import * as dotenv from 'dotenv'
dotenv.config()

export const Client = new Pool({
    connectionString: process.env.CONNECTION_PORT    
})