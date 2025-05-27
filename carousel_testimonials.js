import { createCarousel } from "./carouselX.js";

const TMsss = document.getElementById("testimonials");

let pathsss = [];
for (let i = 1; i <= 4; i++) {
    const path = (isMobile)? `./assets/xCareer/tm_M_0${i}.png` : `./assets/xCareer/tm_L_0${i}.png`;
    pathsss.push(path);
}
// console.log(pathsss);

let captionsss = ["Prajakta  Tambe - Sr. Officer Accounts ", "Prasanna Rout - Sr. Manager Operations", "Saurabh Pitale - Sr Executive Accounts", "Suraj Barma - Executive Dry waste Operations "];

const carousel = createCarousel(pathsss,captionsss,5000);
TMsss.appendChild(carousel);




