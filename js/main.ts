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
