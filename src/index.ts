import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle("postgresql://neondb_owner:npg_CDE0LGWiO1AS@ep-steep-wildflower-b4cbixgl-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
