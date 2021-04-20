const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/studentsApi", { 
useNewUrlParser: true, 
useUnifiedTopology: true, 
useCreateIndex: true,
useFindAndModify: false})
.then( () => console.log("success") )
.catch((err)=>console.log(err));
