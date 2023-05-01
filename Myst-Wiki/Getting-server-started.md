## Set up Docker and Express to test Routes

Double check and make sure docker is open and running.

If you already have containers up and running nuke them. Delete the container, images and volumes.
Having previous stuff up, may cause issues with ports, duplicate volumes, etc.

Once that is done, ensure you have the latest commit pulled, and good to go. 

CD into the server directory in your terminal.

type:
docker compose up --build

press enter.

This will build the containers for pgadmin, postgres, and the express server.
The schema.sql, and seeds.sql files will be automatically ran, seeding the postgres db.

now, using 
"http://localhost:3000"(/route)
should work.

