const mongoose = require("mongoose");
const getAllTeams = require('./src/models/teams');
const getAllPlayers = require('./src/models/players');
const addTeams = require('./src/models/addTeam');
const addPlayers = require('./src/models/addPlayer');
const League = require('./src/models/leagues');
const addLeagues = require('./src/models/addLeagues');

mongoose.connect('mongodb://localhost:27017/myDb');

const exampleUsage = async () => {
  const leagues = await addLeagues([{
    name: 'Trendyol Süper Lig',
    country: 'Turkey',
  },
  {
    name: 'Premier League',
    country: 'England',
  },
  {
    name: 'LALIGA EA SPORTS',
    country: 'Spain',
  },
  ]);

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
      name: 'Liverpool',
      country: 'England',
      founded: 1892,
      coach: 'Jürgen Klopp',
      points: 37,
      goalsFor: 36,
      goalsAgainst: 15,
    },
    {
      name: 'Manchester City',
      country: 'England',
      founded: 1894,
      coach: 'Pep Guardiola',
      points: 33,
      goalsFor: 38,
      goalsAgainst: 18,
    },
    {
      name: 'Tottenham Hotspur',
      country: 'England',
      founded: 1882,
      coach: 'Ange Postecoglou',
      points: 30,
      goalsFor: 33,
      goalsAgainst: 23,
    },





    {
      name: 'Real Madrid',
      country: 'Spain',
      founded: 1902,
      coach: 'Carlo Ancelotti',
      points: 39,
      goalsFor: 34,
      goalsAgainst: 10,
    },
    {
      name: 'Barcelona',
      country: 'Spain',
      founded: 1899,
      coach: 'Xavi Hernandez',
      points: 37,
      goalsFor: 30,
      goalsAgainst: 14,
    },
    {
      name: 'Atletico Madrid',
      country: 'Spain',
      founded: 1903,
      coach: 'Diego Simeone',
      points: 34,
      goalsFor: 32,
      goalsAgainst: 14,
    },



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
    },



    {
      name: 'Mert Günok',
      age: 34,
      position: 'Goalkeeper',
      nationality: 'Croatian',
      goalsScored: 0,
      team: addedTeams[2]._id,
    },
    {
      name: 'Daniel Amartey',
      age: 28,
      position: 'Defender',
      nationality: 'Ghanaian',
      goalsScored: 0,
      team: addedTeams[2]._id,
    },
    {
      name: 'Eric Bailly',
      age: 29,
      position: 'Defender',
      nationality: 'Ivory Coast',
      goalsScored: 0,
      team: addedTeams[2]._id,
    },
    {
      name: 'Umut Meraş',
      age: 27,
      position: 'Defender',
      nationality: 'Turkish',
      goalsScored: 0,
      team: addedTeams[2]._id,
    },
    {
      name: 'Onur Bulut',
      age: 29,
      position: 'Defender',
      nationality: 'Turkish',
      goalsScored: 0,
      team: addedTeams[2]._id,
    },
    {
      name: 'Ante Rebic',
      age: 30,
      position: 'Midfielder',
      nationality: 'Croatian',
      goalsScored: 0,
      team: addedTeams[2]._id,
    },
    {
      name: 'Necip Uysal',
      age: 32,
      position: 'Midfielder',
      nationality: 'Turkish',
      goalsScored: 0,
      team: addedTeams[2]._id,
    },
    {
      name: 'Alex Oxlade-Chamberlain',
      age: 30,
      position: 'Midfielder',
      nationality: 'English',
      goalsScored: 4,
      team: addedTeams[2]._id,
    },
    {
      name: 'Gedson Fernandes',
      age: 24,
      position: 'Midfielder',
      nationality: 'Portuguese',
      goalsScored: 1,
      team: addedTeams[2]._id,
    },
    {
      name: 'Cenk Tosun',
      age: 32,
      position: 'Forward',
      nationality: 'Turkish',
      goalsScored: 3,
      team: addedTeams[2]._id,
    },
    {
      name: 'Vincent Aboubakar',
      age: 31,
      position: 'Forward',
      nationality: 'Cameroonian',
      goalsScored: 4,
      team: addedTeams[2]._id,
    },









    {
      name: 'Alisson Becker',
      age: 31,
      position: 'Goalkeeper',
      nationality: 'Brasilian',
      goalsScored: 0,
      team: addedTeams[3]._id,
    },
    {
      name: 'Konstantinos Tsimikas',
      age: 27,
      position: 'Defender',
      nationality: 'Greek',
      goalsScored: 0,
      team: addedTeams[3]._id,
    },
    {
      name: 'Virgil van Dijk',
      age: 32,
      position: 'Defender',
      nationality: 'Dutch',
      goalsScored: 1,
      team: addedTeams[3]._id,
    },
    {
      name: 'Jarell Quansah',
      age: 20,
      position: 'Defender',
      nationality: 'English',
      goalsScored: 0,
      team: addedTeams[3]._id,
    },
    {
      name: 'Trent Alexander-Arnold',
      age: 25,
      position: 'Defender',
      nationality: 'English',
      goalsScored: 2,
      team: addedTeams[3]._id,
    },
    {
      name: 'Ryan Gravenberch',
      age: 21,
      position: 'Midfielder',
      nationality: 'Dutch',
      goalsScored: 0,
      team: addedTeams[3]._id,
    },
    {
      name: 'Wataru Endo',
      age: 30,
      position: 'Midfielder',
      nationality: 'Japanese',
      goalsScored: 1,
      team: addedTeams[3]._id,
    },
    {
      name: 'Dominik Szoboszlai',
      age: 23,
      position: 'Midfielder',
      nationality: 'Hungarian',
      goalsScored: 2,
      team: addedTeams[3]._id,
    },
    {
      name: 'Luis Diaz',
      age: 26,
      position: 'Forward',
      nationality: 'Colombian',
      goalsScored: 3,
      team: addedTeams[3]._id,
    },
    {
      name: 'Darwin Nunez',
      age: 24,
      position: 'Forward',
      nationality: 'Uruguayan',
      goalsScored: 4,
      team: addedTeams[3]._id,
    },
    {
      name: 'Mohamed Salah',
      age: 31,
      position: 'Forward',
      nationality: 'Egyptian',
      goalsScored: 11,
      team: addedTeams[3]._id,
    },



    {
      name: 'Ederson',
      age: 30,
      position: 'Goalkeeper',
      nationality: 'Brasilian',
      goalsScored: 0,
      team: addedTeams[4]._id,
    },
    {
      name: 'Josko Gvardiol',
      age: 21,
      position: 'Defender',
      nationality: 'Croatian',
      goalsScored: 0,
      team: addedTeams[4]._id,
    },
    {
      name: 'Nathan Ake',
      age: 28,
      position: 'Defender',
      nationality: 'Dutch',
      goalsScored: 2,
      team: addedTeams[4]._id,
    },
    {
      name: 'Ruben Dias',
      age: 26,
      position: 'Defender',
      nationality: 'Portuguese',
      goalsScored: 0,
      team: addedTeams[4]._id,
    },
    {
      name: 'Kyle Walker',
      age: 33,
      position: 'Defender',
      nationality: 'English',
      goalsScored: 0,
      team: addedTeams[4]._id,
    },
    {
      name: 'Bernardo Silva',
      age: 29,
      position: 'Midfielder',
      nationality: 'Portuguese',
      goalsScored: 4,
      team: addedTeams[4]._id,
    },
    {
      name: 'Rodri',
      age: 27,
      position: 'Midfielder',
      nationality: 'Spanish',
      goalsScored: 3,
      team: addedTeams[4]._id,
    },
    {
      name: 'Matteo Kovacic',
      age: 28,
      position: 'Midfielder',
      nationality: 'Croatian',
      goalsScored: 0,
      team: addedTeams[4]._id,
    },
    {
      name: 'Phil Foden',
      age: 23,
      position: 'Forward',
      nationality: 'English',
      goalsScored: 4,
      team: addedTeams[4]._id,
    },
    {
      name: 'Jack Grealish',
      age: 28,
      position: 'Forward',
      nationality: 'English',
      goalsScored: 2,
      team: addedTeams[4]._id,
    },
    {
      name: 'Erling Haaland',
      age: 23,
      position: 'Forward',
      nationality: 'Norwegian',
      goalsScored: 14,
      team: addedTeams[4]._id,
    }
  ];

  const addedLeagues = await addPlayers(leagueData);
  console.log('Added Leagues:', addedLeagues);

  const addedPlayers = await addPlayers(playersData);
  console.log('Added Players:', addedPlayers);

  const teams = await getAllTeams();
  console.log('All Teams:', teams);

  const players = await getAllPlayers();
  console.log('All Players:', players);
};

exampleUsage();