var players=["john","lampard"];

for(var i=0;i<players.length;i++) {

    console.log(players[i]); 
}
players.push("drogba");

for(var j in players)
console.log(players[j]  +"\b")

players.pop();
players.reverse();

console.log(players);








