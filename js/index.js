const words = ['5 ЛЕТ'];
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
          (++skip_count, 15 == skip_count && ((forwards = !1), (skip_count = 0)))
        : 0 == offset && ((forwards = !0), i++, (offset = 0), i >= len && (i = 0)),
        (part = words[i].substr(0, offset)),
        0 == skip_count && (forwards ? offset++ : offset--),
        (document.querySelector('.about-us__left-title').textContent = `${part}`);
    }, 200);
  };
window.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {
    forwards
      ? offset >= words[i].length &&
        (++skip_count, 15 == skip_count && ((forwards = !1), (skip_count = 0)))
      : 0 == offset && ((forwards = !0), i++, (offset = 0), i >= len && (i = 0)),
      (part = words[i].substr(0, offset)),
      0 == skip_count && (forwards ? offset++ : offset--),
      (document.querySelector(
        '.about-us__left-title'
      ).innerHTML = `<span>${part}<span style="font-weight: 400;">I</span></span>`);
  }, 200);
});
const anchors = document.querySelectorAll('a[href*="#"]');
for (let t of anchors)
  t.addEventListener('click', function (o) {
    o.preventDefault();
    const e = t.getAttribute('href').substr(1);
    document.getElementById(e).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

const globusBtn = document.querySelector('.button-globus');
const globusImg = document.querySelector('#img-globus');
const innerBtn = document.querySelector('.button-mobile-inner');
globusBtn.addEventListener('click', () => {
  globusBtn.style.display = 'none';
  innerBtn.style.display = 'block';
  //   setInterval(() => {
  //     innerBtn.style.height = '100%';
  //     innerBtn.style.fontSize = '24px';
  //   }, 5);
  //   innerBtn.style.transition = '0.5s';
});
innerBtn.addEventListener('click', () => {
  globusBtn.style.display = 'block';
  innerBtn.style.display = 'none';
});
