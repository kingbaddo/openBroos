var user = require('../model/user');


exports.module.getProfile = username =>
new Promise((resolve,reject) => {

		user.find({ username: username }, { username: 1, name: 1, email: 1, created_at: 1, _id: 0 })

		.then(users => resolve(users[0]))

		.catch(err => reject({ status: 500, message: 'Internal Server Error !' }))

	});