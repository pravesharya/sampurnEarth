window.addEventListener("resize", () => {
  window.location.reload();
});

console.log(
  `Root font size: ${getComputedStyle(document.documentElement).fontSize}`
);

function checkMobile() {
  let device = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log(" iPhone|iPad|iPod|Android : ", device);
  let orientation = window.innerWidth < window.innerHeight;
  console.log(" Width < Height : ", orientation);
}
checkMobile();
