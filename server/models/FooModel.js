const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Foo = sequelize.define('Foo', {name: {type: DataTypes.STRING}}, {freezeTableName: true,});
    const Bar = sequelize.define('Bar', {name: {type: DataTypes.STRING}}, {freezeTableName: true,});
    const Baz = sequelize.define('Baz', {name: {type: DataTypes.STRING}}, {freezeTableName: true,});
    const Bat = sequelize.define('Bat', {name: {type: DataTypes.STRING}}, {freezeTableName: true,});

    // Associations
        // Bar ---> Foo
        // Foo has one Bar from a list of Bars
        Bar.hasMany(Foo);
        Foo.belongsTo(Bar);
    
        // Baz ---> Foo
        // Foo has many Baz from a list of Baz
        Baz.belongsToMany(Foo, {through: 'foo_baz'});
    
        // Bat ---> Baz
        // Baz has one Bat from a list of Bats
        Bat.hasOne(Baz);
        Baz.belongsTo(Bat);
};

