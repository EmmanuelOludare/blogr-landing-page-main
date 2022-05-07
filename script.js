const menuBtn = document.querySelector('#Menu');
const menuBar = document.querySelector('.Sitemap-Signup-Login');

menuBtn.addEventListener('click',() => {
    menuBar.classList.toggle('toggle');
    if (menuBtn.src === "http://127.0.0.1:5500/images/icon-hamburger.svg") {
        menuBtn.src = "images/icon-close.svg";
    } else {
        menuBtn.src = "images/icon-hamburger.svg";
    }
});
