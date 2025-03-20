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
c1H.classList.add("counterH");
c1N.classList.add("CC");
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
c2H.classList.add("counterH");
c2N.classList.add("CC");
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
c3H.classList.add("counterH");
c3N.classList.add("CC");
c3Nv.classList.add("counterNv");
c3H.innerText = "presence in number of cities : " ;
c3Nv.innerText = `${v3}`;
c3Ns.innerText = `+`;
c3.appendChild(c3H);
c3.appendChild(c3N);
c3N.appendChild(c3Nv);
c3N.appendChild(c3Ns);

const counters = document.getElementById("counters");
counters.appendChild(c1);
counters.appendChild(c2);
counters.appendChild(c3);
counters.style.gap = isMobile ? "1rem" : "2rem";

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
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startCounters() {
  let time=2500;
  if (isInViewport(counters)) {
    animateCounter(c1Nv, 0, 300000, time);
    animateCounter(c2Nv, 0, 2000, time);
    animateCounter(c3Nv, 0, 100, time);
    window.removeEventListener("scroll", startCounters);
  }
}

window.addEventListener("scroll", startCounters);

const unImgDiv = document.getElementById("un-img");
const unImg = document.createElement("img");
unImg.src = (isMobile)? "./assets/un/un-M.png" : "./assets/un/un-D.png";
unImg.style.width = "100%";
unImgDiv.appendChild(unImg);