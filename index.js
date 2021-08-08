var icon = document.querySelector(".burger");
var items = document.querySelector(".ul-div");
var menu = document.querySelector(".menu");
var header = document.querySelector(".menu");
icon.addEventListener("click", function () {
  items.classList.toggle("hidden");
  icon.classList.toggle("toggle");
  if (window.scrollY < 1 && items.classList.contains("hidden") == false) {
    menu.classList.add("bg-gray-200");
  } else if (window.scrollY < 1 && items.classList.contains("hidden")) {
    menu.classList.remove("bg-gray-200");
    console.log('hi');
    header.classList.remove("scroll-active");
  }
  
});

function hideMenu() {
  if (items.classList.contains("hidden")== false){
      items.classList.add("hidden");
      items.classList.remove("flex");
      if (window.scrollY < 1) {
        menu.classList.remove("bg-gray-200");
      }
      icon.classList.toggle('toggle');
  }
  // console.log('helo');

}


window.addEventListener("scroll", function () {
  let header = document.querySelector(".menu");
  let windowPosition = window.scrollY > 1;

  if (window.scrollY < 1 && items.classList.contains("hidden")) {
    header.classList.toggle("scroll-active", windowPosition);
    // menu.classList.remove("bg-gray-200");
  } else if (items.classList.contains("hidden") == false) {
  } else {
    header.classList.toggle("scroll-active", windowPosition);
    menu.classList.remove("bg-gray-200");
  }
  
});
