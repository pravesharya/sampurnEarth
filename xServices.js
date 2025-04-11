// Service Detailed ==============================================================

const epr = document.getElementById("epr");
const pcr = document.getElementById("pcr");
const dwm = document.getElementById("dwm");
const bio = document.getElementById("bio");
const ssa = document.getElementById("ssa");

function openPage(page) {
  window.location.href = `./services/${page}.html`;
}
function openPageNT(page) {
  window.open(`./services/${page}.html`, "_blank");
}

epr.addEventListener("click", () => {
  openPage("epr");
});
epr.addEventListener("contextmenu", () => {
  openPageNT("epr");
});

pcr.addEventListener("click", () => {
  openPage("pcr");
});
pcr.addEventListener("contextmenu", () => {
  openPageNT("pcr");
});

dwm.addEventListener("click", () => {
  openPage("dwm");
});
dwm.addEventListener("contextmenu", () => {
  openPageNT("dwm");
});

bio.addEventListener("click", () => {
  openPage("bio");
});
bio.addEventListener("contextmenu", () => {
  openPageNT("bio");
});

ssa.addEventListener("click", () => {
  openPage("ssa");
});
ssa.addEventListener("contextmenu", () => {
  openPageNT("ssa");
});

// Contact ==============================================================

const epr_Call = document.getElementById("call-epr");
const pcr_Call = document.getElementById("call-pcr");
const dwm_Call = document.getElementById("call-dwm");
const bio_Call = document.getElementById("call-bio");
const ssa_Call = document.getElementById("call-ssa");

function makeCall(number) {
  window.location.href = `tel:${number}`;
}

epr_Call.addEventListener("click", (event) => {
  event.stopPropagation();
  makeCall(8600708629);
});
epr_Call.addEventListener("contextmenu", (event) => {
  event.stopPropagation();
});

pcr_Call.addEventListener("click", (event) => {
  event.stopPropagation();
  makeCall(8600708629);
});
pcr_Call.addEventListener("contextmenu", (event) => {
  event.stopPropagation();
});

dwm_Call.addEventListener("click", (event) => {
  event.stopPropagation();
  makeCall(9920113470); // Ritvik
});
dwm_Call.addEventListener("contextmenu", (event) => {
  event.stopPropagation();
});

bio_Call.addEventListener("click", (event) => {
  event.stopPropagation();
  makeCall(9096039586); // Debartha
});
bio_Call.addEventListener("contextmenu", (event) => {
  event.stopPropagation();
});

ssa_Call.addEventListener("click", (event) => {
  event.stopPropagation();
  makeCall(7887551775);
});
ssa_Call.addEventListener("contextmenu", (event) => {
  event.stopPropagation();
});

