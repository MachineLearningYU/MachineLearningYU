// by Ali
let darkLightModeButton = document.getElementById("darkModeSwitcher");

let darkMode = localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") : "false";

if (darkMode === "true"){
    document.getElementById("root").setAttribute("data-theme", "dark");
    darkLightModeButton.checked = true;
}

darkLightModeButton.addEventListener("change", function (event) {
    if (event.target.checked){
        localStorage.setItem("darkMode", "true");
        document.getElementById("root").setAttribute("data-theme", "dark");

    }else{
        localStorage.setItem("darkMode", "false");
        document.getElementById("root").setAttribute("data-theme", "light");
    }
});
