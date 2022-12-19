const Signup=require("./models/models.js");

const Register=(req,res)=>{
    res.send("username");
    console.log("****")

    const {FirstName}=req.body;
    const {LastName}=req.body;
    const {Mail}=req.body;
    const {Password}=req.body;
    // res.send(username)

    const datas=[
        {
            FirstName:FirstName,
            LastName:LastName,
            Mail:Mail,
            Password:Password
        }

    ];

    Signup.bulkCreate(datas).then(()=>{
        console.log("user data have been saved")
    });
}

module.exports=Register


