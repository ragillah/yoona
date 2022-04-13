// deklarasi variabel
const html = document.querySelector("html");
const navbar = document.querySelector("#navbar");
const navWrapper = document.querySelector("nav");
const navToggler = document.querySelector("#nav-toggler");
const navMenu = document.querySelector("#nav-menu");
const themeToggler = document.querySelector("#theme-toggler");
const fixedNav = navbar.offsetTop;
const topBtn = document.querySelector("#btn-to-top");

// tampilkan/sembunyikan navigasi, jika user meng-klik icon hamburger
navToggler.addEventListener("click", function () {
   navToggler.classList.toggle("toggler-active");
   navMenu.classList.toggle("hidden");
});

// sembunyikan navigasi, jika user meng-klik area manapun
window.addEventListener("click", function (e) {
   if (e.target != navToggler && e.target != navMenu) {
      navToggler.classList.remove("toggler-active");
      navMenu.classList.add("hidden");
   }
});

// tambahkan class 'dark' dan simpan cookie di local storage, saat user mengubah tema warna ke dark mode
// tambahkan class 'light' dan simpan cookie di local storage, saat user mengubah tema warna ke light mode
themeToggler.addEventListener("click", function () {
   if (themeToggler.checked) {
      html.classList.add("dark");
      localStorage.theme = "dark";
   } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
   }
});

// Biarkan toggle dark mode tetap aktif, jika sedang menggunakan dark mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
   themeToggler.checked = true;
} else {
   themeToggler.checked = false;
}

// tambahkan class 'nav-fixed' saat user melakukan scroll halaman, dan hapus class 'sm:py-8'
// jika tidak, maka biarkan seperti semula
window.onscroll = function () {
   if (window.pageYOffset > fixedNav) {
      navbar.classList.add("nav-fixed");
      navWrapper.classList.remove("sm:py-8");
      topBtn.classList.remove("hidden");
   } else {
      navbar.classList.remove("nav-fixed");
      navWrapper.classList.add("sm:py-8");
      topBtn.classList.add("hidden");
   }
};

// kembali ke paling atas halaman
function goToTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}

// deklarasi lightbox untuk memunculkan slider saat gambar pada gallery di klik
const lightbox = GLightbox({
   touchNavigation: true,
   loop: true,
});
