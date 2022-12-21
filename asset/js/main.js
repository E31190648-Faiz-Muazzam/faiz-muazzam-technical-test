window.onload = () => {
  const wElement = window.innerWidth;
  const vDesktop = document.getElementById("view-desktop");
  const vMobile = document.getElementById("view-mobile");

  if (wElement > 992) {
    document.body.removeChild(vMobile);
  } else {
    document.body.removeChild(vDesktop);
  }
};

const btnReadMore = document.getElementById("button-read-more");
const contentDesc = document.getElementById("content-desc");

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".header");

  navbar.classList.toggle("scrolling", window.scrollY > 50);
  navbar.classList.toggle("bg-scroll", window.scrollY > 200);
});

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

const myCarousel = document.getElementById("slider-banner-about");

myCarousel.addEventListener("slid.bs.carousel", (event) => {
  const getLabel = event.target
    .querySelector(
      ".head-slider .view-indicators .carousel-indicators .item-slider button.btn.active"
    )
    .getAttribute("aria-label");

  document.querySelector("#button-info-active span").innerText = getLabel;
});

const myCollapsible = document.getElementById("view-list-indicators");
myCollapsible.addEventListener("shown.bs.collapse", (event) => {
  document.body.onclick = () => {
    const bsCollapse = new bootstrap.Collapse("#view-list-indicators", {
      hide: true,
      // toggle: false,
    });
  };

  event.target.onclick = () => {
    // console.log("action");
    const bsCollapse = new bootstrap.Collapse("#view-list-indicators", {
      hide: false,
      // toggle: false,
    });
  };
});

myCollapsible.addEventListener("hide.bs.collapse", (event) => {
  document.body.onclick = () => {
    const bsCollapse = new bootstrap.Collapse("#view-list-indicators", {
      hide: true,
      toggle: false,
    });
  };
});

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

const onCaptionSlider = document.querySelector(
  ".section-slider .carousel-item.active .view-caption"
);

const onLinkSlider = document.getElementById("link-slider");

const mySlider = document.getElementById("slider-banner-desktop");

let styleLinkTop = onCaptionSlider.offsetHeight + onCaptionSlider.offsetTop;

onLinkSlider.style.top = `${styleLinkTop - 25}px`;

mySlider.addEventListener("slid.bs.carousel", (event) => {
  const getSliderDesc = event.target.querySelector(
    ".section-slider .carousel-item.active .view-caption"
  );

  let styleLinkTop = getSliderDesc.offsetHeight + getSliderDesc.offsetTop;

  onLinkSlider.style.top = `${styleLinkTop - 5}px`;
});
