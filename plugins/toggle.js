/* hamberger */
function hamberger() {
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

/* dropdown */
function dropdown() {
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

/* sidebar */
function sidebar() { 
	var accBtn = document.getElementsByClassName("sidebar-btn");
	var accContent = document.getElementsByClassName("sidebar-content"); 
	var i;

	function hideSidebar() {
		for (i = 0; i < accContent.length; i++) {
			accContent[i].classList.add("hidden");
		}

		// for (i = 0; i < accBtn.length; i++) {
		//     accBtn[i].classList.remove("active");
		// }
	} 

	for (i = 0; i < accBtn.length; i++) {
		accBtn[i].addEventListener("click", function () {
			if (!this.nextElementSibling.classList.contains("hidden")) {
				this.nextElementSibling.classList.add("hidden");
			}
			else {
				hideSidebar();
				this.nextElementSibling.classList.toggle("hidden");
			}
		})
	} 
}

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
}

/* modalForm */
function modalForm() {
  var modalForm = document.querySelector(".modal-form");
  var signin = document.querySelector(".signin");
  var signup = document.querySelector(".signup");
  var formSignin = document.querySelector(".form-signin");
  var formSignup = document.querySelector(".form-signup"); 
   
  var children = document.querySelector(".form-content").children;
  var close = document.querySelectorAll(".close-modal"); 
  var i;

  function closeModal() {
    modalForm.style.display = "none"; 
    
    for (i = 0; i < children.length; i++) {
      children[i].style.display = "none";
    }
  }

  for (i = 0; i < close.length; i++) {
    close [i].addEventListener("click", function () {
      closeModal(); 
    });    
	}
	
  signin.onclick = function () {
    modalForm.style.display = "block";
    formSignin.style.display = "block";
  }

  signup.onclick = function () {
    modalForm.style.display = "block";
    formSignup.style.display = "block";
  }
  
  // *** NOTE: only .modal-center, no need to declare  
  document.body.onclick = function (event) {
    if (event.target.matches('.form-content')) {
      closeModal();
    }
  } 
}

/* modalProfile */
function modalProfile() {
  var profile = document.querySelector(".profile");
  var modalProfile = document.querySelector(".modal-profile");
  var profileContent = document.querySelector(".profile-content");

  profile.onclick = function () {
    modalProfile.style.display = "block";
  }

  profileContent.onclick = function () {
    modalProfile.style.display = "none";
  } 
}
 
export {
	hamberger, dropdown, sidebar, accordation,
	modalForm, modalProfile
};