--
-- Database: beezvibes_db
--

CREATE DATABASE beezvibes_db;

-- ENTITIES

--
-- Schema entity idea
--

CREATE TABLE IF NOT EXISTS "idea" (
	IdeaDesc varchar(130)  NOT NULL,
	IdeaTitle varchar(130)  NOT NULL,
	IsDeleted bool ,
	UserID int  NOT NULL,
	likeCount int ,
	unlikeCount int ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity role
--

CREATE TABLE IF NOT EXISTS "role" (
	IsDeleted bool  NOT NULL,
	RoleName varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	IsActive bool ,
	IsPaid bool ,
	RoleId int  NOT NULL,
	mail varchar(130)  NOT NULL,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);



