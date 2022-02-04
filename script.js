


// script.js

// =====sticky topNav bar =====/
const nav = document.querySelector('#stickyNav');
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add("fixedTopNav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixedTopNav");
  }
}

window.addEventListener("scroll", stickyNavigation);



//===== project Carousel =====//
const cButtons = document.querySelectorAll("[data-pCarousel-button]");
console.log(cButtons);

cButtons.forEach( (button)=>{
  button.addEventListener("click", ()=>{
    const navAdj = button.dataset.pCarouselButton === "next" ? 1: -1;
    const projectPieces = button.closest("[data-pCarousel]").querySelector("[data-projects]");
    
    const vProject = projectPieces.querySelector("[data-active]");
    let newIndex = [...projectPieces.children].indexOf(vProject) + navAdj;
    if (newIndex < 0) {newIndex = projectPieces.children.length -1;}
    else if (newIndex >= projectPieces.children.length){
      newIndex = 0;
    }

    projectPieces.children[newIndex].dataset.active = true;
    delete vProject.dataset.active;
  })
})



//===== project modal =====//
const projectModalToggle = function(){
  document.querySelector(".overlay").classList.toggle("overlayHidden");
  document.querySelector(".modal").classList.toggle("modalHidden");
  // codes to dynamically populate modal according to the project clicked.
  const projectImages = document.querySelectorAll(".projectLi");
  


  // console.log(this);
  // console.log(this.dataset.active);
  console.log(this)
  console.log(this.classList[0])

  const title = document.querySelector("#projectTitle");
  const image = document.querySelector("#projectImgContainer");
  const discription = document.querySelector("#projectDiscription");
  const liveLink = document.querySelector("#projectLiveLink");
  const gitHub = document.querySelector("#projectGitHubLink");
  
  if (this.classList[0] == "proOne") {
    title.innerHTML = "testString 1"
    image.innerHTML = '<img src="./styles/assets/toronto1.png" alt="toronto One">'
    discription.innerHTML = "1st project discription here"

  } else if (this.classList[0] == "proTwo") {
    title.innerHTML = "testString 2"
    image.innerHTML = '<img src="./styles/assets/toronto2.png" alt="toronto two">'
    discription.innerHTML = "2nd project discription here"


  } else if (this.classList[0] == "proThree"){
    title.innerHTML = "testString 3"
    image.innerHTML = '<img src="./styles/assets/toronto3.png" alt="toronto three">'
    discription.innerHTML = "3rd project discription here"
    liveLink.innerHTML = '<a href="https://epic-bohr-0b1267.netlify.app" target="_blank">Live Site</a>'
    gitHub.innerHTML = '<a href="https://github.com/Robo-Trivia/project4-robo-trivia" target="_blank">GitHub</a>'

    }


  // projectImages.forEach( (projectImage)=>{
  //   if (projectImage.dataset.active === true){
  //     const currentProjectId = projectImage.dataset.projectNum;
  //     console.log(currentProjectId);
  //   }
  // });

  // projectImages.innerHTML = ""
  // if (this.dataset.projectNum == 1) {
  //   projectImages.innerHTML = "testString 1"
  //   } else if (this.dataset.projectNum == 2) {
  //   projectImages.innerHTML = "testString 2"
  //   } else if (this.dataset.projectNum == 3){
  //   projectImages.innerHTML = "testString 3"
  //   }

  // project1.innerHTML = `<p>one</p>`
  // project2.innerHTML = "two"
  // project3.innerHTML = "three" 

  // projectImages.forEach( (projectImage)=>{
  //   const pDescription = document.querySelector("#projectDiscription");
  //   pDescription.innerHTML = ""
  //   if (projectImage.dataset.projectNum == 1) {
  //   pDescription.innerHTML = "testString 1"
  //   } else if (projectImage.dataset.projectNum == 2) {
  //   pDescription.innerHTML = "testString 2"
  //   } else if (projectImage.dataset.projectNum == 3){
  //   pDescription.innerHTML = "testString 3"
  //   }
  // })
  
  
  
  // to hide carousel button while modal is up. 
  // modal has position:fixed applied
  const cButtonsToHide = document.querySelectorAll(".carouselButton");
  cButtonsToHide.forEach( (cButtonToHide)=>{
    cButtonToHide.classList.toggle("carouselButtonHidden")
  })

  
}

const projectImages = document.querySelectorAll(".projectLi");
projectImages.forEach( (projectImage)=>{
  projectImage.addEventListener("click", projectModalToggle);

  
})

document.querySelector(".modalCloseButton").addEventListener("click", projectModalToggle);

document.querySelector(".overlay").addEventListener("click", projectModalToggle);
