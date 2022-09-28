const AdminJS = require('adminjs')
const { buildRouter } = require('@adminjs/express')
const express = require("express");
const router = express.Router();

const buildAdminRouter = (admin) => {
    const router = buildRouter(admin);
    return router;
};

module.exports = buildAdminRouter;