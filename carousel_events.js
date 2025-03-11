import { createCarousel } from "./carousel.js";

const events = document.getElementById("events");

let pathsss = [];
for (let i = 1; i <= 4; i++) {
    const path = `./assets/events/img (${i}).jpg`;
    pathsss.push(path);
}
// console.log(pathsss);

let captionsss = ["Awareness session - CSMT Station", "Awareness session - Churchgate Station", "Awareness session - Dadar Station", "Awareness session - Andheri Station"];

const carousel = createCarousel(pathsss,captionsss);
events.appendChild(carousel);