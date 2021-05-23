// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgDcRzJQovwfygPEaDNkIafp82RGAploY",
  authDomain: "let-chat-web-app-220f5.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-220f5-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-220f5",
  storageBucket: "let-chat-web-app-220f5.appspot.com",
  messagingSenderId: "29419020013",
  appId: "1:29419020013:web:d66d30567b984808c2b6e4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function greetUser() {
  nameOfTheUser = localStorage.getItem("userName");
  document.getElementById("user_name").innerHTML = "Welcome " + nameOfTheUser + "!!"
}

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
  });
  localStorage.setItem("room_name", room_name);
}

function redirectToRoomName(roomName){
  localStorage.setItem("room_name",roomName);
  window.location = "kwitter_page.html";
}

function getData() {

  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key; 
      Room_name = childKey;
      //Start code    

      row = "<div class='room_name' id=" + Room_name + " onclick='redirectToRoomName(this.id)' >#" + Room_name + "<div/>" + "<hr>";
      document.getElementById("output").innerHTML+=row;

      //End code      
    });
  });
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

getData();