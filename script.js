function multi(table, separator) {
	if (!separator) separator = "/";
	var item1 = rollOn(table, "f");
	var item2 = rollOn(table, "f");
	if (item1 === item2) {
		return multi(table);
	}
	return item1 + separator + item2;
}


function unmulti(str, separator) {
	if (!separator) separator = "/";
	var parts = str.split("/");
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

function test(table) {
	var out = {};
	for (var i=0; i<100000; i++) {
		var char = {
			race: rollOn(tableRace),
			class: rollOn(tableClass)
		};
		var result = rollOn(table);
		if (out[result]) {
			out[result]++;
		} else {
			out[result] = 1;
		}
	}
	console.log(out);
}

function generate() {
	var char = {};
	char.race = rollOn(tableRace);
	char.class = rollOn(tableClass);
	char.background = rollOn(tableBackground);
	char.alignment = rollOn(tableAlignment);
	char.personality = rollOn(tablePersonality);
	return char;
}



$(document).ready(function() {

	console.log(generate());
	

});