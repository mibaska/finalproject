module.exports = function(sequelize, DataTypes) {
  var Villager = sequelize.define("Villagers", {
    villager_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_birthday: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_style_aleph: {
      type: DataTypes.STRING,
      allowNull: false
    },
    villager_style_beth: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Villager;
};