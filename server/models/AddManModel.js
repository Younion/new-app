const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const HotSauces = sequelize.define('hot_sauces', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const Located = sequelize.define('located', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const Manufacturers = sequelize.define('manufacturers',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                },
            locatedId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {freezeTableName: true,});

    // Associations

        // Location ---> Manufacturers
        // Manufacturer has one location from a list of Locations
        Located.hasMany(Manufacturers);
        Manufacturers.belongsTo(Located);

        // Manufacturers ---> Hot Sauces
        // Hot sauces has one manufacturer from a list of manufacturers, and
        // Hot sauces has many heat sources from a list a of heat sources.
        Manufacturers.hasMany(HotSauces);
        HotSauces.belongsTo(Manufacturers);

    return Manufacturers;
};