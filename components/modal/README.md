<ModalForm />
import ModalForm from "~/components/modal/ModalForm.vue"; 

function modalForm() {
  var modal = document.querySelector(".modal-form");
  var signin = document.querySelector(".signin");
  var signup = document.querySelector(".signup");
  var formSignin = document.querySelector(".form-signin");
  var formSignup = document.querySelector(".form-signup");

  var profile = document.querySelector(".profile");
  var userProfile = document.querySelector(".user-profile");

  signin.onclick = function () {
    modal.style.display = "block";
    formSignin.style.display = "block";
  }

  signup.onclick = function () {
    modal.style.display = "block";
    formSignup.style.display = "block";
  } 

  profile.onclick = function () {
    modal.style.display = "block";
    userProfile.style.display = "block"; 
  }
}

export { userAuth };