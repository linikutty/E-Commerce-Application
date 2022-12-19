const Items=require ("./models/models.js");

 const shopItem=((req,res)=>{
    res.send("shop item");

    const ShoppingItem=[
        {
            productId:1,
            ProductName:"Steel Bottle",
           cost:250,
           desc:"It contain 600ml of water,heat obsorb 6 hours"
        },
        {
            productId:2,
            ProductName:"Plastic Bottle 600ml",
            cost:150,
            desc:"It contain 600ml of water,heat obsorb does not obsorb"
         },
         {
            productId:3,
            ProductName:"Plastic Bottle 250ml",
            cost:50,
            desc:"It contain 600ml of water,heat obsorb does not obsorb"
         },
         {
            productId:4,
            ProductName:"Steel Bottle",
           cost:100,
           desc:"It contain 250ml of water,heat obsorb 6 hours"
        },
    ];
    Items.bulkCreate(ShoppingItem).then(()=>{
        console.log("user data have been saved")
    });
})
module.exports=shopItem
