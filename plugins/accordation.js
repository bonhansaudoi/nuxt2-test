/* accordation */
function accordation() { 
	var accBtn = document.getElementsByClassName("accordation-btn");
	var accContent = document.getElementsByClassName("accordation-content"); 
	var i;

	function hideAccordation() {
		for (i = 0; i < accContent.length; i++) {
			accContent[i].classList.add("hidden");
		} 
	} 

	for (i = 0; i < accBtn.length; i++) {
		accBtn[i].addEventListener("click", function () {
			if (!this.nextElementSibling.classList.contains("hidden")) {
				this.nextElementSibling.classList.add("hidden");
			}
			else {
				hideAccordation();
				this.nextElementSibling.classList.toggle("hidden");
			}
		})
	}
	

	window.onclick = function(event) {
		if (!event.target.matches('.accordation-btn')) {
			var c = document.getElementsByClassName("accordation-content");
			var i;
			for (i = 0; i < c.length; i++) {
				var closeContent = c[i];
				if (!closeContent.classList.contains('hidden')) {
					closeContent.classList.add('hidden');
				}
			}
		}	
	}
} 

export { accordation }; 