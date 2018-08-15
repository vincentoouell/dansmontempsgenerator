var fs = require("fs");
var _ = require("underscore");

var adj = JSON.parse(fs.readFileSync("adjectifs.json"));
var noms = JSON.parse(fs.readFileSync("noms.json"));
var verbes = JSON.parse(fs.readFileSync("verbes.json"));

var mots = ["le","la","les","nos","notre","vos","votre"];
var sp   = ["s", "s", "p", "p", "s", "p", "s"];
var kidoo = mots.length;

var nbr = Math.floor(Math.random()*kidoo);
var p1 = sp[nbr];

let dansmontemps = `Dans mon temps, ${mots[nbr]} `;

var nbr = Math.floor(Math.random()*Object.keys(noms).length);
var nom1 = (p1 == "s")? _.keys(noms)[nbr]: _.values(noms)[nbr];

var nbr = Math.floor(Math.random()*Object.keys(adj).length);
var adj1 = (p1 == "s")? _.keys(adj)[nbr]: _.values(noms)[nbr];

var nbr = Math.floor(Math.random()*Object.keys(verbes).length);
var verbe1 = _.values(verbes)[nbr];

var nbr = Math.floor(Math.random()*kidoo);
var mot1 = mots[nbr];
var p3 = sp[nbr];

var nbr = Math.floor(Math.random()*Object.keys(noms).length);
var nom3 = (p3 == "s")? _.keys(noms)[nbr]: _.values(noms)[nbr];

console.log(dansmontemps + nom1 + ' ' + adj1 + ' ' + verbe1 + ' ' + mot1 + ' ' + nom3);

// NOM + ADJ + VERBE + MOT + NOM
