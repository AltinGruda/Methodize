const AdminJS = require('adminjs')
const AdminJSSequelize = require('@adminjs/sequelize')

AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database,
})

const db = require('./db/models')

const options = {
    databases: [db],
};

module.exports = options;