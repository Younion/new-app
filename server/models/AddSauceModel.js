const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const HeatSources = sequelize.define('heat_sources', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const Manufacturers = sequelize.define('manufacturers', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const HotSauces = sequelize.define('hot_sauces',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                },
        },
        {freezeTableName: true,});

    // Associations
        // Hot sauces has one manufacturer from a list of manufacturers, and
        // Hot sauces has many heat sources from a list a of heat sources.
        Manufacturers.hasMany(HotSauces);
        HotSauces.belongsTo(Manufacturers);

        // Hot sauces ---> Heat Sources
        // Hot sauces has many heat sources from a list of heat sources.
        HeatSources.belongsToMany(HotSauces, {through: 'hot_sauces_heat_sources'});

    return HotSauces;
};