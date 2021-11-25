export function modal() { 
  var modal = document.querySelector(".modal-icon");
  var children = document.querySelector(".modal-content").children; 
  var closeBt = document.querySelectorAll(".close-modal");
  var i;
  
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
}  