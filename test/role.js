'use strict';

const localUrl = 'http://localhost:3000/api/v1/';
const superagent = require('superagent');
const should = require('should');

let server;
let app = require('../app');

describe('▓▓▓▓▓▓▓▓ Role Test ▓▓▓▓▓▓▓▓\n', () => {
	before((done) => {
		server = app.listen(3000);
		server.on("listening", function () {
			console.log("Test server started");
			done();
		});
	});

	after(function () {
		this.timeout(15000);
		console.log("Test server ended");
		server.close();
	});

	it('Get role list', function (done) {
		superagent
			.get(localUrl + 'role')
			.end((err, res) => {
				const body = JSON.parse(res.text);
				should(body.length).be.exactly(3);
				done();
			});
	});
});