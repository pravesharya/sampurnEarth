let currentPage = document.getElementById("currentPage").innerHTML;
console.log("Current page : ",currentPage);

const header = document.getElementById("header");
const footer = document.getElementById("footer");

const isMobile =
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
  window.innerWidth < window.innerHeight;

header.classList.add("CC");
header.classList.add("HF");

const logoH = document.createElement("div");
const logoImg1 = document.createElement("img");
logoImg1.src = "./assets/logo-h.png";
logoImg1.alt = "Company Logo";
logoH.appendChild(logoImg1);
logoH.classList.add("pointer");
header.appendChild(logoH);

const links = document.createElement("div");
const pages = [
  "Home",
  "Services",
  "Projects",
  "Media Recognition",
  "Foundation",
  "Careers",
  "About Us",
];
for (let i = 0; i < pages.length; i++) {
  const page = document.createElement("div");
  page.innerHTML = pages[i];
  // page.id = pages[i].toLowerCase().replace(/\s+/g, "-");
  page.id = pages[i].toLowerCase().split(" ")[0];
  console.log(page.id);
  
  if (isMobile) {
    page.classList.add("CC");
    page.classList.add("pageM");
  } else {
    page.classList.add("page");
  }
  links.appendChild(page);
}

if (isMobile) {
  const panel = document.createElement("div");
  panel.classList.add("CC");
  panel.classList.add("side-panel");
  panel.style.right = "-100%";

  const menuBtn = document.createElement("div");
  menuBtn.innerHTML = "M";
  menuBtn.classList.add("CC");
  menuBtn.classList.add("menu-btn");
  menuBtn.addEventListener("click", () => {
    panel.style.right = "0";
  });
  header.appendChild(menuBtn);

  const closeBtn = document.createElement("div");
  closeBtn.innerHTML = "X";
  closeBtn.classList.add("CC");
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", () => {
    panel.style.right = "-100%";
  });
  panel.appendChild(closeBtn);
  panel.appendChild(links);

  document.body.appendChild(panel);
} else {
  links.classList.add("CC");
  links.style.gap = "10px";
  header.appendChild(links);
}

document.getElementById(currentPage).style.borderBottom = "var(--green) 4px solid";

document.getElementById("home").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.getElementById("services").addEventListener("click", () => {
  window.location.href = "_services.html";
});

document.getElementById("projects").addEventListener("click", () => {
  window.location.href = "_projects.html";
});

document.getElementById("media").addEventListener("click", () => {
  window.location.href = "_media.html";
});

document.getElementById("foundation").addEventListener("click", () => {
  window.location.href = "_foundation.html";
});

document.getElementById("careers").addEventListener("click", () => {
  window.location.href = "_careers.html";
});

document.getElementById("about").addEventListener("click", () => {
  window.location.href = "_about.html";
});

// Footer ============================================================================

const logoF = document.createElement("div");
const logoImg2 = document.createElement("img");
logoImg2.src = isMobile ? "./assets/logo-fM.png" : "./assets/logo-f.png";
logoImg2.alt = "Company Logo";
logoImg2.style.width = "80%";
logoF.appendChild(logoImg2);
logoF.classList.add("pointer");
footer.appendChild(logoF);

// copyright = document.createElement("div");
// copyright.innerHTML = "All rights reserved. 2025";
// footer.appendChild(copyright);

const socials = document.createElement("div");
socials.classList.add("CC");
socials.style.gap = "6px";

const socialsList = ["youtube", "facebook", "twitter", "instagram", "linkedin"];
for (let i = 0; i < socialsList.length; i++) {
  const social = document.createElement("div");
  social.src = `./assets/${socialsList[i]}.png`;
  social.alt = socialsList[i];
  social.id = socialsList[i];
  social.classList.add("CC");
  social.classList.add("social-footer");
  social.classList.add("pointer");
  socials.appendChild(social);
}
footer.appendChild(socials);

document.getElementById("youtube").addEventListener("click", () => {
  window.open("https://www.youtube.com", "_blank");
});

document.getElementById("facebook").addEventListener("click", () => {
  window.open("https://www.youtube.com", "_blank");
});

document.getElementById("twitter").addEventListener("click", () => {
  window.open("https://www.youtube.com", "_blank");
});

document.getElementById("instagram").addEventListener("click", () => {
  window.open("https://www.youtube.com", "_blank");
});

document.getElementById("linkedin").addEventListener("click", () => {
  window.open("https://www.youtube.com", "_blank");
});

let hfPadding = isMobile ? "0 20px" : "0 40px";
header.style.padding = hfPadding;
footer.style.padding = hfPadding;

// ============================================================================

logoH.addEventListener("click", () => {
  window.location.href = "index.html";
});
logoF.addEventListener("click", () => {
  window.location.href = "index.html";
});

