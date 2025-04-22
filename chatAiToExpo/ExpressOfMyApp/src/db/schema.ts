import {
  integer,
  pgTable,
  varchar,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";

export const recordsTable = pgTable("records", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  amount: integer("amount").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  date: timestamp("date").notNull(),
  createAt: timestamp("create_at").defaultNow().notNull(),
});
