
const _ = require('lodash')
const devEnv = require('./environments/dev.json')
const productionEnv = require('./environments/production.json')

const env = process.env.NODE_ENV || 'dev';
// console.log(env);

switch (env) {
    case 'dev':
        module.exports = _.extend( devEnv || {} );
        break;

    default:
        module.exports = _.extend( productionEnv || {} );
        break;
}
