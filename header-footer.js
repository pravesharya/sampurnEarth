let currentPage = document.getElementById("currentPage").innerHTML;
console.log("Current page : ", currentPage);

const header = document.getElementById("header");
const footer = document.getElementById("footer");

const isMobile =
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
  window.innerWidth < window.innerHeight;

header.classList.add("CC");
header.classList.add("HF");

const logoH = document.createElement("div");
const logoH_Img = document.createElement("img");

function createHeader() {
  logoH_Img.src = "./assets/logo-h.png";
  logoH_Img.alt = "Company Logo";
  logoH.appendChild(logoH_Img);
  logoH.classList.add("pointer");
  if(isMobile) logoH_Img.style.width = "80%";
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

    page.classList.add("CC");
    if (isMobile) {
      page.classList.add("pageM");
    } else {
      page.classList.add("page");
    }
    links.appendChild(page);
  }

  if (isMobile) {
    links.style.width = "100%";
    const panel = document.createElement("div");
    panel.classList.add("CC");
    panel.classList.add("side-panel");
    panel.style.right = "-100%";

    const overlay = document.createElement("div");
    const menuBtn = document.createElement("div");
    const menuBtnImg = document.createElement("img");
    menuBtnImg.src = "./assets/menu.svg";
    menuBtn.appendChild(menuBtnImg);
    // menuBtn.innerHTML = "M";
    menuBtn.classList.add("CC");
    menuBtn.classList.add("menu-btn");
    menuBtn.addEventListener("click", () => {
      panel.style.right = "0";
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);
    });
    header.appendChild(menuBtn);

    const closeBtn = document.createElement("div");
    const closeBtnImg = document.createElement("img");
    closeBtnImg.src = "./assets/close-white.svg";
    closeBtnImg.style.width = "60%";
    closeBtn.appendChild(closeBtnImg);

    // closeBtn.innerHTML = "X";
    closeBtn.classList.add("CC");
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
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

  if (isMobile) {
    document.getElementById(currentPage).style.backgroundColor = "var(--green)";
  } else {
    document.getElementById(currentPage).style.borderBottom =
      "var(--green) 4px solid";
    document.getElementById(currentPage).style.color = "var(--green)";
  }

  document.getElementById("home").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.getElementById("services").addEventListener("click", () => {
    window.location.href = "xServices.html";
  });

  document.getElementById("projects").addEventListener("click", () => {
    window.location.href = "xProjects.html";
  });

  document.getElementById("media").addEventListener("click", () => {
    window.location.href = "xMedia.html";
  });

  document.getElementById("foundation").addEventListener("click", () => {
    window.location.href = "xFoundation.html";
  });

  document.getElementById("careers").addEventListener("click", () => {
    window.location.href = "xCareers.html";
  });

  document.getElementById("about").addEventListener("click", () => {
    window.location.href = "xAbout.html";
  });
}
createHeader();

// Footer ============================================================================

const logoF = document.createElement("div");
const logoF_Img = document.createElement("img");

function createFooter(params) {
  logoF_Img.src = isMobile ? "./assets/logo-fM.png" : "./assets/logo-f.png";
  logoF_Img.alt = "Company Logo";
  logoF_Img.style.width = "80%";
  logoF.appendChild(logoF_Img);
  logoF.classList.add("pointer");
  footer.appendChild(logoF);

  // copyright = document.createElement("div");
  // copyright.innerHTML = "All rights reserved. 2025";
  // footer.appendChild(copyright);

  const socials = document.createElement("div");
  socials.classList.add("CC");
  socials.style.gap = "6px";

  const socialsList = [
    "youtube",
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
  ];
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
}
createFooter();
// ============================================================================

logoH.addEventListener("click", () => {
  window.location.href = "index.html";
});
logoF.addEventListener("click", () => {
  window.location.href = "index.html";
});
