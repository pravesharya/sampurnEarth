const epr = document.getElementById("epr");
const pcr = document.getElementById("pcr");
const dwm = document.getElementById("dwm");
const bio = document.getElementById("bio");
const ssa = document.getElementById("ssa");

const epr_Call = document.getElementById("call-epr");
const pcr_Call = document.getElementById("call-pcr");
const dwm_Call = document.getElementById("call-dwm");
const bio_Call = document.getElementById("call-bio");
const ssa_Call = document.getElementById("call-ssa");

epr_Call.addEventListener("click", () => {
  window.location.href = "tel:8600708629";
});
pcr_Call.addEventListener("click", () => {
  window.location.href = "tel:8600708629";
});
dwm_Call.addEventListener("click", () => {
  window.location.href = "tel:9372777623";
});
bio_Call.addEventListener("click", () => {
  window.location.href = "tel:9096039586";
});
ssa_Call.addEventListener("click", () => {
  window.location.href = "tel:7887551775 ";
});
