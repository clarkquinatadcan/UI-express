const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
	const pageconfig = {
		title: 'NepaBlast',
		pageClass: 'homepage',
		menu_home: 'active',
		script: 'home'
	}
	res.render('../views/index', pageconfig)
})

module.exports = router
