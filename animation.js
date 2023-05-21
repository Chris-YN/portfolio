console.log("animation.js loaded");
const navItems = document.querySelectorAll(".mainNavItems");
setTimeout(()=>{
  console.log("tiltgrowanimatrionadded");
  navItems.forEach((mainNavItem)=>{
    mainNavItem.classList.add("mainNavGrowTiltAni")
  })
},5000);