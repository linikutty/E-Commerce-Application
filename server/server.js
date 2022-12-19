const express=require("express");

const cors=require("cors");

const models=require('./models/models.js');
const Items =require('./models/productModels.js')
const Register=require('./data.js');
const Login=require('./loginData.js');

const List=require("./list.js");
const shopItem = require("./ItemTable.js");
const  Cart=require("./cart.js")

const app=express();

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("API is running");
});


app.use("/api/register",Register);
app.use("/api/login",Login);
// app.use("/api/products",Products);
app.use("/api/list",List)
// app.use('/shopItem',shopItem)
app.use("/cart",Cart)


app.listen(7070,()=>{
    console.log("server is running in port 7000")
})