const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Manufacturer = sequelize.define('manufacturers',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                },
        },
        {freezeTableName: true,});

    // Associations

    return Manufacturer;
};