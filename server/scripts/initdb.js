require('babel-register')({
    presets: [ 'env' ]
})

var sequelize = require('../config/sequelize').default;

sequelize.sync({force: true});
