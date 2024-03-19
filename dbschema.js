var { Sequelize, DataTypes } = require("sequelize");

//////////////////////// ur  database, localhost, password  
var seq_obj = new Sequelize( "mydbseq", "root",   "admin" , {
  host: "localhost",
  dialect: "mysql",
});

try {
  seq_obj.authenticate().then(() => {
    console.log("connection successfull");
  });

  const user = seq_obj.define("user", {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    dob: DataTypes.DATE,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
  });

  seq_obj.sync();

  user.create({
    name:"Bully",
    city:"rajpura",
    dob:Date("2000-6-5"),
    address:"punjab",
    phone:749792450

}).then((result)=>{
    console.log("record insert"+" "+ result.id);
})


} catch (err) {
  console.log(err);
}
