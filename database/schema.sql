set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"character" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."games" (
	"gameId" serial NOT NULL,
	"hostId" int NOT NULL UNIQUE,
	"oppId" int UNIQUE,
	CONSTRAINT "games_pk" PRIMARY KEY ("gameId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "games" ADD CONSTRAINT "games_fk0" FOREIGN KEY ("hostId") REFERENCES "users"("userId");
ALTER TABLE "games" ADD CONSTRAINT "games_fk1" FOREIGN KEY ("oppId") REFERENCES "users"("userId");
