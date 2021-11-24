/* sidebar */
export function sidebar () {
  var sidebarBtn = document.getElementsByClassName("sidebar-btn");
  var sidebarContent = document.getElementsByClassName("sidebar-content"); 
  var i; 

  function hideSidebar() {
    for (i = 0; i < sidebarContent.length; i++) {
      sidebarContent[i].classList.add("hidden");
    } 
  } 

  for (i = 0; i < sidebarBtn.length; i++) {
    sidebarBtn[i].addEventListener("click", function () {
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

// export { sidebar }; 