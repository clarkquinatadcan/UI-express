function openNav() {
	console.log("open side Navigation")
	document.getElementById("sidenav").style.width="100%";
}

closeNav = () => {
	document.getElementById("sidenav").style.width = "0";
}