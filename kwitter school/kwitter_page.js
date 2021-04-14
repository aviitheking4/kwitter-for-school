//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCyLvxG-VfQLymEwcOH5ADZTbPTsdieIiM",
      authDomain: "kwitter-dba09.firebaseapp.com",
      databaseURL: "https://kwitter-dba09-default-rtdb.firebaseio.com",
      projectId: "kwitter-dba09",
      storageBucket: "kwitter-dba09.appspot.com",
      messagingSenderId: "125061496843",
      appId: "1:125061496843:web:e324a8149e0aca6843870e",
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value= "";
}


//End code
      } });  }); }
getData();
