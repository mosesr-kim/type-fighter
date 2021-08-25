set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."game" (
	"isJoined" BOOLEAN NOT NULL,
	"createdAt" TIMESTAMP(6) WITH TIME ZONE NOT NULL default now(),
	"gameId" serial NOT NULL,
	CONSTRAINT "game_pk" PRIMARY KEY ("gameId")
) WITH (
  OIDS=FALSE
);
