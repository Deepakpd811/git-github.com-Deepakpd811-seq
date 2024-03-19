var { Sequelize, DataTypes } = require("sequelize");

var seq_obj = new Sequelize("mydbseq", "root", "admin", {
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
} catch (err) {
  console.log(err);
}
