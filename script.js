$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Graphic Designer",
      "Machine Learning Enthusiast",
      "Frontend Developer",
      "Software Developer",
      "Python Developer",
      "Music Passionate",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Graphic Designer",
      "Machine Learning Enthusiast",
      "Frontend Developer",
      "Software Developer",
      "Python Developer",
      "Music Passionate",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// my //
function toggleText(contentId) {
  const content = document.getElementById(contentId);
  const dots = content.querySelector(".dots");
  const moreText = content.querySelector(".more-text");
  const button = content.nextElementSibling;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    button.textContent = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    button.textContent = "Read less";
  }
}

// Skils section Js
const track = document.getElementById("logoTrack");
let offset = 0;

function scrollLogos() {
  offset -= 1;
  if (Math.abs(offset) >= track.scrollWidth / 2) {
    offset = 0;
  }
  track.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(scrollLogos);
}

scrollLogos();
