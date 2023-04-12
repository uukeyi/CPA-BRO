import JSON from "../data.js";

const swiper = new Swiper(".mySwiper", {
   slidesPerView: 4,
   spaceBetween: 40,
   slidesPerGroup: 3,
   scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: true,
   },

   breakpoints: {
      1600: {
         slidesPerView: 4,
      },
      1200: {
         slidesPerView: 3,
      },
      992: {
         slidesPerView: 3,
      },
      768: {
         slidesPerGroup: 2,
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 2,
         simulateTouch: false,
      },
   },
});

const desktopRuBtn = document.querySelector(".ru-btn");
const desktopEnBtn = document.querySelector(".english-btn");
const arrowBtn = document.querySelector(".button-arrow");
const globusBtn = document.querySelector(".button-globus");
const regBtn = document.querySelector(".sign_up__btn");
const wrapperReg = document.querySelector(".wrapper_registration");
const goBackRegBtn = document.querySelector(".reg_goBack__btn");
const wrapperRegBlock = document.querySelector(".wrapper_registration__block ");
const loginBtn = document.querySelector(".login_btn");
const wrapperLogin = document.querySelector(".wrapper_login");
const goBackLogin = document.querySelector(".goBack_login_btn");
const loginContainer = document.querySelector(".login_container");
const ruBtn = document.querySelector(".ru");
const enBtn = document.querySelector(".en");
const yearsTitleAboutUs = document.querySelector(".about-us__left-title");
const titleAboutUs = document.querySelector(".about-us__about-us");
const mainSubtitleAboutUs = document.querySelector(".about-us__left-text");
const applicationDevelopAboutUs = document.querySelector("#applicationDevelop");
const teamBlockAboutUs = document.querySelector("#teamBlock");
const yearsSecondaryTitle = document.querySelector("#yearsSecondaryTitle");
const yearsSecondarySubtitle = document.querySelector(
   "#yearsSecondarySubtitle"
);
const communityBlockAboutUs = document.querySelector("#communityBlock");
const meetUpBlockAboutUs = document.querySelector("#meetupBlock");
const cazinoWithOffersAboutUs = document.querySelector("#cazinoWithOffers");
const creoBroAboutUs = document.querySelector("#creoBro");
const educationResourceAboutUs = document.querySelector("#educationResource");
const paymentSolutionAboutUs = document.querySelector("#paymentSolution");
const whichVerticalBlock = document.querySelector("#whichVertical");
const whichGeoBlock = document.querySelector("#whichGeo");
const whichTrafficSourcesBlock = document.querySelector("#whichTrafficSources");
const whichModelsTrafficPaymentBlock = document.querySelector(
   "#whichModelsTrafficPayment"
);
const availabilityInHouseBlock = document.querySelector("#availabilityInHouse");
const howToCopperateBlock = document.querySelector("#howToCopperate");
const noExperienceBlock = document.querySelector("#noExperience");
const noVerificationBlock = document.querySelector("#noVerification");
const availableOffersBlock = document.querySelector("#availableOffers");
const howToWorkWithUsBlock = document.querySelector("#howToWorkWithUs");
const leonOffer = document.querySelector("#leon-offer");
const tedbetOffer = document.querySelector("#tedbet-offer");
const oneWinOffer = document.querySelector("#onewin-offer");
const arlekinOffer = document.querySelector("#arlekin-offer");
const kakaduOffer = document.querySelector("#kakadu-offer");
const aboOffer = document.querySelector("#abo-offer");
const brazinoOffer = document.querySelector("#brazino-offer");
const linkToAdvForm = document.querySelector(".advertiser_reg__btn");
const wrapperFormAdv = document.querySelector(".wrapper-form-adv");
const goBackBtnForm = document.querySelectorAll(".goBack_btn_form");
const wrapperWebForm = document.querySelector(".wrapper-form-web");
const linkToWebForm = document.querySelector(".webmaster_reg__btn");
const regWebmasterTextBtn = document.querySelector(".webmaster_reg__btn");
const regAdvTextBtn = document.querySelector(".advertiser_reg__btn");
const regOrText = document.querySelector(".reg-mini-span");
const goBackWebmasterForm = document.querySelector(".webmaster_goBack_btn");
const goBackAdvForm = document.querySelector(".go_back_adv");
const webmasterSideText = document.querySelectorAll(".webmaster-side-text");
const advertiserSideText = document.querySelectorAll(".advertister-side-text");
const footer = document.querySelector("#footer");
const faqLinkReg = document.querySelector(".faq_reg_link");
const marqueeSubtitle = document.querySelector(".marquee__subtitle");
const advertisterLeftText = document.querySelector(".advertister__left_text");
const advertisterRightText = document.querySelector(".advertister__right_text");
const webmasterRightText = document.querySelector(".webmaster_right_text");
const webmasterLeftText = document.querySelector(".webmaster_left_text");
const marqueeSubtitleLink = document.querySelector(".marquee__subtitle_link");
const footerAnimationLine = document.querySelector(".footer__animation_line");
const wrapper = document.querySelector(".wrapper");
const heroSection = document.querySelector("#hero");
const colorArr = ["black", "#2f408e", "#de5722", "#fff", "black"];
let colorIndex = 0;
setInterval(() => {
   colorIndex++;
   wrapper.style.background = colorArr[colorIndex];
   heroSection.style.background = colorArr[colorIndex];
   if (colorIndex >= colorArr.length) {
      colorIndex = 0;
   }
}, [800]);
let words = ["5 ЛЕТ"];
let part,
   i = 0,
   offset = 0;
const len = words.length;
let forwards = !0,
   skip_count = 0;
let stick = "I";
function typingText() {
   const intervalId = setInterval(function () {
      forwards
         ? offset >= words[i].length &&
           (++skip_count,
           15 == skip_count && ((forwards = !1), (skip_count = 0)))
         : 0 == offset &&
           ((forwards = !0), i++, (offset = 0), i >= len && (i = 0)),
         (part = words[i].substr(0, offset)),
         localStorage.getItem("lang") == "en"
            ? offset === 7
               ? (stick = "")
               : (stick = "I")
            : offset === 5
            ? (stick = "")
            : (stick = "I"),
         0 == skip_count && (forwards ? offset++ : offset--),
         (document.querySelector(
            ".about-us__left-title"
         ).innerHTML = `<span>${part}<span style="font-weight: 400;">${stick}</span></span>`);
   }, 300);
   return intervalId;
}
let intervalId = document.addEventListener("DOMContentLoaded", typingText);
const changeLanguage = (prefix, e) => {
   if (e) {
      e.stopPropagation();
   }
   clearInterval(intervalId);
   i = 0;
   offset = 0;
   skip_count = 0;
   intervalId = typingText();

   globusBtn.classList.remove("button-globus-active");
   const aboutUsObj = JSON[prefix].aboutUs;
   const faq = JSON[prefix].faq;
   const offers = JSON[prefix].offers;
   const form = JSON[prefix].form;
   const joinUs = JSON[prefix].joinUs;
   const {
      whichVertical,
      whichGeo,
      whichTrafficSources,
      whichModelsTrafficPayment,
      availabilityInHouse,
      howToCopperate,
      noExperience,
      noVerification,
      availableOffers,
      howToWorkWithUs,
   } = faq;
   if (prefix === "en") {
      words = ["5 YEARS"];
      yearsTitleAboutUs.classList.add("years-title-en");
      advertisterRightText.classList.add("sidetext-en-right");
      advertisterLeftText.classList.add("sidetext-en-left");
      webmasterRightText.classList.add("sidetext-en-right");
      webmasterLeftText.classList.add("sidetext-en-left");
      enBtn.style.fontWeight = "700";
      ruBtn.style.fontWeight = "400";
      desktopRuBtn.style.color = "white";
      desktopEnBtn.style.color = "#DE5722";
   } else {
      ruBtn.style.fontWeight = "700";
      enBtn.style.fontWeight = "400";
      desktopRuBtn.style.color = "#DE5722";
      desktopEnBtn.style.color = "white";
      webmasterRightText.classList.remove("sidetext-en-right");
      webmasterLeftText.classList.remove("sidetext-en-left");
      advertisterRightText.classList.remove("sidetext-en-right");
      advertisterLeftText.classList.remove("sidetext-en-left");
      yearsTitleAboutUs.classList.remove("years-title-en");
   }
   titleAboutUs.textContent = aboutUsObj.title;
   words = [aboutUsObj.yearsMainTitle];
   applicationDevelopAboutUs.textContent = aboutUsObj.developApplication;
   teamBlockAboutUs.textContent = aboutUsObj.teamBlock;
   communityBlockAboutUs.textContent = aboutUsObj.communityBlock;
   meetUpBlockAboutUs.textContent = aboutUsObj.meetupBlock;
   cazinoWithOffersAboutUs.textContent = aboutUsObj.cazinoWithOffers;
   creoBroAboutUs.textContent = aboutUsObj.creoBro;
   educationResourceAboutUs.textContent = aboutUsObj.educationResource;
   paymentSolutionAboutUs.textContent = aboutUsObj.paymentSolution;
   mainSubtitleAboutUs.textContent = aboutUsObj.yearsMainSubtitle;
   yearsSecondaryTitle.textContent = aboutUsObj.yearsSecondaryTitle;
   yearsSecondarySubtitle.textContent = aboutUsObj.yearsSecondarySubtitle;
   whichVerticalBlock.children[0].textContent = whichVertical.title;
   whichVerticalBlock.children[1].textContent = whichVertical.answer;
   whichGeoBlock.children[0].textContent = whichGeo.title;
   whichGeoBlock.children[1].textContent = whichGeo.answer;
   whichTrafficSourcesBlock.children[0].textContent = whichTrafficSources.title;
   whichTrafficSourcesBlock.children[1].textContent =
      whichTrafficSources.answer;
   whichModelsTrafficPaymentBlock.children[0].textContent =
      whichModelsTrafficPayment.title;
   whichModelsTrafficPaymentBlock.children[1].textContent =
      whichModelsTrafficPayment.answer;
   availabilityInHouseBlock.children[0].textContent = availabilityInHouse.title;
   availabilityInHouseBlock.children[1].textContent =
      availabilityInHouse.answer;
   howToCopperateBlock.children[0].textContent = howToCopperate.title;
   marqueeSubtitle.innerHTML = joinUs.text;
   howToCopperateBlock.children[1].innerHTML = howToCopperate.answer;
   noExperienceBlock.children[0].textContent = noExperience.title;
   noExperienceBlock.children[1].textContent = noExperience.answer;
   noVerificationBlock.children[0].textContent = noVerification.title;
   noVerificationBlock.children[1].textContent = noVerification.answer;
   availableOffersBlock.children[0].textContent = availableOffers.title;
   availableOffersBlock.children[1].textContent = availableOffers.answer;
   howToWorkWithUsBlock.children[0].textContent = howToWorkWithUs.title;
   howToWorkWithUsBlock.children[1].textContent = howToWorkWithUs.answer;
   regAdvTextBtn.textContent = form.advertiser;
   regWebmasterTextBtn.textContent = form.webmaster;
   regOrText.textContent = form.or;
   goBackRegBtn.textContent = form.goBack;
   goBackLogin.textContent = form.goBack;
   goBackWebmasterForm.textContent = form.goBack;
   goBackAdvForm.textContent = form.goBack;
   Array.from(webmasterSideText).forEach((el) => {
      el.textContent = form.webmaster;
   });
   Array.from(advertiserSideText).forEach((el) => {
      el.textContent = form.advertiser;
   });
   Array.from(leonOffer.children).forEach((el, index) => {
      el.textContent = offers[leonOffer.dataset.id][index];
   });
   Array.from(tedbetOffer.children).forEach((el, index) => {
      el.textContent = offers[tedbetOffer.dataset.id][index];
   });
   Array.from(oneWinOffer.children).forEach((el, index) => {
      el.textContent = offers[oneWinOffer.dataset.id][index];
   });
   Array.from(brazinoOffer.children).forEach((el, index) => {
      el.textContent = offers[brazinoOffer.dataset.id][index];
   });
   Array.from(arlekinOffer.children).forEach((el, index) => {
      el.textContent = offers[arlekinOffer.dataset.id][index];
   });
   Array.from(kakaduOffer.children).forEach((el, index) => {
      el.textContent = offers[kakaduOffer.dataset.id][index];
   });
   Array.from(aboOffer.children).forEach((el, index) => {
      el.textContent = offers[aboOffer.dataset.id][index];
   });
   const faqLinkReg = document.querySelector(".faq_reg_link");
   const anchors = document.querySelectorAll(".anchor");
   for (let t of anchors)
      t.addEventListener("click", function (o) {
         o.preventDefault();
         const e = t.getAttribute("href").substr(1);
         document
            .getElementById(e)
            .scrollIntoView({ behavior: "smooth", block: "start" });
      });
   faqLinkReg?.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
         document.body.style.overflow = "hidden";
         document.body.style.height = "100vh";
      }, [2000]);
      wrapperReg.classList.add("wrapper_registration_active");
      wrapperRegBlock.classList.add("wrapper_registration__block_active");
   });
   const marqueeSubtitleLink = document.querySelector(
      ".marquee__subtitle_link"
   );
   marqueeSubtitleLink?.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
         document.body.style.overflow = "hidden";
         document.body.style.height = "100vh";
      }, [2000]);
      wrapperReg.classList.add("wrapper_registration_active");
      wrapperRegBlock.classList.add("wrapper_registration__block_active");
   });
};
regBtn.addEventListener("click", (e) => {
   e.preventDefault();
   document.body.style.overflow = "hidden";
   document.body.style.height = "100vh";

   wrapperReg.classList.add("wrapper_registration_active");
   wrapperRegBlock.classList.add("wrapper_registration__block_active");
});
goBackRegBtn.addEventListener("click", (e) => {
   e.preventDefault();
   document.body.style.overflow = "auto";
   document.body.style.height = "auto";

   wrapperReg.classList.remove("wrapper_registration_active");
   wrapperRegBlock.classList.remove("wrapper_registration__block_active");
});
loginBtn.addEventListener("click", (e) => {
   e.preventDefault();
   document.body.style.overflow = "hidden";
   document.body.style.height = "100vh";

   wrapperLogin.classList.add("wrapper_login_active");
   goBackLogin.classList.add("goBack_login_btn_active");
   loginContainer.classList.add("login_container_active");
});

goBackLogin.addEventListener("click", (e) => {
   e.preventDefault();
   document.body.style.overflow = "auto";
   document.body.style.height = "auto";
   wrapperLogin.classList.remove("wrapper_login_active");
   goBackLogin.classList.remove("goBack_login_btn_active");
   loginContainer.classList.remove("login_container_active");
});

window.addEventListener("DOMContentLoaded", function () {
   if (localStorage.getItem("lang") !== null) {
      changeLanguage(localStorage.getItem("lang"));
   }
   if (window.screen.width <= 576) {
      window.addEventListener(
         "scroll",
         function () {
            if (
               window.innerHeight + window.pageYOffset >=
               document.body.offsetHeight
            ) {
               footerAnimationLine.style.left = "0";
               footerAnimationLine.style.opacity = "1";
            } else {
               footerAnimationLine.style.left = "-100%";
               footerAnimationLine.style.opacity = "0";
            }
         },
         false
      );
   }
});

const anchors = document.querySelectorAll(".anchor");
for (let t of anchors)
   t.addEventListener("click", function (o) {
      o.preventDefault();
      const e = t.getAttribute("href").substr(1);
      document
         .getElementById(e)
         .scrollIntoView({ behavior: "smooth", block: "start" });
   });
faqLinkReg.addEventListener("click", (e) => {
   wrapperReg.classList.add("wrapper_registration_active");
   wrapperRegBlock.classList.add("wrapper_registration__block_active");
   setTimeout(() => {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
   }, [2000]);
});
marqueeSubtitleLink.addEventListener("click", () => {
   wrapperReg.classList.add("wrapper_registration_active");
   wrapperRegBlock.classList.add("wrapper_registration__block_active");
   setTimeout(() => {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
   }, [2000]);
});
globusBtn.addEventListener("click", () => {
   globusBtn.classList.add("button-globus-active");
});
ruBtn.addEventListener("click", (e) => {
   localStorage.setItem("lang", "ru");
   ruBtn.style.fontWeight = "700";
   enBtn.style.fontWeight = "400";
   changeLanguage("ru", e);
});
enBtn.addEventListener("click", (e) => {
   localStorage.setItem("lang", "en");
   enBtn.style.fontWeight = "700";
   ruBtn.style.fontWeight = "400";
   changeLanguage("en", e);
});
desktopRuBtn.addEventListener("click", (e) => {
   localStorage.setItem("lang", "ru");
   desktopEnBtn.style.color = "white";
   desktopRuBtn.style.color = "#DE5722";

   changeLanguage("ru", e);
});
desktopEnBtn.addEventListener("click", (e) => {
   localStorage.setItem("lang", "en");
   desktopRuBtn.style.color = "white";
   desktopEnBtn.style.color = "#DE5722";
   webmasterRightText.classList.add("sidetext-en-right");
   webmasterLeftText.classList.add("sidetext-en-left");
   advertisterRightText.classList.add("sidetext-en-right");
   advertisterLeftText.classList.add("sidetext-en-left");

   changeLanguage("en", e);
});
linkToAdvForm.addEventListener("click", () => {
   wrapperFormAdv.classList.add("wrapper-form-adv-active");
   document.body.style.overflow = "hidden";
});
linkToWebForm.addEventListener("click", () => {
   wrapperWebForm.classList.add("wrapper-form-web-active");
   document.body.style.overflow = "hidden";
});
goBackBtnForm.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      e.preventDefault();
      wrapperFormAdv.classList.remove("wrapper-form-adv-active");
      wrapperWebForm.classList.remove("wrapper-form-web-active");
      wrapperReg.classList.add("wrapper_registration_active");
      wrapperRegBlock.classList.add("wrapper_registration__block_active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
   });
});

window.addEventListener(
   "scroll",
   function () {
      arrowBtn.classList.remove("button_menu_unactive");
      arrowBtn.classList.add("button_menu_active");
      if (
         Math.floor(footer.getBoundingClientRect().top) <=
         arrowBtn.getBoundingClientRect().top
      ) {
         arrowBtn.classList.remove("button_menu_active");
         arrowBtn.classList.add("button_menu_unactive");
      }
      if (window.pageYOffset === 0) {
         arrowBtn.classList.remove("button_menu_active");
         arrowBtn.classList.add("button_menu_unactive");
      }
   },
   false
);

document.addEventListener("DOMContentLoaded", () => {
   const cursors = document.querySelectorAll(".cursor");
   const maxTurn = 55;
   const maxDistance = 1000;
   const step = 250;
   Array.from(cursors).forEach((cursor) => {
      let deg = +(Math.random() * 360).toFixed();
      let translate = { x: 0, y: 0 };
      deg += +(Math.random() * maxTurn * 100 - maxTurn).toFixed();
      let shift = getShift(deg, step);
      while (
         Math.abs(translate.x + shift.x) >= maxDistance ||
         Math.abs(translate.y + shift.y) >= maxDistance
      ) {
         deg += +(Math.random() * maxTurn * 100 - maxTurn).toFixed();
         shift = getShift(deg, step);
      }
      translate = {
         x: translate.x + shift.x,
         y: translate.y + shift.y,
      };
      cursor.style.transform = `translate(${translate.x}px,${translate.y}px)`;
   });
   setInterval(() => {
      Array.from(cursors).forEach((cursor) => {
         let deg = +(Math.random() * 360).toFixed();
         let translate = { x: 0, y: 0 };
         deg += +(Math.random() * maxTurn * 100 - maxTurn).toFixed();
         let shift = getShift(deg, step);
         while (
            Math.abs(translate.x + shift.x) >= maxDistance ||
            Math.abs(translate.y + shift.y) >= maxDistance
         ) {
            deg += +(Math.random() * maxTurn * 100 - maxTurn).toFixed();
            shift = getShift(deg, step);
         }
         translate = {
            x: translate.x + shift.x,
            y: translate.y + shift.y,
         };

         cursor.style.transform = `translate(${translate.x}px,${translate.y}px)`;
      });
   }, 19000);

   function getShift(deg, step) {
      return {
         x: +(Math.cos((deg * Math.PI) / 180) * step).toFixed(),
         y: +(Math.sin((deg * Math.PI) / 180) * step).toFixed(),
      };
   }
});
