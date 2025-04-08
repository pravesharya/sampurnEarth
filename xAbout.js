// VMV =======================================================

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
  keyPerson(0);
});
key_2.addEventListener("click", () => {
  keyPerson(1);
});
key_3.addEventListener("click", () => {
  keyPerson(2);
});
key_4.addEventListener("click", () => {
  keyPerson(3);
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
function keyPerson(x) {
  
  kd_Name.innerHTML = people[x].name;
  kd_Role.innerHTML = people[x].title;
  kd_Detail.innerHTML = people[x].description;
  kd_Img.src = people[x].image;

  const pH = key_Overlay.offsetHeight;
  const cH = key_Detailed.offsetHeight;
  const newTop = pH - cH; 
  console.log(pH, cH, newTop);
  
  key_Overlay.style.display = "block";
  setTimeout(() => {
    // key_Detailed.style.top = `${newTop}px`;
    // (isMobile)? key_Detailed.style.bottom = `20%`: key_Detailed.style.bottom = "25%";
    
    console.log(window.innerWidth);
    if(window.innerWidth <= "540"){
      key_Detailed.style.top = "20%";
    } 
    else if(window.innerWidth > "540" && window.innerWidth <= "1024" ){
      key_Detailed.style.top = "30%";
    }
  }, 50);
}

const kd_close = document.getElementById("kd_close");
kd_close.addEventListener("click", () => {
  key_Detailed.style.position = "relative";
  key_Detailed.style.top = "100%";
  key_Overlay.style.display = "none";
});


// Awards ++ =======================================================

const award_1 = document.getElementById("award_1");
const award_2 = document.getElementById("award_2");
const award_3 = document.getElementById("award_3");
const award_4 = document.getElementById("award_4");

award_1.addEventListener("click", () => {
    window.open("http://www.sampurnearth.com/award_recognistion.html#", "_blank");
});
award_2.addEventListener("click", () => {
    window.open("http://www.sampurnearth.com/award_recognistion.html#", "_blank");
});
award_3.addEventListener("click", () => {
    window.open("http://www.sampurnearth.com/award_recognistion.html#", "_blank");
});
award_4.addEventListener("click", () => {
    window.open("http://paper.hindustantimes.com/epaper/viewer.aspx.cms", "_blank");
});