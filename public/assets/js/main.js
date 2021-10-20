const teams = seedTeams();
document.getElementById("info").innerText = `Number of teams: ${teams.length}`;

// Group the teams into matchups.
const matchups = createMatchups(teams);

// Get the HTML template from the document.
const matchupTemplate = document.getElementById("matchup-template");

const app = document.getElementById("app");

// Iterate over the matchups to create the HTML elements.
for (let i = 0; i < matchups.length; i++) {
  // Clone the template.
  const matchup = matchupTemplate.content.cloneNode(true);
  // Get the outer div element.
  const matchupElement = matchup.querySelector(".matchup");

  const team1 = matchup.querySelector(".team-1");
  team1.querySelector(".team-name").innerText = matchups[i].team1.name;

  // Team 2 is either a team or a buy but since they're structured the same,
  // we can treat them the same here.
  const team2 = matchup.querySelector(".team-2");
  team2.querySelector(".team-name").innerText = matchups[i].team2.name;

  // Add a class for styling to the outer div element for buys.
  if (matchups[i].type === "buy") {
    matchupElement.classList.add("matchup-buy");
  }

  // Append the new matchup element to the DOM.
  app.appendChild(matchup);
}
