import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 255 }).notNull(),
  lastName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull()

});

export const posts = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title:varchar({ length: 255 }).notNull(),
  des:varchar().notNull(),
})


export const blogs = pgTable("blog", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title:varchar({ length: 255 }).notNull(),
  des:varchar().notNull(),
})
