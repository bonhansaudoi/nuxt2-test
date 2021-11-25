export function modal() { 
  var modal = document.querySelector(".modal-icon");
  var children = document.querySelector(".modal-content").children; 
  var closeBt = document.querySelectorAll(".close");
  var i;
  /* hidden content */ 
  var btCart1 = document.querySelector(".btn-cart1");
  var contentCart1 = document.querySelector(".content-cart1");

  var btCart2 = document.querySelector(".btn-cart2");
  var contentCart2 = document.querySelector(".content-cart2");
  
  function closeModal() {
    modal.style.display = "none"; 
    for (i = 0; i < children.length; i++) { 
      children[i].style.display = "none";
    }  
  }

  for (i = 0; i < closeBt.length; i++) {
    closeBt [i].addEventListener("click", function () {
      closeModal(); 
    });    
  }
  
  document.body.onclick = function (event) {
    if (event.target.matches('.modal-content')) {
      closeModal();
    }
  }

 ///////
  btCart1.onclick = function () { 
    modal.style.display = "block";
    contentCart1.style.display = "block";
  }
  btCart2.onclick = function () { 
    modal.style.display = "block";
    contentCart2.style.display = "block";
	} 
}  