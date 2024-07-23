var options = {
    strings: ['Science Engineering Student'],
    typeSpeed: 100,
    backSpeed: 100
};
var typed = new Typed('.typing', options);

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Downscroll code
        document.querySelector("header").classList.add("hide");
    } else {
        // Upscroll code
        document.querySelector("header").classList.remove("hide");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// Adjust scroll offset to account for fixed header
function scrollToSection(sectionId) {
    const offset = document.querySelector('.header').offsetHeight; // Adjust this value based on your header height
    const section = document.querySelector(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - offset;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

