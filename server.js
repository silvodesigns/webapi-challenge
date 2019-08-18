const express = require("express");

const projects = require('./data/helpers/projectModel.js');

const server = express();

server.use(express.json());


server.get('/projects',(req,res)=>{
    projects.get()
    .then(response => {
     res.status(200).json(response);
    })
    .catch(err=>{
        res.status(400).json({message: err})
    })
 
 });
 
 server.get('/projects/:id',(req,res)=>{
     const { id } = req.params;
     projects.get(id)
     .then(response => {
         if(response){
             res.status(200).json(response);
          } else {b
              res.status(404).json({
                  message: "The project with the specified ID does not exist"
              })
          }
     })
     .catch(err=>{
         res.status(400).json({message: err})
     })
  
  });
 
 
  server.post('/projects',(req,res)=>{
    
     projects.insert(req.body)
     .then(response => {
      res.status(201).json(response);
     })
     .catch(err=>{
      res.status(500).json({message: err})
     })
  
  });
 
  server.put('/projects/:id',(req,res)=>{
     const { id } = req.params;
     const changes = req.body;
 
     projects.update(id,changes)
     .then(update => {
         if(update){
             res.status(200).json(update);
          } else {
              res.status(404).json({
                  message: "The project with the specified ID does not exist"
              })
          }
     })
     .catch(err=>{
         res.status(400).json({message: err})
     })
  
  });
 
 
  server.delete('/projects/:id',(req,res)=>{
 
     const { id } = req.params;
    
     projects.remove(id)
     .then(deleted => {
         if(deleted){
             res.status(200).json(deleted);
          } else {
              res.status(404).json({
                  message: "The project with the specified ID does not exist to delete"
              })
          }
     
     })
     .catch(err=>{
      res.status(500).json({message: err})
     })
  
  });
 
  server.get('/projects/:id',(req,res)=>{
     const { id } = req.params;
     projects.get(id)
     .then(response => {
         if(response){
             res.status(200).json(response);
          } else {b
              res.status(404).json({
                  message: "The project with the specified ID does not exist"
              })
          }
     })
     .catch(err=>{
         res.status(400).json({message: err})
     })
  
  });
  
 
  
 
 