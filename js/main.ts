declare var Typed: any;

const closeFunction = () => {
  let close: HTMLElement | null;
  close = document.getElementById("mySidebar");
  close!.style.width = "0";
};

const barClick = () => {
  let bar: HTMLElement | null, sideNav: HTMLElement | null;
  sideNav = document.getElementById("mySidebar");
  bar = document.querySelector(".bar__icon");
  sideNav!.style.width = "200px";
  sideNav!.style.zIndex = "1000";
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

const loder = document.querySelector<HTMLElement>(".preloader");
const preloader = () => {
  loder!.style.display = "none";
};
window!.addEventListener("load", preloader);
