'use strict';

/**
 * r1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::r1.r1');
