CREATE TABLE "to-do-list"
(
    "id" SERIAL PRIMARY KEY,
    "chore" varchar(80) not null,
	"status" INT REFERENCES "chore_status"("id"),
    "complete" BOOLEAN	   
);

-- This one must be created first
CREATE TABLE "chore_status" (
	"id" SERIAL PRIMARY KEY,
	"to_be_completed" BOOLEAN,
	"in_progress" BOOLEAN,
	"urgent" BOOLEAN,
	"finished" BOOLEAN
	);

INSERT INTO "to-do-list"
	("chore", "complete")
VALUES
	('Fold and put away clothes', true),
	('Grocery shopping', false),
	('Dishes', true),
	('Sweep the floors', false);