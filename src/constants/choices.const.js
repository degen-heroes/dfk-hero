/**
 * @fileoverview In game choices to decode stat and visual genes.
 */

exports.gender = { 1: 'male', 3: 'female' };
exports.background = {
  0: 'desert',
  2: 'forest',
  4: 'plains',
  6: 'island',
  8: 'swamp',
  10: 'mountains',
  12: 'city',
  14: 'arctic',
};
exports.class = {
  0: 'warrior',
  1: 'knight',
  2: 'thief',
  3: 'archer',
  4: 'priest',
  5: 'wizard',
  6: 'monk',
  7: 'pirate',
  8: 'berserker',
  9: 'seer',
  10: 'legionnaire',
  11: 'scholar',
  16: 'paladin',
  17: 'darkKnight',
  18: 'summoner',
  19: 'ninja',
  20: 'shapeshifter',
  21: 'bard',
  24: 'dragoon',
  25: 'sage',
  26: 'spellBow',
  28: 'dreadKnight',
};
exports.skinColor = {
  0: 'c58135',
  2: 'f1ca9e',
  4: '985e1c',
  6: '57340c',
  8: 'e6a861',
  10: '7b4a11',
  12: 'e5ac91',
  14: 'aa5c38',
};
exports.hairColor = {
  0: 'ab9159',
  1: 'af3853',
  2: '578761',
  3: '068483',
  4: '48321e',
  5: '66489e',
  6: 'ca93a7',
  7: '62a7e6',
  8: 'c34b1e',
  9: '326988',
  10: '513f4f',
  11: 'd48b41',
  16: 'd7bc65',
  17: '9b68ab',
  18: '8d6b3a',
  19: '566377',
  20: '275435',
  21: '77b23c',
  24: '880016',
  25: '353132',
  26: 'dbfbf5',
  28: '8f9bb3',
};
exports.eyeColor = {
  0: '203997',
  2: '896693',
  4: 'bb3f55',
  6: '0d7634',
  8: '8d7136',
  10: '613d8a',
  12: '2494a2',
  14: 'a41e12',
};
exports.appendageColor = {
  0: 'c5bfa7',
  1: 'a88b47',
  2: '58381e',
  3: '566f7d',
  4: '2a386d',
  5: '3f2e40',
  6: '830e18',
  7: '6f3a3c',
  8: 'cddef0',
  9: 'df7126',
  10: '835138',
  11: '86a637',
  16: '6b173c',
  17: 'a0304d',
  18: '78547c',
  19: '352a51',
  20: '147256',
  21: 'cf7794',
  24: 'c29d35',
  25: '211f1f',
  26: '77b5cf',
  28: 'd7d7d7',
};
exports.backAppendageColor = {
  0: 'c5bfa7',
  1: 'a88b47',
  2: '58381e',
  3: '566f7d',
  4: '2a386d',
  5: '3f2e40',
  6: '830e18',
  7: '6f3a3c',
  8: 'cddef0',
  9: 'df7126',
  16: '6b173c',
  17: 'a0304d',
  18: '78547c',
  19: '352a51',
  20: '147256',
  24: 'c29d35',
  25: '211f1f',
  28: 'd7d7d7',
};
exports.hairStyle = {
  0: 'Battle Hawk',
  1: 'Wolf Mane',
  2: 'Enchanter',
  3: 'Wild Growth',
  4: 'Pixel',
  5: 'Sunrise',
  6: 'Bouffant',
  7: 'Agleam Spike',
  8: 'Wayfinder',
  9: 'Faded Topknot',
  10: 'Side Shave',
  11: 'Ronin',
  16: 'Gruff',
  17: 'Rogue Locs',
  18: 'Stone Cold',
  19: 'Zinra's Tail',
  20: 'Hedgehog',
  21: 'Delinquent',
  24: 'Skegg',
  25: 'Shinobi',
  26: 'Sanjo',
  28: 'Perfect Form',
};
exports.backAppendage = {
  0: 'None',
  1: 'Monkey Tail',
  2: 'Cat Tail',
  3: 'Imp Tail',
  4: 'Minotaur Tail',
  5: 'Daishō',
  6: 'Kitsune Tail',
  7: 'Zweihänder',
  8: 'Skeletal Wings',
  9: 'Skeletal Tail',
  10: 'Afflicted Spikes',
  11: 'Traveler's Pack',
  16: 'Gryphon Wings',
  17: 'Draconic Wings',
  18: 'Butterfly Wings',
  19: 'Phoenix Wings',
  20: 'Fallen Angel',
  21: 'Crystal Wings',
  24: 'Aura of the Inner Grove',
  25: 'Ancient Orbs',
  26: 'Arachnid Legs',
  28: 'Cecaelia Tentacles',
};
exports.headAppendage = {
  0: 'None',
  1: 'Kitsune Ears',
  2: 'Satyr Horns',
  3: 'Ram Horns',
  4: 'Imp Horns',
  5: 'Cat Ears',
  6: 'Minotaur Horns',
  7: 'Faun Horns',
  8: 'Draconic Horns',
  9: 'Fae Circlet',
  10: 'Ragfly Antennae',
  11: 'Royal Crown',
  16: 'Jagged Horns',
  17: 'Spindle Horns',
  18: 'Bear Ears',
  19: 'Antennae',
  20: 'Fallen Angel Coronet',
  21: 'Power Horn',
  24: 'Wood Elf Ears',
  25: 'Snow Elf Ears',
  26: 'Cranial Wings',
  28: 'Insight Jewel',
};

exports.traits = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
  14: 14,
  15: 15,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  20: 20,
  21: 21,
  22: 22,
  23: 23,
  24: 24,
  25: 25,
  26: 26,
  27: 27,
  28: 28,
  29: 29,
  30: 30,
  31: 31,
};

exports.subClass = exports.class;
exports.profession = {
  0: 'mining',
  2: 'gardening',
  4: 'fishing',
  6: 'foraging',
};

// Attacks mapping is also used for visual and stat unknowns
exports.attacks = {
	0: 'Poisoned Blade',
	1: 'Blinding Winds',
	2: 'Heal',
	3: 'Cleanse',
	4: 'Iron Skin',
	5: 'Speed',
	6: 'Critical Aim',
	7: 'Deathmark',
  8: 'Basic9',
  9: 'Basic10',
  10: 'Basic11',
  11: 'Basic12',
  16: 'Exhaust',
	17: 'Daze',
	18: 'Explosion',
	19: 'Hardened Shield',
  20: 'Advanced5',
  21: 'Advanced6',
  22: 'Advanced7',
  23: 'Advanced8',
	24: 'Stun',
	25: 'Second Wind',
  26: 'Elite3',
  27: 'Elite4',
	28: 'Resurrection',
  29: 'Transcendent2',
};
exports.defenses = {
  0: 'Duelist',
  1: 'Clutch',
  2: 'Foresight',
  3: 'Headstrong',
  4: 'Clear Vision',
  5: 'Fearless',
  6: 'Chatterbox',
  7: 'Stalwart',
  8: 'Basic9',
  9: 'Basic10',
  10: 'Basic11',
  11: 'Basic12',
  16: 'Leadership',
  17: 'Efficient',
  18: 'Intimidation',
  19: 'Toxic',
  20: 'Advanced5',
  21: 'Advanced6',
  22: 'Advanced7',
  23: 'Advanced8',
  24: 'Giant Slayer',
  25: 'Last Stand',
  26: 'Elite3',
  27: 'Elite4',
  28: 'Second Life',
  29: 'Transcendent2',
};
exports.passive1 = exports.defenses;
exports.passive2 = exports.defenses;
exports.active1 = exports.attacks;
exports.active2 = exports.attacks;
exports.statBoost1 = {
  0: 'STR',
  2: 'AGI',
  4: 'INT',
  6: 'WIS',
  8: 'LCK',
  10: 'VIT',
  12: 'END',
  14: 'DEX',
};
exports.statBoost2 = {
  0: 'STR',
  2: 'AGI',
  4: 'INT',
  6: 'WIS',
  8: 'LCK',
  10: 'VIT',
  12: 'END',
  14: 'DEX',
};
exports.element = {
  0: 'fire',
  2: 'water',
  4: 'earth',
  6: 'wind',
  8: 'lightning',
  10: 'ice',
  12: 'light',
  14: 'dark',
};
exports.visualUnknown1 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  24: 24,
  25: 25,
  28: 28,
};
exports.visualUnknown2 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  24: 24,
  25: 25,
  28: 28,
};
exports.statsUnknown1 = {
  0: 'Blacksmithing',
  2: 'Goldsmithing',
  4: 'Armorsmithing',
  6: 'Woodworking',
  8: 'Leatherworking',
  10: 'Tailoring',
  12: 'Enchanting',
  14: 'Alchemy',
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  24: 24,
  25: 25,
  28: 28,
};
exports.statsUnknown2 = {
  0: 'Blacksmithing',
  2: 'Goldsmithing',
  4: 'Armorsmithing',
  6: 'Woodworking',
  8: 'Leatherworking',
  10: 'Tailoring',
  12: 'Enchanting',
  14: 'Alchemy',
  16: 16,
  17: 17,
  18: 18,
  19: 19,
  24: 24,
  25: 25,
  28: 28,
};
