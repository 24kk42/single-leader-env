const mongoose = require('mongoose');
const Team = require('./teams');

const addTeams = async (leagueId, teamsData) => {
  const addedTeams = [];

  for (const teamData of teamsData) {
    const team = new Team({ ...teamData, league: leagueId });
    const addedTeam = await team.save();
    addedTeams.push(addedTeam);
  }

  return addedTeams;
};

module.exports = addTeams;
