// This function checks if a given number is a "Power of 2".
// 2, 4, 8, 16, 32, 64, etc.
// https://stackoverflow.com/questions/30924280/what-is-the-best-way-to-determine-if-a-given-number-is-a-power-of-two#answer-30924352
const isPowerOfTwo = (x) => {
  return Math.log2(x) % 1 === 0;
};

// When the number of teams in the bracket is not a "Power of 2" the highest seeds receive "byes".
// 2, 4, 8, 16, 32, 64, etc.
// This function is used to find the number of buys needed.
// https://stackoverflow.com/questions/26965171/fast-nearest-power-of-2-in-javascript#answer-35111029
const getNextPowerOfTwo = (n) => {
  // If n is already a power of 2, just return it.
  if (isPowerOfTwo(n)) {
    return n;
  }

  let p = 2;
  while ((n >>= 1)) {
    p <<= 1;
  }

  return p;
};

// This function is responsible for creating the matchups.
// It does a lot of the heavy lifting.
const createMatchups = (teams) => {
  // Round-up the number of teams to a number of matchups that are a "Power of 2".
  const numMatchups = getNextPowerOfTwo(teams.length);

  // Figure out how many buys will be needed.
  const numBuys = numMatchups - teams.length;

  // Add buys to the teams array for convenience.
  for (let i = 0; i < numBuys; i++) {
    // This object shape could be anything.
    // It should match the shape that's in the seedTeams() function.
    teams.push({
      // Buys don't have a rank.
      rank: null,
      // What will be displayed in the app.
      name: "Buy",
    });
  }

  // A place to hold the team pairings.
  const matchups = [];

  // Loop over the first half of ranked teams,
  // Pairing the best with the worst, adding buys to the best to fill out the matchups.
  for (let i = 0; i < numMatchups / 2; i++) {
    // team1 of every matchup will be the next team in the array.
    const team1 = teams[i];
    // team2 will be either one of the buys we padded this array with or teams in reverse order.
    const team2 = teams[numMatchups - i - 1];

    // This object shape could be anything.
    const matchup = {
      type: team2.rank ? "matchup" : "buy",
      team1,
      team2,
    };

    matchups.push(matchup);
  }

  return matchups;
};
