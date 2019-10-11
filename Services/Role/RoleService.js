'use-strict';

const RoleRepository = require('../../Repositories/Role/RoleRepository');

class RoleService {
	#repository = null;
	constructor() {
		this.#repository = RoleRepository;
	}

	/**
	 * Get All Roles
	 */
	async getAllRoles() {
		const roles = await this.#repository.getAllRoles();
		return roles;
	}
}

module.exports = (() => {
	let roleService;

	if (roleService === undefined) {
		roleService = new RoleService();
	}

	return roleService;
})();
