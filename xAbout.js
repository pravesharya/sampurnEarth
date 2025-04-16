// VMV =======================================================

document.addEventListener("DOMContentLoaded", () => {
  const vision = document.getElementById("vision-H");
  const mission = document.getElementById("mission-H");
  const value = document.getElementById("value-H");

if (window.innerWidth < window.innerHeight) {
  console.log("Mobile device");
  vision.style.transform = "rotate(0deg)";
  mission.style.transform = "rotate(0deg)";
  value.style.transform = "rotate(0deg)";
}

// Key People =======================================================

const key_1 = document.getElementById("key_1");
const key_2 = document.getElementById("key_2");
const key_3 = document.getElementById("key_3");
const key_4 = document.getElementById("key_4");

const key_Overlay = document.getElementById("key_Overlay");
const key_Detailed = document.getElementById("key_Detailed");
const kd_Img = document.getElementById("kd_Img");
const kd_Name = document.getElementById("kd_Name");
const kd_Role = document.getElementById("kd_Role");
const kd_Detail = document.getElementById("kd_Detail");

key_1.addEventListener("click", () => {
  keyPersonPopUp(0);
});
key_2.addEventListener("click", () => {
  keyPersonPopUp(1);
});
key_3.addEventListener("click", () => {
  keyPersonPopUp(2);
});
key_4.addEventListener("click", () => {
  keyPersonPopUp(3);
});

let people = [
  {
    name: "Mr. Debartha B",
    title: "Co-founder and Director",
    description:
      "Debarth is a techie by education and a social entrepreneur by heart, is a B.Tech in Engineering from West Bengal University of Technology and completed his Master's degree in Social Entrepreneurship from reputed Tata Institute of Social Science (TISS). He is listed in prestigious “Forbes 30 under 30 Social Entrepreneurs from Asia” in the year 2017. Debarth had hands on experience in IT and Business Development and is looking after Business Development, Client relations, Account management.",
    image: "./assets/xAbout/key01.png",
  },
  {
    name: "Mr. Ritvik Rao",
    title: "Co-founder and Director",
    description:
      "Ritvik completed his Master's degree in Social Entrepreneurship from reputed Tata Institute of Social Science (TISS). Ritvik heads marketing and branding in Sampurnearth.",
    image: "./assets/xAbout/key02.png",
  },
  {
    name: "Mr.Jayant N",
    title: "Co-founder and Director",
    description:
      "Jayant completed his B.TECH in Electronics & Communications from National Institute of Technology, Karnataka and completed his Master's degree in Social Entrepreneurship from reputed Tata Institute of Social Science (TISS). Jayant had hands on experience in research and operation is heading Finance, HR, backend Operations in Sampurnearth",
    image: "./assets/xAbout/key03.png",
  },
  {
    name: "Ms. Zahra M",
    title: "Director (Social Support Department)",
    description:
      "Graduate of Research Master in Urban Studies from University of Amsterdam, with a thesis on formalization of informal waste workers in Mumbai. Head of the Social Support Department, focusing on formalization, integration, and collectivisation of waste workers throughout our supply chain. Enthusiastic about an inclusive waste management where no one is left behind.",
    image: "./assets/xAbout/key04.png",
  },
];

function keyPersonPopUp(x) {
  kd_Name.innerHTML = people[x].name;
  kd_Role.innerHTML = people[x].title;
  kd_Detail.innerHTML = people[x].description;
  kd_Img.src = people[x].image;

  
  key_Overlay.style.display = "block";
  setTimeout(() => {
    console.log("key_Overlay height:", key_Overlay.offsetHeight);
    console.log("key_Detailed height:", key_Detailed.offsetHeight);
    const diff = key_Overlay.offsetHeight - key_Detailed.offsetHeight;
    console.log("diff:", diff);
    const newTop = diff / 2 + 40;
    console.log("diff/2 + 40 :", newTop);
    key_Detailed.style.top = `${newTop}px`;
  }, 50);
}

  kd_close.addEventListener("click", () => {
    key_Detailed.style.position = "relative";
    key_Detailed.style.top = "100%";
    key_Overlay.style.display = "none";
  });
});


// Awards ++ =======================================================

// const award_1 = document.getElementById("award_1");
// const award_2 = document.getElementById("award_2");
// const award_3 = document.getElementById("award_3");
// const award_4 = document.getElementById("award_4");

// award_1.addEventListener("click", () => {
//     window.open("http://www.sampurnearth.com/award_recognistion.html#", "_blank");
// });
// award_2.addEventListener("click", () => {
//     window.open("http://www.sampurnearth.com/award_recognistion.html#", "_blank");
// });
// award_3.addEventListener("click", () => {
//     window.open("http://www.sampurnearth.com/award_recognistion.html#", "_blank");
// });
// award_4.addEventListener("click", () => {
//     window.open("http://paper.hindustantimes.com/epaper/viewer.aspx.cms", "_blank");
// });


// Investors =======================================================

// const investors = document.querySelector(".investor-Names");
// investors.addEventListener("mouseover", () => {
//   investors.classList.add("love");

// });

// investors.addEventListener("mouseout", () => {
//   investors.classList.remove("love");
// });