// Selecting elements
let sidebarbtn = document.querySelector(".small-sidebar-btn");
let sidebar = document.querySelector(".side-bar");
let profilename = document.querySelector(".profile-name");
let menu = document.querySelectorAll(".menu");
let headings = sidebar.querySelectorAll("h3");

function toggleSidebar() {
    let icon = sidebarbtn.querySelector("i");
    let isCollapsed = icon.classList.contains("fa-chevron-left");

    icon.classList.toggle("fa-chevron-left", !isCollapsed);
    icon.classList.toggle("fa-chevron-right", isCollapsed);
    sidebar.style.width = isCollapsed ? "100px" : "250px";
    sidebarbtn.style.left = isCollapsed ? "80px" : "230px";
    profilename.style.display = isCollapsed ? "none" : "block";
    menu.forEach(element => element.style.display = isCollapsed ? "none" : "inline");
    headings.forEach(element => element.style.color = isCollapsed ? "transparent" : "#2d2d2d");
}

sidebarbtn.addEventListener("click", toggleSidebar);

function toggleElements(elements) {
    elements.forEach(element => {
        element.style.display = (element.style.display === "none" || element.style.display === "") ? "block" : "none";
    });
}

let option1 = document.querySelector(".option-1");
let hidElements1 = document.querySelectorAll(".hid1");
let option2 = document.querySelector(".option-2");
let hidElements2 = document.querySelectorAll(".hid2");
let option3 = document.querySelector(".option-3");
let hidElements3 = document.querySelectorAll(".hid3");

option1.addEventListener("click", () => toggleElements(hidElements1));
option2.addEventListener("click", () => toggleElements(hidElements2));
option3.addEventListener("click", () => toggleElements(hidElements3));
