const express = require("express");
const admin = require("firebase-admin");
const body = require("body-parser");
const bcrypt= require("bcrypt");
const session = require("express-session");
const path=require("path");

const app=express();
const port=3000;

app.set("view engine","ejs");

app.get('/',(req,res) =>{
    res.render(log);
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});



