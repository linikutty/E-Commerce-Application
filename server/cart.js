const Items=require("./models/models.js")

const Cart=((req,res)=>{

    const {productId}=req.body
    Items.findOne({ 
        where:productId
    })
    .then((cartItem)=>{
        console.log("**",cartItem);
        res.send(cartItem);
    })
    // Items.findById({ 
    //     where:productId
    // })
    // .then((cartItem)=>{
    //     console.log("**",cartItem);
    //     res.send(cartItem);
    // })
});
module.exports=Cart