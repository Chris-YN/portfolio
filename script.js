


// script.js

//===== firebase scripts =====//
// firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { push, ref, getDatabase, onValue } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js"

// server config
const firebaseConfig = {
  apiKey: "AIzaSyCnIQTEx3nyfXEpnnD8qQtseUUuDg5rdGk",
  authDomain: "formtest-e6c7f.firebaseapp.com",
  projectId: "formtest-e6c7f",
  storageBucket: "formtest-e6c7f.appspot.com",
  messagingSenderId: "650846436284",
  appId: "1:650846436284:web:876ab37303de2c0da009b9"
};

// function app for firebase initialization
const app = initializeApp(firebaseConfig);



const database = getDatabase(app)
const dbRef = ref(database);
let currentDb = [];
onValue(dbRef, (response) => {
  currentDb = response.val();
});

const submitForm = (e) => {
  e.preventDefault();

  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".messageField").value;

  const infoToPush = {
    submittedName: name,
    submittedEmail: email,
    submittedMessage: message,
  }


  push(dbRef, infoToPush)

  document.querySelector(".contactFormFlexParent").reset();

  gotData(currentDb)

}
document.querySelector(".contactFormFlexParent").addEventListener("submit", submitForm);


const gotData = (data) => {
  let keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    let entryKey = keys[i];
    let name = data[entryKey].submittedName
    let email = data[entryKey].submittedEmail
    let message = data[entryKey].submittedMessage
  }
}





// ===== hidden function ===== //



document.querySelector(".hiddenForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  const hiddenTerminalInputField = document.querySelector(".hiddenInput");
  let hiddenTerminalInput = document.querySelector(".hiddenInput").value;
  console.log(hiddenTerminalInput)
  if (hiddenTerminalInput == "lighter") {
    const lighterClasses = () => {
      document.querySelector(".bodyDiv").classList.add("bodyDivLight");
      document.querySelector(".wrapper").classList.add("wrapperLight");
      document.querySelector("#aboutMe").classList.add("aboutMeLight");
      document.querySelector("#projects").classList.add("projectsLight");
      document.querySelector(".footerDiv").classList.add("footerDivLight");
      const darkH1Orange = document.querySelectorAll(".h1Orange")
      console.log(darkH1Orange);
      darkH1Orange.forEach((span)=>{
        span.classList.add("spanLightRed");
        span.classList.remove("h1Orange")
      });
      const darkH1Blue = document.querySelectorAll(".h1Blue")
      console.log(darkH1Orange);
      darkH1Blue.forEach((span) => {
        span.classList.add("h1LightBlue");
        span.classList.remove("h1Blue")
      });
      const darkH2 = document.querySelectorAll("h2")
      console.log(darkH1Orange);
      darkH2.forEach((h2) => {
        h2.classList.add("h2Light");
        // h2.classList.remove("h1Blue")
      });
      document.querySelector("input").classList.remove("hiddenInput");
      document.querySelector("input").classList.add("inputLight");
      document.querySelector(".skillsIconBackground").classList.add("skillsIconBackgroundLight");
    };
    setTimeout(lighterClasses, 1100);
    animate()
    hiddenTerminalInputField.value = "";
  } else {
    document.querySelector(".hiddenInputMessage").classList.add("hiddenInputParaVisible");
    document.querySelector(".hiddenInputMessage").innerHTML = "try another word"
    hiddenTerminalInputField.value = "";
    setTimeout( ()=>{
      document.querySelector(".hiddenInputMessage").classList.remove("hiddenInputParaVisible");
    }, 3000 )
    }
  }
);
// ===== animations =====//
function animate() {
  const mainImage = document.querySelector(".wholeScreenSpread")

  setTimeout(() => {
    mainImage.classList.add("active");
    mainImage.style.animation = "slideFlashIn 1s forwards";
  }, 300)
  setTimeout(() => {
    // mainImage.classList.add("active");
    mainImage.style.animation = "slideFlashOut 1s forwards";
  }, 1100)
}
// animate();





// ===== sticky topNav bar =====//
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
// console.log(cButtons);

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
  

  // console.log(this)
  // console.log(this.classList[0])

  const title = document.querySelector("#projectTitle");
  const image = document.querySelector("#projectImgContainer");
  const discription = document.querySelector("#projectDiscription");
  const liveLink = document.querySelector("#projectLiveLink");
  const gitHub = document.querySelector("#projectGitHubLink");

  const recipeFiderText = "<span class='pGrey'>//</span> A Git collaborated app to search recipes for various dishes by name and category <br> <br> <span class='pGrey'>//</span> App allows search by dish name, random dish display option and option to choosedish by category"

  const weatherAndAirAppText = "<span class='pGrey'>//</span> An app to find current weather and air quality for cities in Canada <br> <br> <span class='pGrey'>//</span> App displays dynamically changing weather icon and colour in the background thatreflects current weather and air quality <br> <br> <span class='pGrey'>//</span> Displays information on current temperature, humidity and Air Quality Index in text"

  const roboTriviaText = "<span class='pGrey'>//</span> A Git collaborated web based game with trivia questions for different categories <br> <br> <span class='pGrey'>//</span> Utilizes separate API to generate unique robot per player <br> <br> <span class='pGrey'>//</span> Player's score is compared to three top scores saved in Firebase real-time databasewith an option to submit the score. submitting higher score updates the high score"
  
  if (this.classList[0] == "proOne") {
    title.innerHTML = `<span aria-hidden="true" class="h1Purple">let </span>
      <span aria-hidden="true" class="h1Orange"> title </span >
        <span aria-hidden="true" class="h1White">= </span>
    Recipe Finder`
    image.innerHTML = '<img src="./styles/assets/recipeAppTrimedModal.jpg" alt="Screen-shot of Robo Trivia App">'
    discription.innerHTML = recipeFiderText
    liveLink.innerHTML = '<a href="https://epic-engelbart-52614a.netlify.app/" target="_blank">Live Site</a>'
    gitHub.innerHTML = '<a href="https://github.com/recipeFinderMiniApp/recipeFinderMiniApp" target="_blank">GitHub</a>'

  } else if (this.classList[0] == "proTwo") {
    title.innerHTML = `
      <span aria-hidden="true" class="h1Purple">let </span>
      <span aria-hidden="true" class="h1Orange"> title </span >
      <span aria-hidden="true" class="h1White">= </span>
      Weather and Air quality app`
    image.innerHTML = '<img src="./styles/assets/airAndWeatherTrimedModal.jpg" alt="Screen-shot of air and weather app">'
    discription.innerHTML = weatherAndAirAppText
    liveLink.innerHTML = '<a href="https://happy-golick-ff6273.netlify.app/" target="_blank">Live Site</a>'
    gitHub.innerHTML = '<a href="https://github.com/Chris-YN/chrisYunProjectThree" target="_blank">GitHub</a>'


  } else if (this.classList[0] == "proThree"){
    title.innerHTML = "<span>let: </span>Robo Trivia"
    image.innerHTML = '<img src="./styles/assets/roboTriviaTrimedModal.jpg" alt="Screen-shot of Robo Trivia App">'
    discription.innerHTML = roboTriviaText
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
