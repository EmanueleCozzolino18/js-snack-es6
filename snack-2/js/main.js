/* STRICT MODE */
"use strict";

console.log("Script caricato correttamente!")

const teams = [
    { club: 'Napoli', points: 0, fouls: 0 },
    { club: 'Inter', points: 0, fouls: 0 },
    { club: 'Juventus', points: 0, fouls: 0 },
    { club: 'Milan', points: 0, fouls: 0 },
    { club: 'Catania', points: 0, fouls: 0 },
    { club: 'Atalanta', points: 0, fouls: 0 },
    { club: 'Roma', points: 0, fouls: 0 }
];

Object.keys(teams).forEach((club) => {
    teams[club].points = randomNumGen(1, 80);
    teams[club].fouls = randomNumGen(1, 100);
})
const newTeams = teams.map(({ club, fouls }) => ({ club, fouls }));

newTeams.forEach((team) => {
    console.log(`The club ${team.club} ended this season with ${team.fouls} total team fouls`);
})

function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}