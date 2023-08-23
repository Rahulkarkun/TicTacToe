const Game = require('./Game');

const g1 = Game.newGame("Rahul", "Umaid");
console.log(g1.play(0));
console.log(g1.play(3));
console.log(g1.play(1));
console.log(g1.play(4));
console.log(g1.play(2));
console.log(g1.board.showBoard());
