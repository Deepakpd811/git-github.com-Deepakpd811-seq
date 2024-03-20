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

  const user = seq_obj.define("user", {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    dob: DataTypes.DATE,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
  });

  seq_obj.sync();

//   user
//     .create({
//       name: "ritick",
//       city: "banur",
//       dob: Date("2003-3-5"),
//       address: "punjab",
//       phone: 75893500,
//     })
//     .then((result) => {
//       console.log("record insert" + " " + result.id);
//     });

    // user.findAll({city:"banur"}).then((result)=>{
    //     console.log(result)
    // })


    // user.destroy({where:{id:2}}).then((result)=>{
    //   console.log(result);
    // })

    user.findAll().then((result)=>{
      console.log(result);
    });

    


} catch (err) {
  console.log(err);
}
