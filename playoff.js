export default class Playoff {
  constructor(teams) {
    this.teams = teams;
    this.matchDay = [];
  }

  setupTeams(teams) {
    this.teams = [];
    for (let teamName of teams) {
      let teamObj = this.customizeTeam(teamName);
      this.teams.push(teamObj);
    }
  }

  customizeTeam(teamName) {
    return {
      name: teamName,
    };
  }

  nextRoundPlayoff() {
    this.matchDay = [];
    for (let j = 0; j < this.teams.length / 2; j++) {
      // generamos un template de partido
      let match = { home: "home", away: "away" };
      this.matchDay.push(match);
    }
    this.setTeamsToMatch();

    this.matches = [];
    this.matchDay.forEach((x) => {
      let result = this.play(x);
      while (result.awayGoals === result.homeGoals) {
        result = this.play(x);
      }
      this.matches.push(result);
    });
    return this.matches;
  }

  setTeamsToMatch() {
    let teamIndex = 0;
    this.matchDay.forEach((element) => {
      element.home = this.teams[teamIndex];
      teamIndex++;
      element.away = this.teams[teamIndex];
      teamIndex++;
    });
  }

  play(match) {
    let team1 = match.home;
    let team2 = match.away;
    const homeGoals = this.generateGoals();
    const awayGoals = this.generateGoals();
    if (homeGoals !== awayGoals) {
      if (homeGoals > awayGoals) {
        let j = this.teams.find((x) => x === match.away);
        let i = this.teams.indexOf(j);
        if (i !== -1) {
          this.teams.splice(i, 1);
        }
      } else {
        let j = this.teams.find((x) => x === match.home);
        let i = this.teams.indexOf(j);
        if (i !== -1) {
          this.teams.splice(i, 1);
        }
      }
    }
    return {
      team1,
      homeGoals,
      team2,
      awayGoals,
    };
  }

  generateGoals() {
    return Math.floor(Math.random() * 10);
  }
}
