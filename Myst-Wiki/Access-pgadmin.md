Ensure all the containers are up and running inside docker.

click the port for pgadmin-1 container

or

go here: http://localhost:8080/login?next=%2F


login:
user@domain.com
password

on top left, right click on server, and register, then server..

in general for name, type anything you want. 

in connection tab

hostname: db
port: 5432
maintenance database: postgres
username: postgres
password: password

click save.

This will import the database under servers with the name that you gave it.

top left drop down the db, then databases, then mydb, then schemas, then tables.

this will show you all the tables. 

right click on a table, hover view/edit data, then click all rows.

This will show you all data in the table.
