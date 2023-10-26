// by Ali
let darkLightModeButton = document.getElementById("darkModeSwitcher");

let darkMode = localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") : "false";

if (darkMode === "true") {
    document.getElementById("root").setAttribute("data-theme", "dark");
    darkLightModeButton.checked = true;
}

darkLightModeButton.addEventListener("change", function (event) {
    if (event.target.checked) {
        localStorage.setItem("darkMode", "true");
        document.getElementById("root").setAttribute("data-theme", "dark");

    } else {
        localStorage.setItem("darkMode", "false");
        document.getElementById("root").setAttribute("data-theme", "light");
    }
});



// for scrolling to the link but few pixels up because of the fixed navbar

const getOffsetTop = function(element) {
    if (!element) return 0;
    return getOffsetTop(element.offsetParent) + element.offsetTop;
};

let navbarHeight = document.getElementById("navbar").offsetHeight;
function scrollToLink(link) {
    let linkPosition = getOffsetTop(document.getElementById(link));
    window.scrollTo({
        top: linkPosition - navbarHeight
    });
}

// event listener for the navbar links
let navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        scrollToLink(link.getAttribute("href").slice(1));
    });
});