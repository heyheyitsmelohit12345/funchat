const firebaseConfig = {
    apiKey: "AIzaSyBfzPfZVnAL3sYthQUK2-t1sOpZn3Ot36Y",
    authDomain: "funchat-7873e.firebaseapp.com",
    databaseURL: "https://funchat-7873e-default-rtdb.firebaseio.com",
    projectId: "funchat-7873e",
    storageBucket: "funchat-7873e.appspot.com",
    messagingSenderId: "809495874345",
    appId: "1:809495874345:web:65b7dfacd109f288ae8538",
    measurementId: "G-BBBGLXHCPH"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
   });});}
getData();

function logout(){
   localStorage.removeItem("user__name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location ="index3.html";
}
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index3.html";
}