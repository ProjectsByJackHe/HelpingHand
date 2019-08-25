
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.alert("You're signed in!") 
  } else {
    // No user is signed in.
    window.alert("You're not signed in!")
  }
});


function login(){
    //window.alert("yessir")
    let userEmail = document.getElementById("textBar").value 
    let userPassword = document.getElementById("passwordBar").value 
    document.alert(userEmail)
firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
    window.alert("error: " + errorCode + " " + errorMessage)
});
}