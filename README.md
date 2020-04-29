# REST API with Node JS

## 1 - Introduction

## What you should know

  - Basic knowledge of Javascript
  - Basic knowledge of Node.js
  - Basic knowledge of Express (framework of Node.js)

## What you will Learn

  - Installing Node.js and Express
  - Setup Express Server
  - Create an array of objects
  - Create CRUD Request handlers
  - Validate data using JOI and a function
  - Performing CRUD Operations on API using 

## What is an API

 An API stands for **A**pplication **P**rogramming **I**nterface is basically a set of rules or computer code and specifications that allows software programs to communicate with each other.

 API is kind of like a bridge between two software systems that allows them to communicate.

 Example : if you need to purchase an item from amazon website with your credit card (master card) you need API to communicate between them.

## What is Node.js

  Node.js is an open source server environment.
  It's free and multi platforms, and uses Javascript on the server.

###  What can Node.js Do?

  - node.js can generate dynamic page content.
  - node.js can create, open, read, write, delete, and close files on server.
  - node.js can collect from data.
  - node.js can add, delete, modify data in your database.

### What is a Node.js File?

  - Node.js files contain tasks that will be executed on certain events.
  - A typical event is someone trying to access a port on the server.
  - Node.js files must be initiated on the server before having any effect.
  - Node.js files have extension __".js"__.

### Install Node.js

 go to this  https://nodejs.org/en/ and download it, after that run the setup install it.
 for checking if node installed in command prompt type: node -v andd npm -v the output of this is version of node and npm in your system.

### What is NPM

  - **N**odes **P**ackage **M**anager
  - Online repository for publishing open source node js projects
  - installed automatically with __node.js__
  - Used to manage packages(share, update, reuse code)
  - a __package__ in Node.js contains all the files you need for a module
  - __Modules__ are JavaScript libraries you can include in your project.

to update npm in command prompt run this 

    npm instal -g nmp@latest

to check npm run __npm -v__

### What is package.jon file?

 - __Package.js__ file holds various metadata relevant to the project. It is use to give information to npm allows it to identify the project as well as handle the project's dependencies.
 - __package.json__ file can created manually or by using __npm init -y__ command.
 - A __package__ is a directory with one or more __modules__ inside of it and a __package.json__ file which has metadata about the package.
 - A __module__ is a single JavaScript file that has some reasonable functionality.
 - Every Node.js application is a __package__ and should have a __package.json__ file.
 - __JSON__ stands for (Java Script Object Notation) text file format where with __key__ and __value__ Example name of package is the __key__ and the __value__ is the verion of the package tobe used.


## 2 - Building the API Server

Navigate to your project folder and run __npm init -y__ to initialise you project with __package.json__ file.

### Install Express 

  - __Express__ is a web framework Built with node.js.
  - __Express__ is flexible and provides robust features for web and mobile applications development.

to install express navigate to your project folder and run __npm install express --save__

### Install JOI

  - __joi__ is schema description language and data validator for javscript.
  - Can be used to validate response from a backend endpoint or maybe verifying what goes into our REST APT.

to install express navigate to your project folder and run __npm install @hapi/joi__

### Creating application file
  create index.js in the root of your project directory

    // const declaration creates a read-only refrence to value. 
    // require function is the easiest way to include modules in your project.
    const express = require('express');
    // express() function creates an instance express application object with 
    // methods of routing http request. it called app by tradition.
    const app = express();
    // Joi is used for validation.
    const joi =require('joi');

    // use() is method to configure the middleware used by 
    // the routes of the Express HTTP server object

    // app.use() acts as a middleware in express apps

    // middleware is basically a function that will the receive the Request
    // and Response object, just like your route Handlers do.

    // express.json() is method inbuilt in express to recognize the incomming 
    // Request object as a JSON Object
    // This method is called as a middleware
    app.use(express.json());
  
### Creating an array of objects

JavaScript arrays are used to store multiple values in single variable.
JavaScript objects are containers for name and value pairs separated by a colon.

### Creating READ Request Handlers

__Request handlers__ are the functions that handle the client __request__ and construct a response.
__GET__ method is used to request data from specified resource.
__GET__ is one of the most common __HTTP__ methods.
__req__ is an object containing information about the __HTTP__ request that raised the event.
__res__ object represents the __HTTP__ response that an Express app sends when it gets an __HTTP__ request.
An __arrow function__ expression is a compact alternative to regular function expression.
__res.send()__ sends back a response enclosed inside the parentehesis.
The __find()__ method returns the value of the first element in an array that pass a test (provided as a function).

### Install nodemon

Nodemon is a utility that monitors for any changes in your application source code and automatically restarts your server.

__Features :__ 

  - Automatic restarting of application.
  - Detects default file exention to monitor.
  - Default support for Node and CoffeeScript.
  - Can run executable like Python etc.
  - Whatch specific directories

for installing run this command __npm install -g nodemon__

### What is __HTTP__

  - **H**yper**T**ext **T**ransfer **P**rotocol
  - Web pages are made of HTML documents
  - Protocol refers to a specific set of communication rules.(TCP/IP, HTTP, FTP)
  - HTTP allows the fetching of resources such over the internet and web.
  - HTTP is the foundation of any data exchange on the web.
  - HTTP is a request-response client-server protocol.
  - HTTP is stateless protocol

### HTTP Request Methods

HTTP methods are __verbs__ as they indicate the desired action to be performed on identified resource.

 - GET used to request data from a specified resource.
 - POST used to send data to a server.
 - PUT used to update existing data in server.
 - HEAD like get but without the response body.
 - DELETE deletes a specified resourse from the server.
 - PATCH applies partial modifications to a resource.
 - TRACE echoes the received request.

deffrence between GET and POST methods

GET 

harmless
can be booked marked
can be cached
Request remain in browser history
Request have restrictions on data length
Less secured
Data is visible to all from URL

POST

Introduces new data
Cannot be booked marked
Can not be cached
Request does not remain in browser history
Request have no restrictions on data length
More secured
Data is not visible in URL

HTTP Safe Methods

 - They only retrieve information and do not change the state of the server.
 - __HEAD__ ; __GET__ ; __TRACE__

### HTTP Response Status Codes

 - These are messages that get returned following request to the server.

this is a list for the most commun and used.

  - 200 ok standard message for a successful HTTP request.
  - 201 created Request fulfilled and new resource created.
  - 400 bad request | 404 invalid syntax | request cannot be fulfilled.
  - 403 forbidden server refusing to respond to request.
  - 405 method not allowed request method not supported.
  - 500 internal server error server unable to fulfil due to issues.
  - 503 service unavailable the server is not ready to handle the request.


The __process.env__ global variable is injected by the Node at runtime for your application to use and it represents the state of the system environment your application is in when it starts.