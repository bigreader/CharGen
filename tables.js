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

var tableAlignment = [
"Lawful Good",
"Lawful Good",
"Neutral Good",
"Neutral Good",
"Chaotic Good",
"Chaotic Good",
"Lawful Neutral",
"Chaotic Neutral",
[
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
],
"BACKGROUND"
];
function inverseAlignment(normal) {
	var mapping = {
		"Lawful Good": "Chaotic Evil",
		"Neutral Good": "Neutral Evil",
		"Chaotic Good": "Lawful Evil",
		"Lawful Neutral": "Chaotic Neutral",
		"True Neutral": "True Neutral",
		"Chaotic Neutral": "Lawful Neutral",
		"Lawful Evil": "Chaotic Good",
		"Neutral Evil": "Neutral Good",
		"Chaotic Evil": "Lawful Good",
	}
	return mapping[normal];
}

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
multi,
multi
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
function() { return lookupClassBackground[unmulti(char.class)] },
function() { return lookupClassBackground[unmulti(char.class)] },
function() { return lookupRaceBackground[unmulti(char.race)] },
function() { return lookupRaceBackground[unmulti(char.race)] },
function() { return multi(tableBackground, " to ") },
function() { return multi(tableBackground, " to ") },
multi
];

