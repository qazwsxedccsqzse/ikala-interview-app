'use-strict';

const express = require('express');
const router = express.Router();
// const RoleService = require('../../Services/Role/RoleService');

/**
 * @swagger
 *
 * /api/v1/role:
 *   get:
 *     tags:
 *      - "Role"
 *     description: Get Role List
 *     produces:
 *       - "application/json"
 *     responses:
 *       200:
 *         description: RoleList
 *         schema:
 *           type: "array"
 *           items:
 *             $ref: "#/definitions/Role"
 */
router.get('/', async (req, res) => {
	// input validator here

	// const roles = await RoleService.getAllRoles();
	const roles = [{
		"id": 1, "name": "Admin"
	  }, {
		"id": 2, "name": "Moderator"
	  }, {
		"id": 3, "name": "Viewer"
	  }
	];
	return res.json(roles);
});

module.exports = router;
