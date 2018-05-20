

const hurdatRoutes = require('./hurdatRoutes');
module.exports = function(app, db) {
  hurdatRoutes(app, db);
  // Other route groups could go here, in the future
};