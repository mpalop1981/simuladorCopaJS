import { worldCupTeams } from "./teams.js";

import { setupArrays } from "./utils/index.js";

import Playoff from "./playoff.js";

setupArrays();

try {
  worldCupTeams.shuffle();
  console.log("*******************");
  console.log("EQUIPOS INSCRITOS PARA PLAYOFF");
  worldCupTeams.forEach((element) => {
    console.log(element);
  });
  console.log("*******************");

  let playoffCup = new Playoff(worldCupTeams);

  let matches = playoffCup.nextRoundPlayoff();
  matches.forEach((x) => {
    console.log(`${x.team1} ${x.homeGoals} vs. ${x.team2} ${x.awayGoals}`);
  });

  console.log("*******************");
  console.log("EQUIPOS QUE PASAN A CUARTOS DE FINAL");
  worldCupTeams.forEach((element) => {
    console.log(element);
  });

  matches = playoffCup.nextRoundPlayoff();
  matches.forEach((x) => {
    console.log(`${x.team1} ${x.homeGoals} vs. ${x.team2} ${x.awayGoals}`);
  });

  console.log("*******************");
  console.log("EQUIPOS QUE PASAN A SEMIFINALES");
  worldCupTeams.forEach((element) => {
    console.log(element);
  });

  matches = playoffCup.nextRoundPlayoff();
  matches.forEach((x) => {
    console.log(`${x.team1} ${x.homeGoals} vs. ${x.team2} ${x.awayGoals}`);
  });

  console.log("*******************");
  console.log("EQUIPOS QUE PASAN A LA FINAL");
  worldCupTeams.forEach((element) => {
    console.log(element);
  });

  matches = playoffCup.nextRoundPlayoff();
  matches.forEach((x) => {
    console.log(`${x.team1} ${x.homeGoals} vs. ${x.team2} ${x.awayGoals}`);
  });
  
  console.log("*******************");
  if(matches[0].homeGoals > matches[0].awayGoals){
      console.log(`El equipo VENCEDOR de la copa es: ${matches[0].team1}`)
  }else{
      console.log(`El equipo VENCEDOR de la copa es: ${matches[0].team2}`)
  } 
} catch (error) {
  console.log("OH NO!");
  console.log(error.message);
}
