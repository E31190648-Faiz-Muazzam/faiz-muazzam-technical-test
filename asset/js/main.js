window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".header");

  navbar.classList.toggle("scrolling", window.scrollY > 50);
  navbar.classList.toggle("bg-scroll", window.scrollY > 200);
});

$(document).ready(function () {
  window.onload = () => {
    const wElement = window.innerWidth;
    const vDesktop = document.getElementById("view-desktop");
    const vMobile = document.getElementById("view-mobile");

    const btnReadMore = document.getElementById("btn-read-more");
    const contentDesc = document.getElementById("content-desc");

    if (wElement > 992) {
      document.body.removeChild(vMobile);
    } else {
      document.body.removeChild(vDesktop);
    }

    btnReadMore.onclick = () => {
      contentDesc.classList.toggle("desc-open");

      if (btnReadMore.innerText == "Read More") {
        btnReadMore.innerText = "Hide";
      } else {
        btnReadMore.innerText = "Read More";
      }
    };

    $(".slider-presale").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoWidth: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          //   nav: true,
        },
        768: {
          items: 2,
          nav: false,
        },
        992: {
          items: 2,
          nav: true,
          loop: false,
        },
      },
    });

    $("#controls-navigation").click(() => {
      $("#temp-navigation").fadeToggle();
      $("#ic-menu").fadeToggle();
      $("#ic-close").fadeToggle();
      $("body").toggleClass("overflow-hidden-body");

      if (window.scrollY > 200) {
        $(".header").toggleClass("scrolling bg-scroll");
      }
    });
  };

  $("a.smooth-menu").on("click", function (event) {
    let anchor = $("a.smooth-menu");
    console.log(anchor.attr("href"));
    let headerH = "85";
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - headerH + "px",
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});
