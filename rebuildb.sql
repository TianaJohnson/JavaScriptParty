CREATE TABLE "to-do-list"
(
	"id" SERIAL PRIMARY KEY,
	"chore" varchar(80) not null,
	"complete" BOOLEAN
);

INSERT INTO "to-do-list"
	("chore", "complete")
VALUES
	('Fold and put away clothes', true),
	('Grocery shopping', false),
	('Dishes', true),
	('Sweep the floors', false);