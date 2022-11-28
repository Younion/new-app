const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Manufacturers = sequelize.define('manufacturers', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const HotSauces = sequelize.define('hot_sauces', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const Output = sequelize.define('output_table', 
    {
        manufacturer_name: {
            type: DataTypes.STRING,
        },
        manufacturer_location: {
            type: DataTypes.STRING,
        },
        manufacturer_tastings: {
            type: DataTypes.INTEGER
        },
        manufacturer_presentation: {
            type: DataTypes.DECIMAL,
        },
        manufacturer_overall: {
            type: DataTypes.DECIMAL
        },
        hot_sauce_name: {
            type: DataTypes.STRING,
        },
        hot_sauce_tastings: {
            type: DataTypes.INTEGER,
        },
        hot_sauce_presentation: {
            type: DataTypes.DECIMAL,
        },
        hot_sauce_spiciness: {
            type: DataTypes.DECIMAL,
        },
        hot_sauce_overall: {
            type: DataTypes.DECIMAL,
        },
    },
    {
    freezeTableName: true, 
    });

    // Associations
        // Location ---> Manufacturers
        // Manufacturer has one location from a list of Locations
        // Located.hasMany(Manufacturers);
        // Manufacturers.belongsTo(Located);

        // Bat ---> Baz
        // Baz has one Bat from a list of Bats
        HotSauces.hasOne(Output);
        Output.belongsTo(HotSauces);

        Manufacturers.hasOne(Output);
        Output.belongsTo(Manufacturers);

    return Output;
};