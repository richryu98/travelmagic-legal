(function () {
  function set(lang) {
    document.body.classList.toggle("show-ko", lang === "ko");
    var b = document.querySelectorAll(".toggle button");
    for (var i = 0; i < b.length; i++) b[i].classList.toggle("on", b[i].getAttribute("data-lang") === lang);
    document.documentElement.lang = lang;
    try { localStorage.setItem("tm_lang", lang); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem("tm_lang"); } catch (e) {}
  var initial = saved || (((navigator.language || "").toLowerCase().indexOf("ko") === 0) ? "ko" : "en");
  document.addEventListener("DOMContentLoaded", function () {
    set(initial);
    var b = document.querySelectorAll(".toggle button");
    for (var i = 0; i < b.length; i++) {
      b[i].addEventListener("click", function () { set(this.getAttribute("data-lang")); });
    }
  });
})();
