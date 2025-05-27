const bintix = document.getElementById("bintix");
const bisleri = document.getElementById("bisleri");
const plastic = document.getElementById("plastic");
const bicholim = document.getElementById("bicholim");
const scrapyard = document.getElementById("scrapyard");
const goa = document.getElementById("goa");
const nagpur = document.getElementById("nagpur");

function openPage(page) {
  window.location.href = `./projects/${page}.html`;
}
function openPageNT(page) {
  window.open(`./projects/${page}.html`, "_blank");
}

bintix.addEventListener("click", () => {
  openPage("bintix");
});
bintix.addEventListener("contextmenu", () => {
  openPageNT("bintix");
});

bisleri.addEventListener("click", () => {
  openPage("bisleri");
});
bisleri.addEventListener("contextmenu", () => {
  openPageNT("bisleri");
});

plastic.addEventListener("click", () => {
  openPage("pwrf");
});
plastic.addEventListener("contextmenu", () => {
  openPageNT("pwrf");
});

bicholim.addEventListener("click", () => {
  openPage("bicholim");
});
bicholim.addEventListener("contextmenu", () => {
  openPageNT("bicholim");
});

scrapyard.addEventListener("click", () => {
  openPage("scrapyard");
});
scrapyard.addEventListener("contextmenu", () => {
  openPageNT("scrapyard");
});

goa.addEventListener("click", () => {
  openPage("goa");
});
goa.addEventListener("contextmenu", () => {
  openPageNT("goa");
});

nagpur.addEventListener("click", () => {
  openPage("nagpur");
});
nagpur.addEventListener("contextmenu", () => {
  openPageNT("nagpur");
});
