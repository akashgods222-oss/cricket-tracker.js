const name="IND VS PAK-T20 World Cup";
const totalOvers=20;
const teamA="India"


let currentRuns=0;
let wicketsFallen=0;
let oversBowled=0;
let matchEnded=false;


currentRuns =currentRuns+6;
oversBowled =0.1;


currentRuns=currentRuns+1;
oversBowled =0.2;

wicketsFallen=wicketsFallen+1;
oversBowled=0.3;

console.log("=== 🔴 LIVE SCOREBOARD ===");
console.log("Match:",name);
console.log("Team:", teamA);
console.log("Score:", currentRuns + "/" + wicketsFallen);
console.log("Overs Bowled:", oversBowled + "/" + totalOvers);
console.log("Is Match Finished?:", matchEnded);
