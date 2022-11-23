const { DataTypes, Model } = require("sequelize");
const db = require('../database/db')
class Wallpaper extends Model{} 


Wallpaper.init({
  name: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  src: {
    type: DataTypes.STRING,
    // allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER
  }
}, {
      sequelize: db,
      modelName: 'Wallpaper'
})

module.exports = Wallpaper