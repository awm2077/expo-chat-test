CREATE TABLE "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"amount" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"date" timestamp NOT NULL,
	"create_at" timestamp DEFAULT now() NOT NULL
);
