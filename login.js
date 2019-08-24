firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
     
  } else {
    // No user is signed in.
      
  }
});


function login(){
    //window.alert("yessir")
    let email = document.getElementById("textBar").value 
    let password = document.getElementById("passwordBar").value 
}