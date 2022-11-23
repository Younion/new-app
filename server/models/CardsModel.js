const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Cards = sequelize.define('hot_sauces', {
        manufacturers_id: {
            type: DataTypes.INTEGER
        },
        hot_sauces_name: {
            type: DataTypes.STRING
        },
        avg_overall: {
            type: DataTypes.INTEGER
        },
        avg_spiciness: {
            type: DataTypes.INTEGER
        },
        tasting_count: {
            type: DataTypes.INTEGER
        },
        love_count: {
            type: DataTypes.INTEGER
        },
        love_pct: {
            type: DataTypes.INTEGER
        },
        hot_sauces_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    }, {
        treatAsView: true,
        timestamps: false 
    })
    return Cards;
};