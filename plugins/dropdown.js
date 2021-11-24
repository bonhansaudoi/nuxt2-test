
/* dropdown */
export function dropdown() {
	// for active
	var dropdownBtn = document.getElementsByClassName("dropdown-btn");
	var dropdownContent = document.getElementsByClassName("dropdown-content"); 
	var i;

	function hideDropdown() {
		for (i = 0; i < dropdownContent.length; i++) {
			dropdownContent[i].classList.add("hidden");
		}

		for (i = 0; i < dropdownBtn.length; i++) {
			dropdownBtn[i].classList.remove("active");
		}
	} 
	// this.classList.remove("active");
	// this.classList.add("active");
	for (i = 0; i < dropdownBtn.length; i++) {
		dropdownBtn[i].addEventListener("click", function () {
			if (!this.nextElementSibling.classList.contains("hidden")) {
				this.nextElementSibling.classList.add("hidden");
			} 
			else {
				hideDropdown();
				this.nextElementSibling.classList.toggle("hidden");
			}
		})
	} 

	window.onclick = function(event) {
		if (!event.target.matches('.dropdown-btn')) {
			var dropdownContent = document.getElementsByClassName("dropdown-content");
			var i;

			for (i = 0; i < dropdownContent.length; i++) {
				var closeDropdown = dropdownContent[i];
				if (!closeDropdown.classList.contains('hidden')) {
					closeDropdown.classList.add('hidden');
				}
			}
		}
	}
}

// export { dropdown };

 