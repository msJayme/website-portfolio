(function () {
  var btn = document.getElementById("copy"), el = document.getElementById("email");
  btn.addEventListener("click", function () {
    function sel() { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = "Selected, press copy"; }
    try { navigator.clipboard.writeText(el.textContent).then(function () { btn.textContent = "Copied"; }, sel); } catch (e) { sel(); }
    setTimeout(function () { btn.textContent = "Copy email"; }, 2200);
  });
})();
