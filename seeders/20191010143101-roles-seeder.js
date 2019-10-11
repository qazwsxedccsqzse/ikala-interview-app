'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('roles', [{
        name: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Moderator',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Viewer',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
