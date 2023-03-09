'use strict';

/**
 * r2 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::r2.r2');
