export function hamberger() {
	var hamberger = document.querySelector(".hamberger");
	var navbarMenu = document.querySelector(".navbar-menu");
	var a = document.querySelectorAll("a");
	var i;

	hamberger.onclick = function () {
		navbarMenu.classList.toggle("hidden");
	}
	for (i = 0; i < a.length; i++) {   
		a[i].addEventListener("click", function () {
			navbarMenu.classList.add("hidden");
		});
	}
}

// export { hamberger }; 