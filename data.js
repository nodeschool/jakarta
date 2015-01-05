var meetup, speaker;

// meetup infos
meetup = {
	time: "31/12/14", // enter format like 1/2/14 (not a zero based index)
	address: "Istana Negara, Jalan Veteran No. 16, Jakarta Pusat",
	sponsor: {
		name: "PT. Kucing Garong Digital",
		link: "http://garongdigital.com"
	}
}

// speakers infos [name, @twitteraccount, talks title]
// if there is no speaker infos just simply add an empty string ("") value
speakers = [
	["Foo Cat", "@foocat", "Object Oriented Food"],
	["Schrodinger Cat", "@schrodinger", "Salmon's Fish Closure"],
	["Bar Dog", "@bardog", "High Performance Bark"],
	["Cat and Cat", "@catcat", ""]
]