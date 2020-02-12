var club=["chelsea","bayern"];
club.push("manu"); //Normal push operation.

for(var i in club)
//console.log(club[i])

//var first=club.shift(); //this to remove the first element from the array. 

for(var i in club)
//console.log('removing first element clubs are' +'\t' +club[i])

var removedarray=club.slice(0,2);

console.log(club);
console.log(removedarray);


