var menuicon = document.querySelector(".menu-icon");
var navbar = document.querySelector(".nav-bar");
var ullist = document.querySelector("ul");

function openmenu() {
    navbar.style.height = "100vh";
    ullist.style.opacity = "1";
    menuicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg>';
    menuicon.removeEventListener("click", openmenu);
    menuicon.addEventListener("click", closemenu);
}

function closemenu() {
    navbar.style.height = "0vh";
    ullist.style.opacity = "0";
    menuicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>';
    menuicon.removeEventListener("click", closemenu);
    menuicon.addEventListener("click", openmenu);
}

menuicon.addEventListener("click", openmenu);
