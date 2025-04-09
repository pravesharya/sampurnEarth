// Service Detailed ==============================================================

const epr = document.getElementById("epr");
const pcr = document.getElementById("pcr");
const dwm = document.getElementById("dwm");
const bio = document.getElementById("bio");
const ssa = document.getElementById("ssa");

function openPage(page) {
  window.open(`./services/${page}.html`, "_blank");
}

epr.addEventListener("click", () => {
  openPage("epr");
});
pcr.addEventListener("click", () => {
  openPage("pcr");
});
dwm.addEventListener("click", () => {
  openPage("dwa");
});
bio.addEventListener("click", () => {
  openPage("bio");
});
ssa.addEventListener("click", () => {
  openPage("ssa");
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

epr_Call.addEventListener("click", () => {
  makeCall(8600708629);
});
pcr_Call.addEventListener("click", () => {
  makeCall(8600708629);
});
dwm_Call.addEventListener("click", () => {
  makeCall(9372777623);
});
bio_Call.addEventListener("click", () => {
  makeCall(9096039586);
});
ssa_Call.addEventListener("click", () => {
  makeCall(7887551775);
});
