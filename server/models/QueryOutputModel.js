const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    
    const Output = sequelize.define('output_table', 
    {
        manufacturer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        manufacturer_id: {
            type: DataTypes.INTEGER,
            },
        hot_sauce_name: {
            type: DataTypes.STRING,
            primaryKey: true,
            },
        hot_sauce_id: {
            type: DataTypes.INTEGER,
            },
        avg_overall: {
            type: DataTypes.INTEGER,
            },
        avg_spiciness: {
            type: DataTypes.INTEGER,
            },
        avg_presentation: {
            type: DataTypes.INTEGER,
            },
        number_tastings: {
            type: DataTypes.INTEGER,
        },
        first_tasting: {
            type: DataTypes.DATE
        },
        recent_tasting: {
            type: DataTypes.DATE,
        }  
    },
    {
    freezeTableName: true, 
    timestamps: false
    });

    // Associations
        // Location ---> Manufacturers
        // Manufacturer has one location from a list of Locations
        // Located.hasMany(Manufacturers);
        // Manufacturers.belongsTo(Located);

    return Output;
};