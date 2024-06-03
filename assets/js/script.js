'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function() {
  // Form gönderildiğinde
  document.querySelector(".hero-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    // Formdaki değerleri al
    var carModel = document.getElementById("input-1").value;
    var monthlyPay = document.getElementById("input-2").value;
    var year = document.getElementById("input-3").value;

    // Burada form verilerini kullanarak istediğiniz işlemleri yapabilirsiniz, örneğin bir arama yapabilir veya veritabanına kaydedebilirsiniz.

    // Örneğin, form verilerini konsola yazdıralım
    console.log("Car Model:", carModel);
    console.log("Monthly Pay:", monthlyPay);
    console.log("Year:", year);

    // Burada istediğiniz işlemleri gerçekleştirebilirsiniz, örneğin AJAX kullanarak bir arama yapabilirsiniz.
  });
});

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const searchButton = document.querySelector(".btn");
        const featuredCarSection = document.getElementById("featured-car");

        searchButton.addEventListener("click", function(event) {
            // Butona tıklanıldığında varsayılan form davranışını engelle
            event.preventDefault();

            // Araçlarımız bölümüne yönlendir
            featuredCarSection.scrollIntoView({ behavior: "smooth" });
        });
    });
</script>

