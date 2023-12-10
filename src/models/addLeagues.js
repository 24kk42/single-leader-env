const mongoose = require('mongoose');
const League = require('./leagues');
const addLeagues = async (leaguesData) => {
    const addedLeagues = [];
  
    for (const leagueData of leaguesData) {
      const league = new League(leagueData);
      const addedLeague = await league.save();
      addedLeagues.push(addedLeague);
    }
  
    return addedLeagues;
  };
  module.exports = addLeagues;