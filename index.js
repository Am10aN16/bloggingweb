const express = require("express");
const dotenv = require("dotenv")
const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
dotenv.config({ path: './.env' });
const dbconnection = require("./db/conn");
const path = require("path");

app.use(cors());
app.use(cookieParser());


app.use(express.json());
app.use("/api" , require('./routes/auth'));

// app.get("/" , (req, res)=>{
//     res.send("welcome to the server side");
// })

// app.get("/signin", (req, res) => {
//     res.send(`Hello world from  the signin server`);
//   });
//   app.get("/signup", (req, res) => {
//     res.send(`Hello world from  the signup server`);
//   });

if (process.env.NODE_ENV=== 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname , 'client' , 'build' , 'index.html'))
    })
}

dbconnection().then(()=>{
    app.listen(PORT , ()=>{
        console.log('Server is listening to port' ,PORT);
    });
})

