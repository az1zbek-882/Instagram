const menuItems = document.querySelectorAll('.Header_row_Top-bottom-btn');
const sliderTrack = document.querySelector(".Slider_wrap-track");
const sliderBtnnext = document.querySelector(".Slider_wrap-Btns-btn-next");
const sliderBtnprev = document.querySelector(".Slider_wrap-Btns-btn-prev");

const sliderItemWidth = document.querySelector(
  ".Slider_wrap-track-menu-item"
).clientWidth;

console.log(sliderTrack);

let activeSliderItem = 0;
function moveNext(n) {
  sliderTrack.style.left = `-${n * sliderItemWidth}px`;
}
function movePrev(n) {
    sliderTrack.style.left = `-${n * sliderItemWidth}px`;
  }
  
  

sliderBtnnext.addEventListener("click", function () {
  if (activeSliderItem === 20) {
    activeSliderItem = 0;
  } else {
    activeSliderItem++;
  }
  moveNext(activeSliderItem);
});
sliderBtnprev.addEventListener("click", function () {
    if (activeSliderItem === 0) {
        activeSliderItem = 20;
      } else {
        activeSliderItem--;
      }
    movePrev(activeSliderItem)
  });


  
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Hamma elementlardan "active" klassini olib tashlash
    menuItems.forEach(i => i.classList.remove('active'));

    // Bosilgan elementga "active" klassini qo'shish
    item.classList.add('active');
  });
});


document.getElementById("menuItems").onclick = function() {
  window.location.href = "https://www.instagram.com/reels/DDcJns8OyeO/";
};
