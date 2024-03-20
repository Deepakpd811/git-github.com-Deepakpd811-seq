var { Sequelize, DataTypes } = require("sequelize");

//////////////////////// ur  database, localhost, password
var seq_obj = new Sequelize("mydbseq", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

try {
  seq_obj.authenticate().then(() => {
    console.log("connection successfull");
  });

  const categorySchema = seq_obj.define("category", {
    catname: DataTypes.STRING,
  });

  const itemSchema = seq_obj.define("item", {
    iname: DataTypes.STRING,
    price: DataTypes.INTEGER,
    dom: DataTypes.DATEONLY,
    doe: DataTypes.DATEONLY,
  });

  seq_obj.sync();

//   item.belongsTo(category);
//   category.hasMany(item);

  //   category.create({
  //     catname:'electronics'
  //   }).then((result)=>{
  //     console.log(result);
  //   })
  //   category.create({
  //     catname:'electricals'
  //   }).then((result)=>{
  //     console.log(result);
  //   })

//   itemSchema.create({
//     iname: "54 inch tv",
//     price: 100000,
//     dom: Date("2020-6-31"),

//     categoryId: 1,
//   });
  itemSchema.create({
    iname: "light wt press",
    price: 800,
    dom: Date("2022-6-31"),
    categoryId:2,
  });
//   itemSchema.create({
//     iname: "water",
//     price: 5000,
//     dom: Date("2021-3-23"),
//     categoryId: 2,
//   });



} catch (err) {
  console.log(err);
}
