// const express = require('express')
// const router = express.Router()

function openNav() {
	console.log("open side Navigation")
	document.getElementById("sidenav").style.width="100%";
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
}


window.onscroll = function() {scrollFunction()};

$(document).ready(function() {
	$(".sidenav__menu li")
		.filter( ":odd")
			.hide()
		.end()
		.filter( ":even")
			.hover(function() {
				$(this)
					.next()
						.stop( true, true)
						.fadeToggle("slow")
			});
	
	// $("#aboutUs").click(function(event) {
	// 	console.log("About Us")
	// 	event.preventDefault();
	// 	$("#nav-header").css({"background": "rgb(31, 37, 43)"});
	// 	$("#nav-header ul li a").css({"color": "#fff"})
	// })
	// $("#nav-header").live('click', function() {
	// 	if($(this).attr("id") === "nav-header") {
	// 		this.id = this.id.replace("")
	// 	}
	// })
	// $("#aboutpage").click(function() {
	// 	console.log("About Us")
	$("#aboutpage #nav-header").css({"background": "#1f252b"})
	$("#aboutpage .nav-header ul li a").css({"color": "#fff"})
	// $("aboutpage .nav-header .nav-header__logo img").attr("src", "../images/logo-white.png")
	$("aboutpage .nav-header .nav-header__logo img").css({"height": "100px"})
	// })
	
			
	
	scrollFunction = () => {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { 
			$("#nav-header").css({"padding": "0px 15px", "box-shadow": "0 2px 5px rgba(0, 0, 0, 0.80) "});
		} else {
			$("#nav-header").css({"padding": "10px 15px", "box-shadow": "none"})
		}
	}


	// initialize paroller.js
	$("[data-paroller-factor]").paroller();

});


AOS.init({
	once: true
});

