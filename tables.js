var tableRace = [
"Human",
"Human",
"Dwarf",
"Elf",
"Halfling",
[ 
	"Dragonborn",
	"Gnome",
	"Half-Elf",
	"Half-Orc",
	"Tiefling",
	multi
]
];


var subtableWarrior = [
"Fighter",
"Fighter",
"Barbarian",
"Paladin",
"Ranger",
"Monk",
"Rogue",
"Rogue"
];
var subtableMagician = [
"Wizard",
"Wizard",
"Warlock",
"Sorcerer",
"Druid",
"Bard",
"Cleric",
"Cleric"
];
var tableClass = [
subtableWarrior,
subtableWarrior,
subtableWarrior,
subtableWarrior,
subtableMagician,
subtableMagician,
subtableMagician,
multi
];

var lookupBackgroundAlignment = {
	"Acolyte": "Neutral Good",
	"Charlatan": "Chaotic Neutral",
	"Criminal": "Chaotic Neutral",
	"Entertainer": "Neutral Good",
	"Folk Hero": "Lawful Good",
	"Guild Artisan": "Lawful Good",
	"Hermit": "Lawful Neutral",
	"Noble": "Lawful Neutral",
	"Outlander": "Chaotic Good",
	"Sage": "Neutral Good",
	"Sailor": "Chaotic Good",
	"Soldier": "Lawful Good",
	"Urchin": "Chaotic Good"
}
var tableAlignment = [
"Lawful Good",
"Lawful Good",
"Neutral Good",
"Neutral Good",
"Chaotic Good",
"Chaotic Good",
"Lawful Neutral",
"Chaotic Neutral",
function() { ping("a9"); return invertAlignment(rollOn(tableAlignment, "F"))},
function() { ping("a10"); return lookupBackgroundAlignment[unmulti(char.background)] }
];
function invertAlignment(normal) {
	if (typeof normal === "function") {
		normal = "True Neutral";
	}
	var mapping = {
		"Lawful Good": "Chaotic Evil",
		"Neutral Good": "Neutral Evil",
		"Chaotic Good": "Lawful Evil",
		"Lawful Neutral": "Chaotic Neutral",
		"True Neutral": "True Neutral",
		"Chaotic Neutral": "Lawful Neutral",
		"Lawful Evil": "Chaotic Good",
		"Neutral Evil": "Neutral Good",
		"Chaotic Evil": "Lawful Good"
	}
	return mapping[normal];
}
/* [
"Chaotic Evil",
"Chaotic Evil",
"Neutral Evil",
"Neutral Evil",
"Lawful Evil",
"Lawful Evil",
"Chaotic Neutral",
"Lawful Neutral",
"True Neutral",
"INVERSE BACKGROUND"
] */

var tablePersonality = [
"Exuberant",
"Bitter",
"Melancholy",
"Unstable",
"Anxious",
"Foolhardy",
"Short-tempered",
"Serene",
"Aloof",
"Congenial",
function() { ping("p11"); return multi(tablePersonality, ", ") },
function() { ping("p11"); return multi(tablePersonality, ", ") }
];

var lookupClassBackground = {
	"Cleric": "Acolyte",
	"Warlock": "Charlatan",
	"Rogue": "Criminal",
	"Bard": "Entertainer",
	"Paladin": "Folk Hero",
	"Druid": "Guild Artisan",
	"Monk": "Hermit",
	"Sorcerer": "Noble",
	"Barbarian": "Outlander",
	"Wizard": "Sage",
	"Fighter": "Soldier",
	"Ranger": "Urchin"
};
var lookupRaceBackground = {
	"Elf": "Acolyte",
	"Tiefling": "Criminal",
	"Halfling": "Entertainer",
	"Half-Elf": "Folk Hero",
	"Gnome": "Guild Artisan",
	"Human": "Noble",
	"Half-Orc": "Outlander",
	"Dragonborn": "Sage",
	"Dwarf": "Soldier"
};
var tableBackground = [
"Acolyte",
"Charlatan",
"Criminal",
"Entertainer",
"Folk Hero",
"Guild Artisan",
"Hermit",
"Noble",
"Outlander",
"Sage",
"Sailor",
"Soldier",
"Urchin",
function() { ping("b14"); return lookupClassBackground[unmulti(char.class)] },
function() { ping("b14"); return lookupClassBackground[unmulti(char.class)] },
function() { ping("b16"); return lookupRaceBackground[unmulti(char.race)] },
function() { ping("b16"); return lookupRaceBackground[unmulti(char.race)] },
function() { ping("b18"); return multi(tableBackground, " to ") },
function() { ping("b18"); return multi(tableBackground, " to ") },
multi
];



var lookupPretty = {
	"Human": "Human",
	"Dwarf": "Dwarven",
	"Elf": "Elven",
	"Halfling": "Halfling",
	"Dragonborn": "Dragonborn",
	"Gnome": "Gnomish",
	"Half-Elf": "Half-Elven",
	"Half-Orc": "Half-Orcish",
	"Tiefling": "Tiefling"
}

var lookupEmoji = {
	"Human": "🧑",
	"Dwarf": "🎅",
	"Elf": "🧝‍♂️",
	"Halfling": "👦",
	"Dragonborn": "🐲",
	"Gnome": "👶",
	"Half-Elf": "👱‍♀️",
	"Half-Orc": "🧟‍♂️",
	"Tiefling": "🦹‍♀️",

	"Fighter": "⚔️",
	"Barbarian": "⚒",
	"Paladin": "☀️",
	"Ranger": "🐺",
	"Monk": "🙏",
	"Rogue": "🗡",
	"Wizard": "🔮",
	"Warlock": "🧿",
	"Sorcerer": "🔥",
	"Druid": "☘️",
	"Bard": "🎸",
	"Cleric": "🌩",

	"Acolyte": "🕯",
	"Charlatan": "🎩",
	"Criminal": "🔫",
	"Entertainer": "🎤",
	"Folk Hero": "🏆",
	"Guild Artisan": "💰",
	"Hermit": "🏔",
	"Noble": "👑",
	"Outlander": "🧳",
	"Sage": "📚",
	"Sailor": "⛵️",
	"Soldier": "🛡",
	"Urchin": "🧸",

	/* "Lawful Good": "🙂",
	"Neutral Good": "☺️",
	"Chaotic Good": "😆",
	"Lawful Neutral": "😕",
	"True Neutral": "😶",
	"Chaotic Neutral": "😏",
	"Lawful Evil": "😒",
	"Neutral Evil": "😠",
	"Chaotic Evil": "🤪", */

	"Lawful Good": "🔵",
	"Neutral Good": "💙",
	"Chaotic Good": "🔷",
	"Lawful Neutral": "⚜️",
	"True Neutral": "♾",
	"Chaotic Neutral": "🔆",
	"Lawful Evil": "🚫",
	"Neutral Evil": "💢",
	"Chaotic Evil": "⁉️",

	"Exuberant": "😁",
	"Bitter": "😕",
	"Melancholy": "😢",
	"Unstable": "😂",
	"Anxious": "😲",
	"Foolhardy": "😎",
	"Short-tempered": "😠",
	"Serene": "😌",
	"Aloof": "😒",
	"Congenial": "😊"
}





