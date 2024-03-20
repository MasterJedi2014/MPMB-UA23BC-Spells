/*	-INFORMATION-
	Subject:	Spells
	Effect:		This script adds the UA versions of the spells from the 2023 Unearthed Arcana "Bastions and Cantrips" article.
				This file has been made by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-03-20 (sheet v13.1.0)
*/

var iFileName = "UA2023BC Spells [by MasterJedi2014] V1.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/03/20",
};

SourceList["UA23BC"] = {
	name : "Unearthed Arcana 2023: Bastions and Cantrips",
	abbreviation : "UA23BC",
	date : "2023/10/05",
};

// Add spells
SpellsList["acid splash ua23bc"] = {
	name : "Acid Splash (UA23BC)",
	source : [["UA23BC", 22], ["SRD", 114], ["P", 211], ["MJ:HB", 0]],
	classes : ["artificer", "sorcerer", "sorcerer_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	rangeMetric : "18 m",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Creatures within 5 ft rad sphere save or 1d6 Acid dmg; +1d6 at CL 5, 11, and 17", //Ripped directly from "ListsSpells.js" and then altered
	descriptionCantripDie : "Creatures within 5 ft rad sphere save or `CD`d6 Acid dmg", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You create an acidic bubble and hurl it at a point within range, where it explodes in a 5 ft radius sphere. Each creature in that sphere must succeed on a Dexterity saving throw or take 1d6 Acid damage." + "\n   " + "Cantrip Upgrade. This spell’s damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
};
SpellsList["blade ward ua23bc"] = {
	name : "Blade Ward (UA23BC)",
	source : [["UA23BC", 22], ["MJ:HB", 0]],
	classes : ["bard", "bard_ua22xc", "sorcerer", "sorcerer_ua23pt7", "warlock", "warlock_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 0,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which you take in response to a visible creature targeting you with a melee attack",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "Reaction to impose Disadvantage on 1 melee atk against me",
	descriptionFull : "You trace a sigil of warding, imposing Disadvantage on the creature’s attack roll against you.",
};
SpellsList["chill touch ua23bc"] = {
	name : "Chill Touch (UA23BC)",
	source : [["UA23BC", 22], ["SRD", 124], ["P", 221], ["MJ:HB", 0]],
	classes : ["sorcerer", "sorcerer_ua23pt7", "warlock", "warlock_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Melee spell atk for 1d10 Necrotic dmg; can't regain HP; +1d8 at CL 5, 11, and 17", //Ripped directly from "ListsSpells.js" and then altered
	descriptionShorter : "Melee spell atk for 1d10 Necrotic dmg; can't regain HP; +1d8 at CL 5/11/17", //Ripped directly from "ListsSpells.js" and then altered
	descriptionCantripDie : "Melee spell atk for `CD`d10 Necrotic dmg; can't regain hp", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You channel the chill of the grave toward one creature you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d10 Necrotic damage, and it can’t regain Hit Points until the end of your next turn." + "\n   " + "Cantrip Upgrade. This spell’s damage increases by 1d10 when you reach levels 5 (2d10), 11 (3d10), and 17 (4d10).",
};
SpellsList["friends ua23bc"] = {
	name : "Friends (UA23BC)",
	source : [["UA23BC", 22], ["MJ:HB", 0]],
	classes : ["bard", "bard_ua22xc", "sorcerer", "sorcerer_ua23pt7", "warlock", "warlock_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "S,M",
	compMaterial : "Some makeup",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 Humanoid crea currently not hostile save or be Charmed for duration",
	descriptionFull : "You magically emanate a sense of friendship toward one visible creature within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target succeeds automatically if it isn’t a Humanoid, if you’re fighting it, or if you have cast this spell on it within the past 24 hours." + "\n   " + "The spell ends early if the target takes damage or if you make an attack roll, deal damage, or force anyone to make a saving throw.",
};
SpellsList["poison spray ua23bc"] = {
	name : "Poison Spray (UA23BC)",
	source : [["UA23BC", 22], ["SRD", 169], ["P", 266], ["MJ:HB", 0]],
	classes : ["artificer", "druid", "druid_ua23pt8", "sorcerer", "sorcerer_ua23pt7", "warlock", "warlock_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	rangeMetric : "9 m",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell atk for 1d12 Poison dmg; +1d12 at CL 5, 11, and 17", //Ripped directly from "ListsSpells.js" and then altered
	descriptionCantripDie : "Ranged spell atk for `CD`d12 Poison dmg", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "You launch a mist of toxic energy at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d12 Poison damage." + "\n   " + "Cantrip Upgrade. This spell’s damage increases by 1d12 when you reach levels 5 (2d12), 11 (3d12), and 17 (4d12).",
};
SpellsList["produce flame ua23bc"] = {
	name : "Produce Flame (UA23BC)",
	source : [["UA23BC", 23], ["SRD", 172], ["P", 269], ["MJ:HB", 0]],
	classes : ["druid", "druid_ua23pt8"],
	level : 0,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "10 min (D)",
	description : "Flame 20 ft bright light; per turn 60 ft ranged spell attack for 1d8 Fire dmg; +1d8 at CL 5, 11, and 17", //Ripped directly from "ListsSpells.js" and then altered
	descriptionCantripDie : "Flame 20 ft bright light; once 60 ft ranged spell attack for `CD`d8 Fire dmg", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "A flickering flame appears in your hand and remains there for the duration. While there, the flame emits no heat and ignites nothing, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The spell ends if you dismiss it as a Bonus Action or if you cast it again." + "\n   " + "Until the spell ends, you can take a Magic action to hurl fire at a creature or an object within 60 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage." + "\n   " + "Cantrip Upgrade. This spell’s damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
};
SpellsList["shillelagh ua23bc"] = {
	name : "Shillelagh (UA23BC)",
	source : [["UA23BC", 23], ["SRD", 179], ["P", 275], ["MJ:HB", 0]],
	classes : ["druid", "druid_ua23pt8"],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Mistletoe, a shamrock leaf, and a Club or Quarterstaff",
	duration : "1 min",
	description : "Club/Quarterstaff I hold does d8 Bludg/Force dmg \u0026 uses spllcstng ablty instead of Str; d10 at CL5, d12 at 11, 2d6 at 17", //Ripped directly from "ListsSpells.js" and then altered
	descriptionShorter : "Club/Quarterstaff I hold does d8 Bludg/Force dmg \u0026 uses spllcstng ablty instead of Str; CL5:d10; 11:d12; 17:2d6", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "A Club or Quarterstaff you are holding is imbued with nature’s power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon’s damage die becomes a d8. If the attack deals damage, it can be Force damage or the weapon’s normal damage type (your choice)." + "\n   " + "The spell ends early if you cast it again or if you let go of the weapon." + "\n   " + "Cantrip Upgrade. The weapon’s damage die changes when you reach levels 5 (d10), 11 (d12), and 17 (2d6).",
};
SpellsList["shocking grasp ua23bc"] = {
	name : "Shocking Grasp (UA23BC)",
	source : [["UA23BC", 23], ["SRD", 179], ["P", 275], ["MJ:HB", 0]],
	classes : ["artificer", "sorcerer", "sorcerer_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Melee spell atk for 1d8 Lightning dmg, no Opp. Atks until next turn; +1d8 at CL 5, 11, and 17", //Ripped directly from "ListsSpells.js" and then altered
	descriptionCantripDie : "Melee spell atk for `CD`d8 Lightning dmg, no Opp. Atks until next turn", //Ripped directly from "ListsSpells.js" and then altered
	descriptionFull : "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and it can’t make Opportunity Attacks until the start of its next turn." + "\n   " + "Cantrip Upgrade. This spell’s damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
};
SpellsList["spare the dying ua23bc"] = {
	name : "Spare the Dying (UA23BC)",
	source : [["UA23BC", 23], ["SRD", 181], ["P", 277], ["MJ:HB", 0]],
	classes : ["artificer", "cleric", "cleric_ua23pt6", "druid", "druid_ua23pt8"],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "15 ft",
	rangeMetric : "4.5 m",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 creature with 0 current HP becomes Stable; range incr. at CL 5 (30 ft), 11 (60 ft), \u0026 17 (120 ft)", //Ripped directly from "ListsSpells.js" and then altered
	descriptionShorter : "1 creature with 0 current HP becomes Stable; CL5: 30 ft; 11: 60 ft; 17: 120 ft",
	descriptionFull : "Choose a creature within range that has 0 Hit Points yet is alive. The creature becomes Stable." + "\n   " + "Cantrip Upgrade. The spell’s range doubles when you reach levels 5 (30 feet), 11 (60 feet), and 17 (120 feet).",
};
SpellsList["true strike ua23bc"] = {
	name : "True Strike (UA23BC)",
	source : [["UA23BC", 23], ["MJ:HB", 0]],
	classes : ["bard", "bard_ua22xc", "sorcerer", "sorcerer_ua23pt7", "warlock", "warlock_ua23pt7", "wizard", "wizard_ua23pt7"],
	level : 0,
	school : "Div",
	time : "1 a",
	range : "Self",
	components : "S,M",
	compMaterial : "A weapon with which you have Proficiency",
	duration : "Instantaneous",
	description : "Wpn deals normal/Radiant dmg \u0026 uses spllcstng ablty; +1d6 Radiant damage at CL 5, 11, \u0026 17",
	descriptionCantripDie : "Wpn deals normal/Radiant dmg \u0026 uses spllcstng ablty; +`CD-1`d6 Radiant dmg",
	descriptionFull : "Guided by a flash of magical insight, you make one attack with the weapon used in the spell’s casting. The attack uses your spellcasting ability for the attack and damage rolls instead of using Strength or Dexterity. If the attack deals damage, it can be Radiant damage or the weapon’s normal damage type (your choice)." + "\n   " + "Cantrip Upgrade. Whether you choose to deal Radiant damage or the weapon’s normal damage type, the attack deals extra Radiant damage when you reach levels 5 (1d6), 11 (2d6), and 17 (3d6).",
};