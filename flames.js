/* Code Written By Shreyan Nag */
//flames logic
function flames() {
	//firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyAP-vr6NqQa24Tepu4DvE8IfweqvTcrD2o",
		authDomain: "flames-26070.firebaseapp.com",
		databaseURL: "https://flames-26070.firebaseio.com",
		projectId: "flames-26070",
		storageBucket: "",
		messagingSenderId: "936402815977",
		appId: "1:936402815977:web:20471dedfc5364237c9978"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);

	// Get the values of the two names
	var fname = document.getElementById("name1").value.trim().toLowerCase();
var sname = document.getElementById("name2").value.trim().toLowerCase();
  
	// Validate the inputs
	if (fname == "" || sname == "") {
	  alert("No names have been entered");
	  return;
	} else if (fname == sname) {
	  alert("Same name has been entered");
	  return;
	} else if (!/^[a-z]+$/i.test(fname) || !/^[a-z]+$/i.test(sname)) {
	  alert("Only alphabetic characters are allowed");
	  return;
	}
  
	// Calculate the number of common letters
	var p = commonLetters(fname, sname);
  
	// Define an array of outcomes and images
	var outcomes = [
	  ["FRIENDS", "img/friends.png"],
	  ["LOVERS", "img/lovers.png"],
	  ["AFFECTIONATE", "img/affectionate.jpg"],
	  ["MARRIAGE", "img/marriage.jpg"],
	  ["ENEMY", "img/enemy.gif"],
	  ["SISTER", "img/sister.jpg"],
	];
  
	// Get the index of the outcome based on the remainder of p divided by 6
	var index = p % 6;
  
	// Get the outcome and image from the array
	var result = outcomes[index][0];
	var image = outcomes[index][1];
  
	// Display the result and image
	document.getElementById("print").innerHTML =
	  '<button onclick=again()>Try another one !</button><br>' +
	  "<p class=" +
	  result[0] +
	  ">" +
	  result +
	  "</p><br>" +
	  '<img src="' +
	  image +
	  '" width="460" height="345">';
	  //firebase db push
	  function writeData(fname,sname,result){
		firebase.database().ref('lovers/').push({
			firstname: fname,
			secondname: sname,
			flames_result : result
		});
	}
	writeData(fname,sname,result);
  }
  
  // A function that compares two strings and returns the number of common letters
  function commonLetters(str1, str2) {
	var count = 0;
	for (var i = 0; i < str1.length; i++) {
	  if (str2.includes(str1[i])) {
		count++;
		// Remove the matched letter from str2 to avoid duplicates
		str2 = str2.replace(str1[i], "");
	  }
	}
	return count;
  }
  

//Reload function
function again() {
location.reload(false);
}
//User form layout
document.getElementById('flames_magic').innerHTML = '<p>Your Name</p><input type="text" id="name1"><br><p>Your Crush Name</p><input type="text" id="name2"><br><button onclick=flames()>FLAMES !</button><p id="print"></p>';
//Display Info
console.log("%cFLAMES Game Version3.0 \nUpdated On 26th July 2023","color: red; font-family: sans-serif; font-size: 2.1em; font-weight: bolder; text-shadow: #000 1px 1px;");
console.log("%cDeveloped by Shreyan Nag","color: #6872CB; font-family: sans-serif; font-size: 2.1em; font-weight:bolder; text-shadow: #6C6D75 1px 1px;");
