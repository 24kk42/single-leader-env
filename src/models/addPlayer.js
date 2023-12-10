// addPlayer.js
const mongoose = require('mongoose');
const Player = require('./players');

const addPlayers = async (playersData) => {
  const addedPlayers = [];

  for (const playerData of playersData) {
    const player = new Player(playerData);
    const addedPlayer = await player.save();
    addedPlayers.push(addedPlayer);
  }

  return addedPlayers;
};

module.exports = addPlayers;
