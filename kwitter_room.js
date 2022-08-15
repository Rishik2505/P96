const firebaseConfig = {
  apiKey: "AIzaSyCAEai1aY-upWhCR3PUFv0LtDRY_zM-2zw",
  authDomain: "ren-and-stimpy-s-chat-web.firebaseapp.com",
  projectId: "ren-and-stimpy-s-chat-web",
  storageBucket: "ren-and-stimpy-s-chat-web.appspot.com",
  messagingSenderId: "421374985022",
  appId: "1:421374985022:web:c5cdf5e154474f7101226f",
  measurementId: "G-39ELJJ7NX1"
};
      
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name);
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
});
user_name
roomname