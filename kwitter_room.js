const firebaseConfig = {
  apiKey: "AIzaSyCy2LK8jYMawpzj2pi6BF4qbgU5OdgE9GI",
  authDomain: "kwitter2-9d73b.firebaseapp.com",
  databaseURL: "https://kwitter2-9d73b-default-rtdb.firebaseio.com",
  projectId: "kwitter2-9d73b",
  storageBucket: "kwitter2-9d73b.appspot.com",
  messagingSenderId: "284276378640",
  appId: "1:284276378640:web:baa8100ffc12e21934ce95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}