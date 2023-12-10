const mongoose = require("mongoose");
const getAllTeams = require('./src/models/teams');
const getAllPlayers = require('./src/models/players');
const addTeams = require('./src/models/addTeam');
const addPlayers = require('./src/models/addPlayer');
const League = require('./src/models/leagues');

mongoose.connect('mongodb://localhost:27017/myDb');

const exampleUsage = async () => {
  // Create a league
  const league = new League({
    name: 'Süper Lig',
    country: 'Turkey',
  });
  const savedLeague = await league.save();

  const teamsData = [
    {
      name: 'Galatasaray',
      country: 'Turkey',
      founded: 1905,
      coach: 'Okan Buruk',
      points: 40,
      goalsFor: 31,
      goalsAgainst: 9,
    },
    {
      name: 'Fenerbahçe',
      country: 'Turkey',
      founded: 1907,
      coach: 'İsmail Kartal',
      points: 40,
      goalsFor: 40,
      goalsAgainst: 11,
    },
    {
      name: 'Beşiktaş',
      country: 'Turkey',
      founded: 1903,
      coach: 'Riza Çalimbay',
      points: 26,
      goalsFor: 22,
      goalsAgainst: 19,
    },
    {
      name: 'Trabzonspor',
      country: 'Turkey',
      founded: 1967,
      coach: 'Abdullah Avci',
      points: 26,
      goalsFor: 24,
      goalsAgainst: 18,
    },
    {
      name: 'Adana Demirspor',
      country: 'Turkey',
      founded: 1940,
      coach: 'Patrick Kluivert',
      points: 23,
      goalsFor: 27,
      goalsAgainst: 19,
    }
  ];

  const addedTeams = await addTeams(savedLeague._id, teamsData);
  console.log('Added Teams:', addedTeams);

  const playersData = [
    {
      name: 'Fernando Muslera',
      age: 37,
      position: 'Goalkeeper',
      nationality: 'Uruguayan',
      goalsScored: 0,
      team: addedTeams[0]._id,
    },
    {
      name: 'Abdülkerim Bardakçi',
      age: 29,
      position: 'Defender',
      nationality: 'Turkish',
      goalsScored: 1,
      team: addedTeams[0]._id,
    },
    {
      name: 'Davinson Sanchez',
      age: 27,
      position: 'Defender',
      nationality: 'Colombian',
      goalsScored: 1,
      team: addedTeams[0]._id,
    },
    {
      name: 'Angelino',
      age: 26,
      position: 'Defender',
      nationality: 'Spanish',
      goalsScored: 0,
      team: addedTeams[0]._id,
    },
    {
      name: 'Sasha Boey',
      age: 23,
      position: 'Defender',
      nationality: 'French',
      goalsScored: 1,
      team: addedTeams[0]._id,
    },
    {
      name: 'Lucas Torreira',
      age: 27,
      position: 'Midfielder',
      nationality: 'Uruguayan',
      goalsScored: 0,
      team: addedTeams[0]._id,
    },
    {
      name: 'Kerem Aktürkoğlu',
      age: 25,
      position: 'Midfielder',
      nationality: 'Turkish',
      goalsScored: 4,
      team: addedTeams[0]._id,
    },
    {
      name: 'Wilfried Zaha',
      age: 25,
      position: 'Forward',
      nationality: 'Ivory Coast',
      goalsScored: 5,
      team: addedTeams[0]._id,
    },
    {
      name: 'Dries Mertens',
      age: 25,
      position: 'Forward',
      nationality: 'Belgian',
      goalsScored: 2,
      team: addedTeams[0]._id,
    },
    {
      name: 'Hakim Ziyech',
      age: 30,
      position: 'Midfielder',
      nationality: 'Moroccan',
      goalsScored: 2,
      team: addedTeams[0]._id,
    },
    {
      name: 'Mauro Icardi',
      age: 30,
      position: 'Forward',
      nationality: 'Argentinian',
      goalsScored: 12,
      team: addedTeams[0]._id,
    },
    
    

    {
      name: 'Dominik Livakovic',
      age: 28,
      position: 'Goalkeeper',
      nationality: 'Croatian',
      goalsScored: 0,
      team: addedTeams[1]._id,
    },
    {
      name: 'Rodrigo Becao',
      age: 27,
      position: 'Defender',
      nationality: 'Brazilian',
      goalsScored: 0,
      team: addedTeams[1]._id,
    },
    {
      name: 'Alexander Djiku',
      age: 29,
      position: 'Defender',
      nationality: 'Ghanaian',
      goalsScored: 1,
      team: addedTeams[1]._id,
    },
    {
      name: 'Ferdi Kadioğlu',
      age: 24,
      position: 'Defender',
      nationality: 'Turkish',
      goalsScored: 0,
      team: addedTeams[1]._id,
    },
    {
      name: 'Bright Osayi-Samuel',
      age: 25,
      position: 'Defender',
      nationality: 'Nigerian',
      goalsScored: 2,
      team: addedTeams[1]._id,
    },
    {
      name: 'İrfancan Kahveci',
      age: 28,
      position: 'Midfielder',
      nationality: 'Turkish',
      goalsScored: 6,
      team: addedTeams[1]._id,
    },
    {
      name: 'Fred',
      age: 30,
      position: 'Midfielder',
      nationality: 'Brazilian',
      goalsScored: 0,
      team: addedTeams[1]._id,
    },
    {
      name: 'İsmail Yüksek',
      age: 24,
      position: 'Midfielder',
      nationality: 'Turkish',
      goalsScored: 0,
      team: addedTeams[1]._id,
    },
    {
      name: 'Sebastian Szymanski',
      age: 24,
      position: 'Midfielder',
      nationality: 'Polish',
      goalsScored: 8,
      team: addedTeams[1]._id,
    },
    {
      name: 'Dusan Tadic',
      age: 34,
      position: 'Midfielder',
      nationality: 'Serbian',
      goalsScored: 7,
      team: addedTeams[1]._id,
    },
    {
      name: 'Edin Dzeko',
      age: 37,
      position: 'Forward',
      nationality: 'Bosnian',
      goalsScored: 12,
      team: addedTeams[1]._id,
    }




    
  ];

  const addedPlayers = await addPlayers(playersData);
  console.log('Added Players:', addedPlayers);

  const teams = await getAllTeams();
  console.log('All Teams:', teams);

  const players = await getAllPlayers();
  console.log('All Players:', players);
};

exampleUsage();
// ODM - ORM