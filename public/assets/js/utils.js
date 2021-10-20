// Generate random integer .
const generateRandomInt = (max = 32, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Generate random number of team objects between 4 and 32.
// This function creates a random number of "teams". To be replaced by form inputs.
const seedTeams = () => {
  const MIN_TEAMS = 4;
  const MAX_TEAMS = 32;
  const numTeams = generateRandomInt(MAX_TEAMS, MIN_TEAMS);

  const teams = [];

  for (let i = 0; i < numTeams; i++) {
    const rank = i + 1;
    // This object shape could be anything.
    teams.push({
      rank,
      name: `Team ${rank}`,
    });
  }

  return teams;
};
