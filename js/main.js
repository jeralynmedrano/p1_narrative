var scrollHeader = document.querySelector(".js-scroll");

var updateHeader = function() {
  offsetTop = window.pageYOffset;
  scrollHeader.style.opacity = Math.max(0, (100-offsetTop*0.75)/100);
  scrollHeader.style.transform = "translate3d(0," + -(Math.max(0, (offsetTop*0.3))) + "px," + -(Math.max(0, (offsetTop*0.02))) + "px)";
}

window.addEventListener("scroll", updateHeader);