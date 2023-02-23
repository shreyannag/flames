/* Code Written By Shreyan Nag */
	// Your web app's Firebase configuration
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

//flames logic
function flames() {
 var fname=document.getElementById("name1").value;
 var sname=document.getElementById("name2").value;
 var r=/\s+/g;
 var d= '<button onclick=again()>Try another one !</button><br>';
 var fr=fname.replace(r,"");
 var flen=fr.length; /*console.log(flen+fr);*/
 var sr=sname.replace(r,"");
 var slen=sr.length; /*console.log(slen+sr);*/ 
 var i,j,n,p=0;
 /*empty variable*/
  var result = "result";
/*ends here*/
    if((fr=="" || sr=="") || (fr=="" && sr==""))
    {
        alert("No names have been entered");
    }
	else if(fr==sr)
		{
		alert("Same name has been entered");
		}
    else 
    {
	for(i=0;i<flen;i++)
	{
		for(j=0;j<slen;j++)
		{
			if(fr.charAt(i)==sr.charAt(j))
			{
				p++;
		}
		}
		if(p!=0)
		{
			p++;
		}
	}
	for(n=0;n<flen;n++)
	{
		if(fr.charAt(0)==sr.charAt(n))
		{
			p++;
	}
	}
    }
	switch(p%6)
	{
		case 1 : document.getElementById("print").innerHTML = d+'<p class="fr">FRIENDS</p><br>'+'<img  src="img/friends.png" width="460" height="345">';
				result = "FRIENDS";
			break;
		case 2: document.getElementById("print").innerHTML = d+'<p class="lo">LOVERS</p><br>'+'<img src="img/lovers.png" width="460" height="345">';
				result = "LOVERS";
			break;
		case 3: document.getElementById("print").innerHTML = d+'<p class="af">AFFECTIONATE</p><br>'+'<img src="img/affectionate.jpg" width="460" height="345">';
				result = "AFFECTIONATE";
			break;
		case 4: document.getElementById("print").innerHTML = d+'<p class="mr">MARRIAGE</p><br>'+'<img src="img/marriage.jpg" width="460" height="345">';
				result = "MARRIAGE";
			break;
		case 5: document.getElementById("print").innerHTML = d+'<p class="em">ENEMY</p><br>'+'<img src="img/enemy.gif" width="460" height="345">';
				result = "ENEMY";
			break;
		case 6: document.getElementById("print").innerHTML = d+'<p class="si">SISTER</p><br>'+'<img src="img/sister.jpg" width="460" height="345">';
				result = "SISTER";
			break;
	}
	 //firebase function
	 function writeData(fname,sname,result){
		firebase.database().ref('lovers/').push({
			firstname: fname,
			secondname: sname,
			flames_result : result
		});
	}
	writeData(fname,sname,result);
}

//Reload function
function again() {
location.reload(false);
}

//User form layout
document.getElementById('flames_magic').innerHTML = '<p>Your Name</p><input type="text" id="name1"><br><p>Your Crush Name</p><input type="text" id="name2"><br><button onclick=flames()>FLAMES !</button><p id="print"></p>';

//Display Info
console.log("%cFLAMES Game Version2.0 \nUpdated On 23rd February 2023","color: red; font-family: sans-serif; font-size: 2.1em; font-weight: bolder; text-shadow: #000 1px 1px;");
console.log("%cDeveloped by Shreyan Nag","color: #6872CB; font-family: sans-serif; font-size: 2.1em; font-weight:bolder; text-shadow: #6C6D75 1px 1px;");
