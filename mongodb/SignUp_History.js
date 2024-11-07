const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() { // basic code
    await mongoose.connect('mongodb://127.0.0.1:27017/ChatBot').then(()=>{ // mongoose.connect is an asynchronously function to make it work we are using await and async
      console.log("dtabese connection succeesful");
      
    }).catch(()=>{
      console.log("error in database");
    })
}

const regSchema=mongoose.Schema({ // declaring the schema of the table
  name:String,
  branch:String,
  regNum:String,
  password:String
})

const reg=mongoose.model("Registration",regSchema)

module.exports=reg

