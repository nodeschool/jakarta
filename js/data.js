'use strict'

// meetup infos
var meetup = {
	time: "31/12/14", // enter format like 1/2/14 (not a zero based index)
	address: "Istana Negara, Jalan Veteran No. 16, Jakarta Pusat",
	sponsor: {
		name: "PT. Kucing Garong Digital",
		link: "http://garongdigital.com"
	}
};

// speakers infos [name, @twitteraccount, talks title]
// if there is no speaker infos just simply add an empty string ("") value
var speakers = [
	["Foo Cat", "@foocat", "Object Oriented Food"],
	["Schrodinger Cat", "@schrodinger", "Salmon's Fish Closure"],
	["Bar Dog", "@bardog", "High Performance Bark"],
	["Cat and Cat", "@catcat", ""]
];

// return a string followed by st, nd, rd or th
	var numAbb = function(num) {
		var num = num.toString();
		switch (num.charAt(num.length - 1)) {
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

	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	// I found Date object and method in JavaScript is not sufficient enough
	// to format "01/01/00" to "Monday, 1st January 2000" for example
	var dateFormat = function(date) {
		var date = date;
		var arrDate = new Array();
		arrDate = date.split("/");
		if (arrDate[0].charAt(0) == "0") {
			arrDate[0] = arrDate[0].substr(-1, 1);
		}
		if (arrDate[1].charAt(0) == "0") {
			arrDate[1] = arrDate[1].substr(-1, 1);
		}

		var tanggal = parseInt(arrDate[0]);
		tanggal = tanggal - 1;
		var bulan = parseInt(arrDate[1]);
		bulan = bulan - 1; // format to zero index
		var tahun = parseInt(arrDate[2]);
		var allDate = new Date(tahun, bulan, tanggal)

		var day = weekday[allDate.getDay()];
		var month = months[allDate.getMonth()];
		var year = allDate.getYear();
		if (year <= 70) {
			year = "20" + year;
		} else {
			year = "19" + year;
		}

		tanggal = numAbb(tanggal + 1);
		var formatedDate = day + ", " + tanggal + " " + month + " " + year;
		return formatedDate;
	}



var sName, sTwt, linkToTwt, sTalk, listItem = [],
	allListItem;
if (speakers.length > 0) {
	for (i = 0; i < speakers.length; i++) {
		sName = speakers[i][0];
		console.log("Name is: " + sName);
		if (speakers[i][1] != "") {
			sTwt = speakers[i][1].slice(1, -1);
			linkToTwt = "https://twitter.com/" + sTwt;
		}
		sTalk = speakers[i][2];
		listItem[i] = "<li><a href=\"" + linkToTwt + "\" >" + sName + "</a>";
		if (sTalk != "") {
			listItem[i] += "(" + sTalk + ")</li>";
		} else {
			listItem[i] += "</li>";
		}
	}
	allListItem = listItem.join("");

	var HTMLlist = document.getElementById("list")
	HTMLlist.innerHTML = allListItem;

} else {
	console.log()

	var HTMLlist = document.getElementById("list")
	HTMLlist.innerHTML = "<p>There is no speakers yet.</p>";
}

	// Manipulate DOM

var HTMLtime = document.getElementById("time");
HTMLtime.innerHTML = dateFormat(meetup.time);

var HTMLAddress = document.getElementById("address");
HTMLAddress.innerHTML = meetup.address;

var HTMLsponsor = document.getElementById("sponsor");
HTMLsponsor.innerHTML = "Sponsored by <a href=\"" + meetup.sponsor.link + "\">" + meetup.sponsor.name + "</a>";