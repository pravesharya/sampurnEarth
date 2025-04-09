const isMobile =
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
  window.innerWidth < window.innerHeight;

function createCarousel(pathsss, captionsss, time = 2500) {
  let totalImages = pathsss.length;

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  carousel.classList.add("CC");

  const row1 = document.createElement("div");
  const row2 = document.createElement("div");

  row1.classList.add("carousel-r1");
  row1.classList.add("CC");
  row2.classList.add("carousel-r2");
  row2.classList.add("CC");
  row2.classList.add("PG_0");

  const carouselP = document.createElement("div");
  const carouselN = document.createElement("div");
  const carouselP_img = document.createElement("img");
  const carouselN_img = document.createElement("img");
  carouselP_img.src = "./assets/carousel/left.svg";
  carouselN_img.src = "./assets/carousel/right.svg";
  carouselP.appendChild(carouselP_img);
  carouselN.appendChild(carouselN_img);

  carouselP.classList.add("carousel-nav");
  carouselP.classList.add("CC");
  carouselN.classList.add("carousel-nav");
  carouselN.classList.add("CC");

  const carouselMid = document.createElement("div");
  const carouselMidImg = document.createElement("div");
  const carouselMidCap = document.createElement("div");
  const carouselDots = document.createElement("div");
  carouselDots.classList.add("CC");
  carouselDots.classList.add("carousel-dots");

  let images = [];
  let dots = [];
  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement("img");
    img.src = pathsss[i];
    if (isMobile) img.style.width = "100%";
    images.push(img);

    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    dots.push(dot);
  }

  let currentIndex = 0;
  carouselMidImg.appendChild(images[currentIndex]);
  carouselMidImg.classList.add("carousel-img");
  carouselMidImg.classList.add("CC");
  if (captionsss != 0) {
    carouselMidCap.innerHTML = captionsss[currentIndex];
    carouselMidCap.classList.add("carousel-caption");
    carouselMidCap.classList.add("CC");
  }
  else{
    carouselMidCap.style.display = "none";
  }
  refreshCarousel(currentIndex);

  carouselMid.appendChild(carouselMidImg);
  carouselMid.appendChild(carouselMidCap);
  carouselMid.classList.add("CC");
  carouselMid.classList.add("carousel-mid");

  row1.appendChild(carouselP);
  row1.appendChild(carouselMid);
  row1.appendChild(carouselN);
  row2.appendChild(carouselDots);

  carousel.appendChild(row1);
  carousel.appendChild(row2);

  carouselN.addEventListener("click", nextImage);
  carouselP.addEventListener("click", prevImage);

  function refreshCarousel(currentIndex) {
    for (let i = 0; i < totalImages; i++) {
      dots[i].style.backgroundColor = "white";
      dots[currentIndex].style.backgroundColor = "var(--green)";
      carouselDots.appendChild(dots[i]);
    }
    carouselMidCap.innerHTML = captionsss[currentIndex];
  }

  function nextImage() {
    currentIndex += 1;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    carouselMidImg.removeChild(carouselMidImg.firstChild);
    carouselMidImg.appendChild(images[currentIndex]);
    refreshCarousel(currentIndex);
  }

  function prevImage() {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    }
    carouselMidImg.removeChild(carouselMidImg.firstChild);
    carouselMidImg.appendChild(images[currentIndex]);
    refreshCarousel(currentIndex);
  }

  setInterval(() => {
    nextImage();
  }, time);

  return carousel;
}

export { createCarousel };
