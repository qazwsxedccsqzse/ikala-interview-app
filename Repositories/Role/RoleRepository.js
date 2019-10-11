'use-strict';

const { roles } = require('../../models');

class RoleRepository {
	// private variable
	#model = null;
	constructor() {
		this.#model = roles;
	}

	async getAllRoles() {
		const roles =  await this.#model.findAll();
		return roles;
	}
}

module.exports = (() => {
	let roleRepository;

	if (roleRepository === undefined) {
		roleRepository = new RoleRepository();
	}

	return roleRepository;
})();
