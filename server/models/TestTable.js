const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    const TestTable = sequelize.define('test_table', {
        test_name: {
            type: DataTypes.STRING,
        },
        test_sauce: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true, 
    });
    
return TestTable;

// TestTable.sync({ alter: true })
//     .then(() => {
//         return TestTable.create({
//             test_name: "testsauce2",
//             test_sauce: "testsauce2"
//         });
//     }).then((data) => {
//         console.log("Data added to database!");
//         console.log(data.toJSON())
//     }).catch((err) => {
//         console.log(err);
//     });
};

    // Associations
