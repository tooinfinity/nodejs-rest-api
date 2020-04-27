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