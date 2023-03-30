const words = ["5 ЛЕТ"];
let part;
let i = 0;
let offset = 0;
const len = words.length;
let forwards = true;
let skip_count = 0;
const skip_delay = 15;
const speed = 200;

const wordflick = function () {
   setInterval(function () {
      if (forwards) {
         if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
               forwards = false;
               skip_count = 0;
            }
         }
      } else {
         if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
               i = 0;
            }
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
         if (forwards) {
            offset++;
         } else {
            offset--;
         }
      }
      document.querySelector(".about-us__left-title").textContent = `${part}I`;
   }, speed);
};

window.addEventListener("DOMContentLoaded", function () {
   wordflick();
});
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
