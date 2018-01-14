/* Code Written By Shreyan Nag */

//flames logic
function flames() {
 var r=/\s+/g;
 var d= '<button onclick=again()>Try another one !</button><br>';
 var fname=document.getElementById("name1").value;
 var fr=fname.replace(r,"");
 var flen=fr.length; /*console.log(flen+fr);*/
 var sname=document.getElementById("name2").value;
 var sr=sname.replace(r,"");
 var slen=sr.length; /*console.log(slen+sr);*/ 
 var i,j,n,p=0;
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
			break;
		case 2: document.getElementById("print").innerHTML = d+'<p class="lo">LOVERS</p><br>'+'<img src="img/lovers.png" width="460" height="345">';
			break;
		case 3: document.getElementById("print").innerHTML = d+'<p class="af">AFFECTIONATE</p><br>'+'<img src="img/affectionate.jpg" width="460" height="345">';
			break;
		case 4: document.getElementById("print").innerHTML = d+'<p class="mr">MARRIAGE</p><br>'+'<img src="img/marriage.jpg" width="460" height="345">';
			break;
		case 5: document.getElementById("print").innerHTML = d+'<p class="em">ENEMY</p><br>'+'<img src="img/enemy.gif" width="460" height="345">';
			break;
		case 6: document.getElementById("print").innerHTML = d+'<p class="si">SISTER</p><br>'+'<img src="img/sister.jpg" width="460" height="345">';
			break;
	}
}

//Reload function
function again() {
location.reload(false);
}

//User form layout
document.getElementById('flames_magic').innerHTML = '<p>Your Name</p><input type="text" id="name1"><br><p>Your Crush Name</p><input type="text" id="name2"><br><button onclick=flames()>FLAMES !</button><p id="print"></p>';

//Display Info
console.log("%cFLAMES Game Version1.0","color: red; font-family: sans-serif; font-size: 2.1em; font-weight: bolder; text-shadow: #000 1px 1px;");
console.log("%cDeveloped by Shreyan Nag","color: #6872CB; font-family: sans-serif; font-size: 2.1em; font-weight:bolder; text-shadow: #6C6D75 1px 1px;");
