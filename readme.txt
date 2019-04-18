# MEAN Stack application for Book Search
*M - Mongo DB
*E - Express js
*A - Angular js
*N - Node js

## Prerequisites
Please install below prerequisites on your development machine:
* Node.js - [Download & Install Node.js] (https://nodejs.org/en/download/) and the npm package manager. 
* MongoDB - [Download & Install MongoDB] (http://www.mongodb.org/downloads)


  Mongo Database SetUp
==========================

1) Install MongoDB
2) Run mongodb server:

	>> cd C:\Program Files\MongoDB\Server\3.0\bin
	>> md C:\data\db
3) Mongo Connection:

	>> cd C:\Program Files\MongoDB\Server\3.0\bin
	>> mongod

(Incase fo error with storage engine >> mongod.exe --storageEngine=mmapv1 )
	
4)Open new window (cmd)

	>> cd C:\Program Files\MongoDB\Server\3.0\bin
	>> mongo
	>> use catalog
	>> runs the code from "insert_data_mongo" 
	
  backend - Node.js Install
 =========================
	>> C:\MyApp\back
	>> npm install
	>> node server.js
	
Outcome:
	MongoDB database connection established successfully!
	
  frontend - AngularInstall
 ========================
	>> C:\MyApp\front\front
	>> npm install -g @angular/cli
	>> npm install
	>> npm start
	
Outcome:
	Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
	
	
Accesing the Application
================================
#Open Browser and navigate to  http://localhost:4200/list-books


Accesing the backend API
===============================
# Open Browser and navigate to  http://localhost:3000/getAllBooks


 Terminate Port Usage(Incase of any port issue)
=====================
netstat -ano | findstr :4200
taskkill/pid 4828 /F
