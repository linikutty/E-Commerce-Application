const Signup = require("./models/models.js");
 

const LoginData = (req, res) => {
  console.log("*******");
  
//    res.send("login page");

  const {Mail}=req.body;
  const {Password}=req.body;
  console.log(Mail,Password);

  // const { userMail, userPassword } = req.body;
 

  Signup.findOne({ where: { Mail:Mail, Password :Password} })
    .then((user) => {
      // console.log(user);
      console.log("===", user.dataValues);
      if (user.dataValues) {
        
        return res.status(201).send({ message: "login success" });
        
      
      } else {
      
        return res.status(200).send({ message: "User Not found." });
      }
    })
    .catch((error) => {
      console.log("error");
      res.send({message:"User Not found"});
    });
};

module.exports = LoginData;