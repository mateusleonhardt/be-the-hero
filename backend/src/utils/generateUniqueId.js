const crypto = require('crypto'); // Generate random characters

module.exports = function generateUniqueId() {
   return crypto.randomBytes(4).toString('HEX');
}