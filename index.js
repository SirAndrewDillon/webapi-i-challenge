// implement your API here

const express = require('express');

const Users = require('./data/db.js');

const server = express();

server.use(express.json());
