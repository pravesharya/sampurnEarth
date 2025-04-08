import { createCarousel } from "./carousel.js";

window.addEventListener("resize", () => {
  window.location.reload();
});

console.log(
  `Root font size: ${getComputedStyle(document.documentElement).fontSize}`
);

let width = window.innerWidth;
let height = window.innerHeight;
console.log("Width: ", width);
console.log("Height: ", height);

const isMobile =
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
  window.innerWidth < window.innerHeight;

if (isMobile) {
  console.log("Mobile");
}

// INTRO  ================================================================

const intro = document.getElementById("intro");
intro.src = "./assets/home/intro.mp4";
intro.preload = "auto";
intro.autoplay = true;
intro.loop = true;

intro.addEventListener("loadedmetadata", () => {
  console.log("Video metadata loaded successfully.");
});

intro.addEventListener("error", (e) => {
  console.error("Error loading video:", e);
});

intro.addEventListener("mouseover", () => {
  intro.pause();
});
intro.addEventListener("mouseout", () => {
  intro.play();
});

// COUNTER  ================================================================

let v1, v2, v3;
v1 = v2 = v3 = 0;

const c1 = document.createElement("div");
const c1H = document.createElement("div");
const c1N = document.createElement("div");
const c1Nv = document.createElement("div");
const c1Ns = document.createElement("div");
const c1MT = document.createElement("div");
c1.classList.add("CC");
c1.classList.add("counter");
c1N.classList.add("CC");
c1N.classList.add("PG10");
c1H.classList.add("counterH");
c1Nv.classList.add("counterNv");
c1H.innerText = "waste diverted from landfills : ";
c1Nv.innerText = `${v1}`;
c1Ns.innerText += " +";
c1MT.innerText = "MT";
c1.appendChild(c1H);
c1.appendChild(c1N);
c1N.appendChild(c1Nv);
c1N.appendChild(c1Ns);
c1.appendChild(c1MT);

const c2 = document.createElement("div");
const c2H = document.createElement("div");
const c2N = document.createElement("div");
const c2Nv = document.createElement("div");
const c2Ns = document.createElement("div");
c2.classList.add("CC");
c2.classList.add("counter");
c2N.classList.add("CC");
c2N.classList.add("PG10");
c2H.classList.add("counterH");
c2Nv.classList.add("counterNv");
c2H.innerText = "waste workers (Safai Sathi) formalized : ";
c2Nv.innerText = `${v2}`;
c2Ns.innerText = `+`;
c2.appendChild(c2H);
c2.appendChild(c2N);
c2N.appendChild(c2Nv);
c2N.appendChild(c2Ns);

const c3 = document.createElement("div");
const c3H = document.createElement("div");
const c3N = document.createElement("div");
const c3Nv = document.createElement("div");
const c3Ns = document.createElement("div");
c3.classList.add("CC");
c3.classList.add("counter");
c3N.classList.add("CC");
c3N.classList.add("PG10");
c3H.classList.add("counterH");
c3Nv.classList.add("counterNv");
c3H.innerText = "presence in number of cities : ";
c3Nv.innerText = `${v3}`;
c3Ns.innerText = `+`;
c3.appendChild(c3H);
c3.appendChild(c3N);
c3N.appendChild(c3Nv);
c3N.appendChild(c3Ns);

const counters = document.getElementById("counters");
counters.classList.add("CC");
counters.appendChild(c1);
counters.appendChild(c2);
counters.appendChild(c3);

function animateCounter(element, start, end, duration) {
  let startTime = null;

  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.innerText = value;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCounters() {
  let time = 2500;
  if (isInViewport(counters)) {
    animateCounter(c1Nv, 0, 300000, time);
    animateCounter(c2Nv, 0, 2000, time);
    animateCounter(c3Nv, 0, 100, time);
    window.removeEventListener("scroll", startCounters);
  }
}

window.addEventListener("scroll", startCounters);

// United Nations  ================================================================

const unImg = document.getElementById("un-img");
const unImgPath = document.createElement("img");
unImgPath.src = isMobile ? "./assets/home/un-M.png" : "./assets/home/un-D.png";
unImgPath.style.width = "100%";
unImg.appendChild(unImgPath);

// Contact  ================================================================
const map = document.getElementById("map");
const iframe = document.createElement("iframe");
iframe.src =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3754831344595!2d72.90664927395025!3d19.047221852877804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c605df8ed44f%3A0xbe73730abf8cdd35!2sMahinder%20Chambers%20Premises%20Co-Op%20Society%20LTD.!5e0!3m2!1sen!2sin!4v1743078769280!5m2!1sen!2sin";
iframe.width = "340";
iframe.height = "220";
iframe.style.border = "0";
iframe.allowFullscreen = true;
iframe.loading = "lazy";
iframe.referrerPolicy = "no-referrer-when-downgrade";
map.appendChild(iframe);

const call = document.getElementById("contact-call");
const email = document.getElementById("contact-email");

call.addEventListener("click", () => {
  window.location.href = "tel:02241209120";
});
email.addEventListener("click", () => {
  window.location.href = "mailto:inquiry.sespl@gmail.com";
});

// Partners  ================================================================
const partners = document.getElementById("partners");
partners.classList.add("CC");
partners.classList.add("PG10");

if (isMobile) {
  partners.style.padding = "0px";
  let pathsss = [];
  for (let i = 1; i <= 11; i++) {
    const path = `./assets/Home/p${i}.png`;
    pathsss.push(path);
  }
  const carousel = createCarousel(pathsss, 0, 1000);
  partners.appendChild(carousel);
  
  const partnerImg = document.querySelector(".carousel-img");
  partnerImg.style.width = "26rem";
  partnerImg.style.height = "20rem";
}
else{
  for (let i = 1; i < 12; i++) {
    const partner = document.createElement("div");
    partner.classList.add("partner");
    partner.classList.add("CC");
    partner.classList.add("PG_0");
    const img = document.createElement("img");
    img.src = `./assets/home/p${i}.png`;
    partner.appendChild(img);
    partners.appendChild(partner);
  }
}
