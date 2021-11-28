// mengambil nav-link
const navLink = document.querySelectorAll(".nav-link");
const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelector(".about-link");
const artikelLink = document.querySelector(".artikel-link");

// apabila salah satu nav-link di klik, jalankan fungsi activate
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    activate(link);
  });
});

function activate(link) {
  const linkActive = document.querySelector(".active");
  if (!link.classList.contains("active")) {
    linkActive.classList.remove("active");
    link.classList.add("active");
  }
}

// memberikan class activate ketika sampai di bagiannya
window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  console.log(distance);
  if (distance < 750) {
    homeLink.classList.add("active");
    aboutLink.classList.remove("active");
    artikelLink.classList.remove("active");
  } else if ((distance >= 750) & (distance <= 1070)) {
    homeLink.classList.remove("active");
    aboutLink.classList.add("active");
    artikelLink.classList.remove("active");
  } else if (distance >= 1070) {
    homeLink.classList.remove("active");
    aboutLink.classList.remove("active");
    artikelLink.classList.add("active");
  }
});
