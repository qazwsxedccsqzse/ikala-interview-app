'use-strict';

const express = require('express');
const router = express.Router();
const RoleService = require('../../Services/Role/RoleService');

router.get('/', async (req, res) => {
	// input validator here
	let roles = await RoleService.getAllRoles();

	return res.json(roles);
});

module.exports = router;
