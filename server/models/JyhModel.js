const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const Located = sequelize.define('located', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const Viscosity = sequelize.define('viscosity', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const HeatSources = sequelize.define('heat_sources', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const FlavorNotes = sequelize.define('flavor_notes', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,});
    const Manufacturers = sequelize.define('manufacturers', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,}); // post
    const HotSauces = sequelize.define('hot_sauces', {name: {type: DataTypes.STRING, allowNull: false}}, {freezeTableName: true,}); // post
    const TastingForm = sequelize.define('tasting_form', // post
        {
            overall_rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    max: 5,
                    min: 0
                    }
                },
            spiciness: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    max: 10,
                    min: 0
                    }
                },
            presentation: {
                type: DataTypes.INTEGER,
                validate: {
                    max: 5,
                    min: 0
                    }
                },
            lovedit: {
                type: DataTypes.BOOLEAN
                },
            taster_notes: {
                type: DataTypes.TEXT,
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

        // Hot sauces ---> Heat Sources
        // Hot sauces has many heat sources from a list of heat sources.
        HeatSources.belongsToMany(HotSauces, {through: 'hot_sauces_heat_sources'});

        // Tasting Form ---> Viscocity
        // One Tasting Form has one viscocity from a list of viscocity
        Viscosity.hasMany(TastingForm);
        TastingForm.belongsTo(Viscosity);

        // Tasting Form ---> Hot Sauces
        // One Tasting Form has one Hot Sauce from a list of Hot Sauces
        HotSauces.hasMany(TastingForm);
        TastingForm.belongsTo(HotSauces);


        // Tasting Form ---> Flavor Notes
        // Tasting Form has many flavor notes from a list of flavor notes
        FlavorNotes.belongsToMany(TastingForm, {through: 'tasting_form_flavor_notes'});

    return TastingForm;
};