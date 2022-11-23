const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Cards = sequelize.define('hot_sauces_output', {
        manufacturers_name: {
            type: DataTypes.STRING
        },
        manufacturers_id: {
            type: DataTypes.INTEGER
        },
        hot_sauces_name: {
            type: DataTypes.STRING
        },
        hot_sauces_id: {
            type: DataTypes.INTEGER
        },
        avg_overall: {
            type: DataTypes.INTEGER
        },
        avg_spiciness: {
            type: DataTypes.INTEGER
        },
        avg_presentation: {
            type: DataTypes.INTEGER
        },
        number_tastings: {
            type: DataTypes.INTEGER
        },
    }, {
        treatAsView: true,
        timestamps: false 
    })
    return Cards;
};