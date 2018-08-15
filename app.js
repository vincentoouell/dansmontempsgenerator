var fs = require("fs");
var mots = ["le","la","les","nos","notre","vos","votre"];
var sp   = ["s", "s", "p", "p", "p", "p", "s"];
var kidoo = mots.length;

var nbr = Math.floor(Math.random()*kidoo);
var nbr2 = Math.floor(Math.random()*kidoo);
const dansmontemps = `Dans mon temps, ${mots[nbr]}`;

var adj = JSON.parse(fs.readFileSync("adjectifs.json"));
var noms = JSON.parse(fs.readFileSync("noms.json"));
var verbes = JSON.parse(fs.readFileSync("verbes.json"));

console.log(Object.keys(adj).length);

// NOM + ADJ + VERBE + MOT + NOM
