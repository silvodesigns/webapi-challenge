const express = require("express");
const projectsRouter = require('./projects-router.js');
const server = express();
server.use(express.json());
server.use('/projects',projectsRouter);

server.get('/',(req,res)=>{
    res.send("Hello from Express");

});

 

  module.exports = server;