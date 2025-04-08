import { createCarousel } from "./carousel.js";

const TMsss = document.getElementById("testimonials");

let pathsss = [];
for (let i = 1; i <= 11; i++) {
    const path = `./assets/Home/p${i}.png`;
    pathsss.push(path);
}
// console.log(pathsss);

const carousel = createCarousel(pathsss,captionsss,1000);
TMsss.appendChild(carousel);




