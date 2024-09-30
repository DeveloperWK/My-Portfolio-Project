var closeFunction = function () {
    var close;
    close = document.getElementById("mySidebar");
    close.style.width = "0";
};
var barClick = function () {
    var bar, sideNav;
    sideNav = document.getElementById("mySidebar");
    bar = document.querySelector(".bar__icon");
    sideNav.style.width = "200px";
    sideNav.style.zIndex = "1000";
};
var typed = new Typed(".typing", {
    strings: [
        "Web Developer.",
        "Web Designer.",
        "Freelancer.",
        "Node.JS Programmer.",
        "Student.",
        "MERN Stack Developer.",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
var loder = document.querySelector(".preloader");
var preloader = function () {
    loder.style.display = "none";
};
window.addEventListener("load", preloader);
