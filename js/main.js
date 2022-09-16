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
let number = [...stats_number];
for (let i = 0; i < number.length; i++) {
  let data = +number[i].innerHTML;
  let counter = setInterval(function stats() {
    number[i].innerHTML = data;
    data += 1;
    if (data == number[i].dataset.count) {
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
