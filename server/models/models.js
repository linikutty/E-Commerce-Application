const Sequelize = require("sequelize");

const dbConfig=require("../db.js");

const sequel = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  });

  const db = {};

db.Sequelize = Sequelize;
db.sequel = sequel;

const Signup=sequel.define("userTable",{
    FirstName:{
        type: Sequelize.STRING,
        require:true
    },
    LastName:{
        type: Sequelize.STRING,
        require:true
    },
    Mail:{
        type: Sequelize.STRING,
        require:true,
        unique:true
    },
    Password:{
        type: Sequelize.STRING,
        require:true
    }
});
db.sequel.sync().then(function () {
    console.log("sync...");
  });

module.exports=Signup


const Items=sequel.define("productTable",{
    productId:{
        type: Sequelize.INTEGER,
    },
    ProductName:{
        type: Sequelize.STRING,
    },
    cost:{
        type: Sequelize.INTEGER,
    },
    desc:{
        type: Sequelize.STRING,
        require:true
    }
    
});
db.sequel.sync().then(function () {
    console.log("sync...");
  });

module.exports=Items


