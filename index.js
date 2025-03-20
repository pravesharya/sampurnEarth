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
c1.classList.add("CC");
c1.classList.add("counter");
c1.innerText = "waste diverted from landfills : </br>" + v1;

const c2 = document.createElement("div");
c2.classList.add("CC");
c2.classList.add("counter");
c2.innerText = "waste workers(Safai Sathi) formalized : " + v2;

const c3 = document.createElement("div");
c3.classList.add("CC");
c3.classList.add("counter");
c3.innerText = "presence in number of cities : "  + v3;

const counters = document.getElementById("counters");
counters.appendChild(c1);
counters.appendChild(c2);
counters.appendChild(c3);
counters.style.gap = isMobile ? "1rem" : "2rem";


