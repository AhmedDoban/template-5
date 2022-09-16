/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
navbar  menu
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let check = document.querySelector(".check");
let nav = document.querySelector(".main-nav");
let menue_icon = document.querySelector(".menue_icon");
let header = document.querySelector(".header");
check.addEventListener("click", (ele) => {
  if (check.checked) {
    nav.style.cssText = "display: flex";
    menue_icon.classList.add("active");
  } else {
    nav.style.cssText = "display: none;";
    menue_icon.classList.remove("active");
  }
});

/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
stats
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let stats_number = document.querySelectorAll(".stats-number");
for (let i = 0; i < stats_number.length; i++) {
  let counter = setInterval(function stats() {
    stats_number[i].innerHTML++;
    if (stats_number[i].innerHTML === stats_number[i].dataset.count) {
      clearInterval(counter);
    }
  }, 1);
}

/*ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
back-to-top
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ*/
let btn = document.querySelector(".back-to-top");
btn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
window.onscroll = (ele) => {
  if (window.scrollY >= 550) {
    header.style.cssText = "background: rgba(52, 59, 64, 0.9);";
  } else {
    header.style.cssText = "background-color : transparent";
  }
  if (window.scrollY >= 250) {
    btn.style.cssText = "display : flex";
  } else {
    btn.style.cssText = "display : none";
  }
};
