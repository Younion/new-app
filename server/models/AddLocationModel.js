const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Manufacturers = sequelize.define('manufacturers', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const Located = sequelize.define('located',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                },
        },
        {freezeTableName: true,});

    // Associations
        // Location ---> Manufacturers
        // Manufacturer has one location from a list of Locations
        Located.hasMany(Manufacturers);
        Manufacturers.belongsTo(Located);

    return Located;
};