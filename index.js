/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/

const express = require("express");

const projects = require('./data/helpers/projectModel.js');

const server = express();

server.use(express.json());

server.get('/',(req,res)=>{
    res.send("Hello from Express");

});

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
 



server.listen(4000,()=>{
    console.log('Server is listening on http://localhost:4000');
});
