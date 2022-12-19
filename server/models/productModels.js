const Sequelize = require("sequelize");

const Config=require("../database.js");

const sequel = new Sequelize(Config.DB, Config.USER, Config.PASSWORD, {
    host: Config.HOST,
    dialect: Config.dialect,
    operatorsAliases: false,
  });

  const db = {};

db.Sequelize = Sequelize;
db.sequel = sequel;

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