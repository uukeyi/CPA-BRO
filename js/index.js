const words = ["5 ЛЕТ"];
const arrowBtn = document.querySelector(".button-arrow");
const globusBtn = document.querySelector(".button-globus");
const regBtn = document.querySelector('.sign_up__btn')
const wrapperReg = document.querySelector('.wrapper_registration')
const goBackRegBtn = document.querySelector('.reg_goBack__btn')
const wrapperRegBlock = document.querySelector('.wrapper_registration__block ')
const loginBtn = document.querySelector('.login_btn')
regBtn.addEventListener('click' , (e) => {
   e.preventDefault()
   wrapperReg.classList.add('wrapper_registration_active')
   wrapperRegBlock.classList.add('wrapper_registration__block_active')
})
goBackRegBtn.addEventListener('click' , (e) => {
   e.preventDefault()
   wrapperReg.classList.remove('wrapper_registration_active')
   wrapperRegBlock.classList.remove('wrapper_registration__block_active')

})
// loginBtn.addEventListener('click' , () => {
//    // e.preventDefault()
//    wrapperReg.classList.remove('wrapper_registration_active')
//    wrapperRegBlock.classList.remove('wrapper_registration__block_active')
// })
let part,
   i = 0,
   offset = 0;
const len = words.length;
let forwards = !0,
   skip_count = 0;
const skip_delay = 15,
   speed = 200,
   wordflick = function () {
      setInterval(function () {
         forwards
            ? offset >= words[i].length &&
              (++skip_count,
              15 == skip_count && ((forwards = !1), (skip_count = 0)))
            : 0 == offset &&
              ((forwards = !0), i++, (offset = 0), i >= len && (i = 0)),
            (part = words[i].substr(0, offset)),
            0 == skip_count && (forwards ? offset++ : offset--),
            (document.querySelector(
               ".about-us__left-title"
            ).textContent = `${part}`);
      }, 200);
   };
window.addEventListener("DOMContentLoaded", function () {
 
   if (window.screen.width <= 576) {
      window.addEventListener(
         "scroll",
         function () {
            globusBtn.classList.remove("button_menu_active");
            globusBtn.classList.add("button_menu_unactive");
            arrowBtn.classList.remove("button_menu_unactive");
            arrowBtn.classList.add("button_menu_active");
            if (window.pageYOffset === 0) {
               globusBtn.classList.remove("button_menu_unactive");
               globusBtn.classList.add("button_menu_active");
               arrowBtn.classList.remove("button_menu_active");
               arrowBtn.classList.add("button_menu_unactive");
            }
         },
         false
      );
   }
   setInterval(function () {
      forwards
         ? offset >= words[i].length &&
           (++skip_count,
           15 == skip_count && ((forwards = !1), (skip_count = 0)))
         : 0 == offset &&
           ((forwards = !0), i++, (offset = 0), i >= len && (i = 0)),
         (part = words[i].substr(0, offset)),
         0 == skip_count && (forwards ? offset++ : offset--),
         (document.querySelector(
            ".about-us__left-title"
         ).innerHTML = `<span>${part}<span style="font-weight: 200; opacity : 0.7">I</span></span>`);
   }, 200);
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let t of anchors)
   t.addEventListener("click", function (o) {
      o.preventDefault();
      const e = t.getAttribute("href").substr(1);
      document
         .getElementById(e)
         .scrollIntoView({ behavior: "smooth", block: "start" });
   });

const globusImg = document.querySelector("#img-globus");
const innerBtn = document.querySelector(".button-mobile-inner");
globusBtn.addEventListener("click", () => {
  //  globusBtn.style.display = "none";
  //  innerBtn.style.display = "block";
  globusBtn.classList.add('globusBtn_active')
   //   setInterval(() => {
   //     innerBtn.style.height = '100%';
   //     innerBtn.style.fontSize = '24px';
   //   }, 5);
   //   innerBtn.style.transition = '0.5s';
});
innerBtn.addEventListener("click", () => {
   globusBtn.style.display = "block";
   innerBtn.style.display = "none";
});
window.addEventListener(
  "scroll",
  function () {
  
     arrowBtn.classList.remove("button_menu_unactive");
     arrowBtn.classList.add("button_menu_active");
     if (window.pageYOffset === 0) {
      
        arrowBtn.classList.remove("button_menu_active");
        arrowBtn.classList.add("button_menu_unactive");
     }
  },
  false
);