const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const AdminRouter = require('./Routes/AdminRouters');
const path = require("path");


require('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/auth', AuthRouter);
app.use('', AdminRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})