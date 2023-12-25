
type myteam = {
    favteam: string;
  };
  type team = {
    team1: string;
    team2: string;
    team3: string;
    favteam: myteam;
    totalteams: number;
  };
  var worldCupSemiFinalTeams: team = {
    team1: "aus",
    team2: "eng",
    team3: "nz",
    favteam: {
      favteam: "pakistan",
    },
    totalteams: 4,
  };
  console.log(
    `Team1 ${worldCupSemiFinalTeams.team1} Team2 ${worldCupSemiFinalTeams.team2} Team3${worldCupSemiFinalTeams.team3} fav Team ${worldCupSemiFinalTeams.favteam.favteam} total teams ${worldCupSemiFinalTeams.totalteams} `
  );
  