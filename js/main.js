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
