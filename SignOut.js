
function signOut(){
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
        window.alert("error occured while trying to sign out")
});
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   // window.alert("You're signed in!") 
    window.location.href = "helpingHandMainPage.html"
    break
  } else {
    // No user is signed in.
    window.alert("you are signed out")
   // window.alert("You're not signed in!")
    break
  }
});
