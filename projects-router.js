const express = require("express");

const router = express.Router();

const projects = require('./data/helpers/projectModel.js');





router.get('/',(req,res)=>{
    projects.get()
    .then(response => {
     res.status(200).json(response);
    })
    .catch(err=>{
        res.status(400).json({message: err})
    })
 
 });
 
 router.get('/:id',(req,res)=>{
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
 
 
  router.post('/',(req,res)=>{
    
     projects.insert(req.body)
     .then(response => {
      res.status(201).json(response);
     })
     .catch(err=>{
      res.status(500).json({message: err})
     })
  
  });
 
  router.put('/:id',(req,res)=>{
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
 
 
  router.delete('/:id',(req,res)=>{
 
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
 
  router.get('/:id',(req,res)=>{
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

  module.exports = router;
  
 
  
 