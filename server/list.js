// const axios =require ('axios');
// const dbConfig=require("./db.js");
const Items=require("./models/models.js")

const shopItem=require("./ItemTable.js");


const Item=((req,res) => {

   Items.findAll({})
   .then((ShoppingItem)=>{
    console.log(ShoppingItem);
    res.send(ShoppingItem);
   })
});

module.exports=Item
