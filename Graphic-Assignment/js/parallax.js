function parallaxScroll() {
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = 0.2;

    var newY = m * t;

    para.style.transform = "translateY(" + newY + "px)";
}

// Attach the parallaxScroll function to the window's scroll event
window.addEventListener("scroll", parallaxScroll);
