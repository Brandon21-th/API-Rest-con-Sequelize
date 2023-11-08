const {Sequelize, DataTypes, Model} = require("sequelize")


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('product_test', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    port: '3306' 
  });

class Product extends Model {}

Product.init({
  product_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price:{
    type: DataTypes.FLOAT(10,2),
    allowNull: false,
  },
  is_stock: {
    type: DataTypes.BOOLEAN,
  }
}, {
  sequelize,
  modelName: "Product",
}
);

module.exports = Product;
//   async function testconnection(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       } 
//   }
 
// testconnection();