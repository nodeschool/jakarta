// was wrote by eufrat tsaqib @eufat
// for testing purpose in node.js terminal,
// also there is no shitness of DOM here


// meetup infos
var meetup = {
	time : "3/4/26", // enter format like 01/02/14 (there is no zero based index)
	place : "Istana Negara, Jalan Veteran No. 16, Jakarta Pusat",
	sponsor : "PT. Kucing Garong Digital",
	sponsorLink : "http://garongdigital.com"
}

// speakers infos [name, twitter, talks title]
// if there is data just simply add an empty string ("")
var speakers = [
	["Foo Cat", "@foocat", "Object Oriented Food"],
	["Schrodinger Cat", "@schrodinger", "Salmon's Fish Closure"],
	["Bar Dog", "@bardog", "High Performance Bark"]
]


// return a string followed by st, nd, rd or th
var numAbb = function(num){
	var num = num.toString();
	switch (num.charAt(num.length - 1)){
		case "1": 
			num += "st";
			break;
		case "2":
			num += "nd";
			break;
		case "3":
			num += "rd"; 
			break; 
		default:
			num += "th";

	}
	return num;	
}

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// I found Date object and method in JavaScript is not sufficient enough
// to format "01/01/00" to "Monday, 1st January 2000" for example
var dateFormat = function(date){
	var date = date;
	var arrDate = new Array();
	arrDate = date.split("/");
	if (arrDate[0].charAt(0) == "0"){
		arrDate[0] = arrDate[0].substr(-1,1);
	}
	if (arrDate[1].charAt(0) == "0"){
		arrDate[1] = arrDate[1].substr(-1,1);
	}

	var tanggal = parseInt(arrDate[0]);
	var bulan = parseInt(arrDate[1]);
		bulan = bulan - 1; // format to zero index
	var tahun = parseInt(arrDate[2]);
	var allDate = new Date(tahun, bulan, tanggal)

	var day = weekday[allDate.getDay()];
	var	month = months[allDate.getMonth()];
	var	year = allDate.getYear();
	if (year <= 70){
		year = "20" + year;
	} else {
		year = "19" + year;
	}

	tanggal = numAbb(tanggal);
	var formatedDate = day + ", " + tanggal + " " + month + " " + year;
	return formatedDate;
}

console.log(dateFormat(meetup.time));


if (speakers.length > 0){
	for (i = 0; i < speakers.length; i++){
		var sName = speakers[i][0];
		console.log("Name is: " + sName);
		if (speakers[i][1] != ""){ 
			var sTwt = speakers[i][1].slice(1, -1);
			console.log("https://twitter.com/" + sTwt);
		} else {
			console.log("No twitter account.")
		}
		var sTalk = speakers[i][2];
		console.log("Speaking: " + sTalk);
	}
} else {
	console.log("There is no speakers yet.")
}