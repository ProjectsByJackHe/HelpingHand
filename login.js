

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDhMsBcaAksOvMUKm85IuOFqYWHgy5cuhc",
    authDomain: "hackthe6ix-4ab0a.firebaseapp.com",
    databaseURL: "https://hackthe6ix-4ab0a.firebaseio.com",
    projectId: "hackthe6ix-4ab0a",
    storageBucket: "",
    messagingSenderId: "481485805668",
    appId: "1:481485805668:web:ef2a73802205e995"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   // window.alert("You're signed in!")
    firebase.auth().signOut()
    window.location.href = "helpingHandMainPage.html"
  } else {
    //window.alert("you are not signed in")
   // window.location.href = "index.html"
  }
});


function login(){
    //window.alert("yessir")
    let userEmail = document.getElementById("textBar").value 
    let userPassword = document.getElementById("passwordBar").value 
firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
window.alert("error: " + " " + errorMessage)
});
}

function signOut(){
    firebase.auth().signOut()
}