const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
	const pageconfig = {
		title: 'The Wildlife Project',
		pageClass: 'homepage',
		menu_home: 'active',
		script: 'Home'
	}
	res.render('../views/index', pageconfig)
})

/* GET about page. */
router.get('/about', function (req, res) {
	const pageconfig = {
		title: 'The Wildlife Project',
		pageClass: 'aboutpage',
		menu_home: 'active',
		script: 'About Us'
	}
	res.render('../views/about', pageconfig)
})

module.exports = router
