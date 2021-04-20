const express = require("express");
var cors = require('cors');
require("./db/conn");
const Student = require("./models/students");

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.post("/students",(req,res,next)=>{

   console.log(req.body);
   const user = new Student(req.body);
   user.save().then(()=>{
       res.status(201).send(user);
   }).catch((e)=>{
       console.log(e);
       res.status(400).send(e);
  
   })

});

app.get("/students", async (req, res,next)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }
    catch(e){
        res.send(e);
    }
})

app.patch("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(400).send(e);
    }
})

app.delete("/students/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const deleteStudents = await Student.findByIdAndDelete(_id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteStudents);
    }catch(e){
        res.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log(`connection set up at ${port}`);
})
