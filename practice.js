
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
  authDomain: "jsdbtest.firebaseapp.com",
  databaseURL: "https://jsdbtest.firebaseio.com",
  projectId: "jsdbtest",
  storageBucket: "jsdbtest.appspot.com",
  messagingSenderId: "557097620929",
  appId: "1:557097620929:web:d549209de61a48b20b8b40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


