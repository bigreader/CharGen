function multi(table, separator) {
	if (!separator) separator = "/";
	var item1 = rollOn(table, "f");
	var item2 = rollOn(table, "f");
	if (item1 === item2) {
		return multi(table);
	}
	return item1 + separator + item2;
}


function unmulti(str) {
	var separators = ["/", " to ", ", "];
	var parts = [str];
	while (parts.length === 1) {
		parts = str.split(separators.shift());
		if (separators.length === 0) break;
	}
	return parts[Math.floor(Math.random()*parts.length)];
}


function rollOn(table, skip) {
	if (!skip) skip = "";
	var choice = table[Math.floor(Math.random() * table.length)];
	var type = typeof choice;

	switch (type) {
		case "string":
		return choice;

		case "object":
		if (skip.includes("a")) return rollOn(table, skip);
		if (skip.includes("A")) return choice;
		return rollOn(choice, skip);

		case "function":
		if (skip.includes("f")) return rollOn(table, skip);
		if (skip.includes("F")) return choice;
		return choice(table);

		default:
		return;

	}

}


function pretty(str) {
	var alt = lookupPretty[str];
	return alt || str;
}


function emoji(str) {
	var emoji = lookupEmoji[str];
	if (emoji) {
		return pretty(str) + " " + emoji;
	} else {
		return pretty(str);
	}
}



function test() {
	var out = {};
	for (var i=0; i<100000; i++) {
		char.generate();
		var result = char.alignment;
		if (out[result]) {
			out[result]++;
		} else {
			out[result] = 1;
		}
	}
	console.log(out);
}


var char = {
	generate: function() {
		this.race = rollOn(tableRace);
		this.class = rollOn(tableClass);
		this.background = rollOn(tableBackground);
		this.alignment = rollOn(tableAlignment);
		this.personality = rollOn(tablePersonality);
		return this;
	},
	raceAdjective: function() {
		var adj = lookupRaceAdjective[this.race];
		return adj || this.race;
	},
	summary: function() {
		var s = "";
		s += this.race + " " + this.class + "<br>";
		s += this.personality + ", " + this.alignment + " " + this.background;
		return s;
	},
	html: function() {
		var segments = "~race~ ~class~<br>\
		~personality~, ~alignment~ ~background~".split("~");

		var html = "";
		var parse = false;
		segments.forEach(seg => {

			if (parse) {
				html += '<span class="text-' + seg + '">' + emoji(this[seg]) + '</span>';
			} else {
				html += seg;
			}

			parse = !parse;
		});

		return html;
	}
};


var pings = {};
function ping(p) {
	if (pings[p]) {
			pings[p]++;
		} else {
			pings[p] = 1;
		}
}



$(document).ready(function() {

	$('#add-button').on("click", function() {
		char.generate();

		$('#list').prepend(
			$('<div class="card">').append(
				$('<div class="card-body">').append(
					$('<p class="card-text">').html(char.html())
				)
			)
		);

	});

});
