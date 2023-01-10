const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const HotSauces = sequelize.define('hot_sauces', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const HeatSources = sequelize.define('heat_sources',
        {
            name: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: false}
            }, 
            {freezeTableName: true,});

    // Associations
        // Hot sauces ---> Heat Sources
        // Hot sauces has many heat sources from a list of heat sources.
        HeatSources.belongsToMany(HotSauces, {through: 'hot_sauces_heat_sources'});

    return HeatSources;
};