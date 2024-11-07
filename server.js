const express=require("express")
const app=express()
let cors=require("cors")
app.use(cors())//// acts as a middeware

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies (optional)
app.use(express.urlencoded({ extended: true }));

let reg=require("./mongodb/SignUp_History")

app.get('/',(req,res)=>{
    res.send("Hello , the messgage is comming from backend")
})

app.post('/Registrations',async(req,res)=>{
    console.log(req.body);
    let{name,branch,regNum,password}=req.body  // destructring the object
    await reg.insertMany([{
        name,branch,regNum,password  // inserting the user entered data into the Database
    }])
    res.redirect("/")  // redirect to the /chats rout
})

app.listen(3030,()=>{
    console.log("server hass been created");
    
})