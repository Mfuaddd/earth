// NAVBAR ##################################################

const navBars = document.querySelector(".nav_bars")
const navBarsXmarkIcon = document.querySelector(".fa-xmark")
const navBarsBarsIcon = document.querySelector(".fa-bars")
const navMenu = document.querySelector(".nav_menu")
const asideContent = document.querySelector(".aside_content")
const navCard = document.querySelector(".nav_card")
const asideClose = document.querySelector(".aside_close")

navBars.addEventListener("click",function () {
    navMenu.classList.toggle("dspBlock")
    navBarsXmarkIcon.classList.toggle("dspInline")
    navBarsBarsIcon.classList.toggle("dspNone")
})
navCard.addEventListener("click",function () {
    asideContent.classList.add("aside_scale")
})
asideClose.addEventListener("click",function () {
    asideContent.classList.remove("aside_scale")
})

// SLIDER ####################################################

let rangeMin = 1;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangeInput[0].value);
    let maxRange = parseInt(rangeInput[1].value);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePrice[0].value = minRange;
      rangePrice[1].value = maxRange;
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
    }
  });
});

rangePrice.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = rangePrice[0].value;
    let maxPrice = rangePrice[1].value;
    if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

// CATEGORIES #########################################################

const categories = document.querySelectorAll(".categories_list li")
const postType = document.querySelectorAll(".post_type")
const headerSpan = document.querySelector(".header_span")
const headerH2 = document.querySelector(".header_h2")

categories.forEach((el)=>{
  const span = el.querySelector("span")
  el.addEventListener("click",function () {
    headerSpan.textContent = "Home / " + span.textContent
    headerH2.textContent = span.textContent
    postType.forEach((x)=>{
      if(x.textContent === span.textContent){
        x.parentNode.classList.remove("dspNone")
      }
      else{
        x.parentNode.classList.add("dspNone")
      }
    })
  })
})

// SEARCH #########################################################

const searchInput = document.querySelector(".search input")
const searchSubmit = document.querySelector(".search button")
const postName = document.querySelectorAll(".post_name")

if (searchSubmit) {
  searchSubmit.addEventListener("click",function () {
    postName.forEach((el)=>{
      if (el.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
        el.parentNode.classList.remove("dspNone")
        
      }
      else{
        el.parentNode.classList.add("dspNone")
      }
    })
  })
}


// SLIDER #########################################################

const postPrice = document.querySelectorAll(".post_price")
rangeInput.forEach((input) => {
  console.log("c");
  input.addEventListener("change", (e) => {
    postPrice.forEach((el)=>{
      console.log(+el.textContent.slice(1), +rangePrice[1].value);
      if (+el.textContent.slice(1) > +rangePrice[0].value &&
       +el.textContent.slice(1) < +rangePrice[1].value ) {
        el.parentNode.classList.remove("dspNone")
      }
      else{
        el.parentNode.classList.add("dspNone")
        
      }
    })
  });
});
