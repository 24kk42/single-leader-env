const mongoose = require('mongoose');
const League = require('./leagues');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  founded: { type: Number, required: true },
  coach: { type: String, required: true },
  points: { type: Number, default: 0 },
  goalsFor: { type: Number, default: 0 },
  goalsAgainst: { type: Number, default: 0 },
  league: { type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;