var icon = document.querySelector(".burger");
var items = document.querySelector(".ul-div");
var menu = document.querySelector(".menu");
var header = document.querySelector(".menu");
var im = document.querySelector(".Im");
var cv = document.querySelector(".cv");
var headerColor = document.getElementById("home");
var svgFill = document.getElementById("waveSVG");
var svgPath = document.getElementById("shapeFill");
var description = document.getElementsByClassName("description");
var skill = document.getElementById("skill");
var project = document.getElementById("projects");
var cardColor = document.getElementsByClassName("card");
var contact = document.getElementsByClassName("contactWrapper");
var footer = document.getElementById("footer");
var nightModeBtn = document.getElementById("switch");

icon.addEventListener("click", function () {
  items.classList.toggle("hidden");
  icon.classList.toggle("toggle");
  if (nightModeBtn.checked == true) {
    if (items.classList.contains("bg-gray-200")) {
      items.classList.remove("bg-gray-200");
    }
    items.classList.add("bg-gray-800");
    menu.classList.add("bg-gray-800");
    console.log("dark");
  } else {
    if (items.classList.contains("bg-gray-800")) {
      items.classList.remove("bg-gray-800");
    }
    items.classList.add("bg-gray-200");
    menu.classList.add("bg-gray-200");
    console.log("light");
  }
  if (window.scrollY < 1 && items.classList.contains("hidden") == false) {
    menu.classList.add("bg-gray-200");
    if (nightModeBtn.checked == false) {
      items.style.color = "#000";
    }else{
      items.style.color = "#fff";
    }
  } else if (window.scrollY < 1 && items.classList.contains("hidden")) {
    menu.classList.remove("bg-gray-200");
    console.log("hi");
    header.classList.remove("scroll-active");
  }
});

function hideMenu() {
  if (items.classList.contains("hidden") == false) {
    items.classList.add("hidden");
    items.classList.remove("flex");
    if (window.scrollY < 1) {
      menu.classList.remove("bg-gray-200");
    }
    icon.classList.toggle("toggle");
  }
  // console.log('helo');
}
//Night Mode

function toggleNightMode() {
  if (nightModeBtn.checked == true) {
    headerColor.style.backgroundColor = "rgb(3 9 42)";
    svgFill.style.fill = "#161b22";
    svgPath.style.fill = "#161b22";
    document.body.style.backgroundColor = "#161b22";
    console.log(description);
    description[0].style.backgroundColor = "#292a30";
    description[0].style.color = "rgb(249 250 251)";
    skill.style.color = "rgb(249 250 251)";
    project.style.color = "rgb(249 250 251)";
    im.style.color = "rgb(235 64 64)";
    cv.style.color = "#fff";
    if (!items.classList.contains("hidden")) {
      if (items.classList.contains("bg-gray-200")) {
        items.classList.remove("bg-gray-200");
      }
      items.classList.add("bg-gray-800");
      menu.classList.add("bg-gray-800");
      items.style.color = "#fff";
    }
    for (var i = 0, len = cardColor.length; i < len; i++) {
      cardColor[i].style.backgroundColor = "#292a30";
      cardColor[i].style.color = "rgb(249 250 251)";
    }
    for (var i = 0, len = contact.length; i < len; i++) {
      contact[i].style.backgroundColor = "#292a30";
      contact[i].style.color = "rgb(249 250 251)";
    }

    footer.style.backgroundColor = "#161b22";
    footer.style.color = "rgb(249 250 251)";

    if (window.scrollY < 1 && items.classList.contains("hidden")) {
    } else {
      menu.classList.add("bg-gray-800");
      header.style.color = "#fff";
    }
  } else {
    headerColor.style.backgroundColor = "rgb(89, 89, 175)";
    svgFill.style.fill = "#fcfafa";
    svgPath.style.fill = "#fcfafa";
    document.body.style.backgroundColor = "#fcfafa";
    description[0].style.backgroundColor = "rgb(249 250 251)";
    description[0].style.color = "#292a30";
    im.style.color = "#000";
    cv.style.color = "#000";
    if(!items.classList.contains("hidden")){
      if (menu.classList.contains("bg-gray-800")) {
        menu.classList.remove("bg-gray-800");
      }
      menu.classList.add("bg-gray-200");
    }
    if (!items.classList.contains("hidden")) {
      if (items.classList.contains("bg-gray-800")) {
        items.classList.remove("bg-gray-800");
      }
      items.classList.add("bg-gray-200");
      menu.classList.add("bg-gray-200");
      items.style.color = "#000";
    }
    for (var i = 0, len = cardColor.length; i < len; i++) {
      cardColor[i].style.backgroundColor = "#fcfafa";
      cardColor[i].style.color = "#000";
    }
    for (var i = 0, len = contact.length; i < len; i++) {
      contact[i].style.backgroundColor = "rgb(243 244 246)";
      contact[i].style.color = "#000";
    }

    footer.style.backgroundColor = "rgb(243 244 246)";
    footer.style.color = "#000";
    if (window.scrollY < 1 && items.classList.contains("hidden")) {
    } else {
      menu.classList.remove("bg-gray-800");
      header.style.color = "#000";
    }
  }
}

window.addEventListener("scroll", function () {
  let header = document.querySelector(".menu");
  let windowPosition = window.scrollY > 1;

  if (window.scrollY < 1 && items.classList.contains("hidden")) {
    header.classList.toggle("scroll-active", windowPosition);

    menu.classList.remove("bg-gray-800");
    header.style.color = "#fff";
    if (!items.classList.contains("hidden")) {
      items.style.color = "#000";
    }
  } else if (items.classList.contains("hidden") == false) {
  } else {
    header.classList.toggle("scroll-active", windowPosition);
    menu.classList.remove("bg-gray-200");
    header.style.color = "#000";
    if (nightModeBtn.checked == true && header.classList.contains("scroll-active")) {
      menu.classList.add("bg-gray-800");
      header.style.color = "#fff";
    }
  }
});
