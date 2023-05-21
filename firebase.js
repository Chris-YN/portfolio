


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