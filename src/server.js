import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
  

import express from 'express';
const app = express();
dotenv.config();

app.use(express.json())

app.use(cors({
    origin: '*',
    method: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));

const db = drizzle(process.env.DATABASE_URL);

app.get ('/', function (req, res){
    res.json("Hello!")
})

app.post ('/users', async function (req, res){
    const{firstName,lastName,email,password} = req.body

    const hashedPassword = await bcrypt.hash (password, 10)

    const user = {
        firstName,
        lastName,
        email,
        password:hashedPassword
    }
    await db.insert(usersTable).values(user);
    console.log("New user created!")
})



app.listen(3333, function(){
    console.log("Server is on, 3333")
})