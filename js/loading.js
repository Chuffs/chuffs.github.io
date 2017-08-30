function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      redirect();
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

function redirect() {
  if (window.innerWidth < 535) {
    window.location.replace("pages/home_page_mobile.html");
  } else if (window.innerWidth <= 768) {
    window.location.replace("pages/home_page_tablet.html");
  } else {
    window.location.replace("pages/home_page_desktop.html");
  }
}
