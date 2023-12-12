
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27017').then(() => {
    console.log('MongoDB is connected.');
}).catch(err => {
    console.error('MongoDB fault', err);
});


const leagueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
});

const League = mongoose.model('League', leagueSchema);

const leaguesData = [
    {
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
    {
        name: 'Ligue 1 Uber Eats',
        country: 'France',
    },
    {
        name: 'Serie A',
        country: 'Italy',
    }
];


const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    founded: { type: Number, required: true },
    coach: { type: String, required: true },
    points: { type: Number, required: true },
    goalsFor: { type: Number, required: true },
    goalsAgainst: { type: Number, required: true },
    league: { type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true },
});

const Team = mongoose.model('Team', teamSchema);



const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    position: { type: String, required: true },
    nationality: { type: String, required: true },
    goalsScored: { type: Number, default: 0 },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },


});


const Player = mongoose.model('Player', playerSchema);






League.insertMany(leaguesData).then(insertedLeagues => {
    const insertedTeams = [
        {
            name: 'Galatasaray',
            country: 'Turkey',
            founded: 1905,
            coach: 'Okan Buruk',
            points: 40,
            goalsFor: 31,
            goalsAgainst: 9,
            league: insertedLeagues.find(league => league.name === 'Trendyol Süper Lig')._id
        },
        {
            name: 'Fenerbahçe',
            country: 'Turkey',
            founded: 1907,
            coach: 'İsmail Kartal',
            points: 40,
            goalsFor: 40,
            goalsAgainst: 11,
            league: insertedLeagues.find(league => league.name === 'Trendyol Süper Lig')._id
        },
        {
            name: 'Beşiktaş',
            country: 'Turkey',
            founded: 1903,
            coach: 'Riza Çalimbay',
            points: 26,
            goalsFor: 22,
            goalsAgainst: 19,
            league: insertedLeagues.find(league => league.name === 'Trendyol Süper Lig')._id
        },
    
    
    
    
    
        {
            name: 'Liverpool',
            country: 'England',
            founded: 1892,
            coach: 'Jürgen Klopp',
            points: 37,
            goalsFor: 36,
            goalsAgainst: 15,
            league: insertedLeagues.find(league => league.name === 'Premier League')._id
        },
        {
            name: 'Manchester City',
            country: 'England',
            founded: 1894,
            coach: 'Pep Guardiola',
            points: 33,
            goalsFor: 38,
            goalsAgainst: 18,
            league: insertedLeagues.find(league => league.name === 'Premier League')._id
    
        },
        {
            name: 'Tottenham Hotspur',
            country: 'England',
            founded: 1882,
            coach: 'Ange Postecoglou',
            points: 30,
            goalsFor: 33,
            goalsAgainst: 23,
            league: insertedLeagues.find(league => league.name === 'Premier League')._id
    
        },
    
    
    
    
    
        {
            name: 'Real Madrid',
            country: 'Spain',
            founded: 1902,
            coach: 'Carlo Ancelotti',
            points: 39,
            goalsFor: 34,
            goalsAgainst: 10,
            league: insertedLeagues.find(league => league.name === 'LALIGA EA SPORTS')._id
    
        },
        {
            name: 'Barcelona',
            country: 'Spain',
            founded: 1899,
            coach: 'Xavi Hernandez',
            points: 37,
            goalsFor: 30,
            goalsAgainst: 14,
            league: insertedLeagues.find(league => league.name === 'LALIGA EA SPORTS')._id
    
        },
        {
            name: 'Atletico Madrid',
            country: 'Spain',
            founded: 1903,
            coach: 'Diego Simeone',
            points: 34,
            goalsFor: 32,
            goalsAgainst: 14,
            league: insertedLeagues.find(league => league.name === 'LALIGA EA SPORTS')._id
    
        },
    
    
        {
            name: 'Paris Saint-Germain',
            country: 'France',
            founded: 1970,
            coach: 'Luis Enrique',
            points: 36,
            goalsFor: 38,
            goalsAgainst: 12,
            league: insertedLeagues.find(league => league.name === 'Ligue 1 Uber Eats')._id
    
        },
        {
            name: 'Olympique de Marseille',
            country: 'France',
            founded: 1899,
            coach: 'Gennaro Gattuso',
            points: 23,
            goalsFor: 22,
            goalsAgainst: 16,
            league: insertedLeagues.find(league => league.name === 'Ligue 1 Uber Eats')._id
    
        },
        {
            name: 'Olympique Lyonnais',
            country: 'France',
            founded: 1950,
            coach: 'Pierre Sage',
            points: 10,
            goalsFor: 14,
            goalsAgainst: 27,
            league: insertedLeagues.find(league => league.name === 'Ligue 1 Uber Eats')._id
    
        },
    
    
        {
            name: 'AC Milan',
            country: 'Italy',
            founded: 1899,
            coach: 'Stefano Pioli',
            points: 29,
            goalsFor: 26,
            goalsAgainst: 18,
            league: insertedLeagues.find(league => league.name === 'Serie A')._id
    
        },
        {
            name: 'Inter Milan',
            country: 'Italy',
            founded: 1908,
            coach: 'Simeone Inzaghi',
            points: 38,
            goalsFor: 37,
            goalsAgainst: 7,
            league: insertedLeagues.find(league => league.name === 'Serie A')._id
    
        },
        {
            name: 'Juventus',
            country: 'Italy',
            founded: 1897,
            coach: 'Massimiliano Allegri',
            points: 36,
            goalsFor: 23,
            goalsAgainst: 9,
            league: insertedLeagues.find(league => league.name === 'Serie A')._id
    
        },
    ];
    
    console.log("Leagues inserted successfully");
    Team.insertMany(insertedTeams).then(insertedTeams => {

        const playersData = [
    
            {
                name: 'Fernando Muslera',
                age: 29,
                position: 'Defender',
                nationality: 'Turkish',
                goalsScored: 1,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Abdülkerim Bardakçi',
                age: 29,
                position: 'Defender',
                nationality: 'Turkish',
                goalsScored: 1,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Davinson Sanchez',
                age: 27,
                position: 'Defender',
                nationality: 'Colombian',
                goalsScored: 1,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Angelino',
                age: 26,
                position: 'Defender',
                nationality: 'Spanish',
                goalsScored: 0,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Sasha Boey',
                age: 23,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 1,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Lucas Torreira',
                age: 27,
                position: 'Midfielder',
                nationality: 'Uruguayan',
                goalsScored: 0,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Kerem Aktürkoğlu',
                age: 25,
                position: 'Midfielder',
                nationality: 'Turkish',
                goalsScored: 4,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Wilfried Zaha',
                age: 25,
                position: 'Forward',
                nationality: 'Ivory Coast',
                goalsScored: 5,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Dries Mertens',
                age: 25,
                position: 'Forward',
                nationality: 'Belgian',
                goalsScored: 2,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Hakim Ziyech',
                age: 30,
                position: 'Midfielder',
                nationality: 'Moroccan',
                goalsScored: 2,
                team: insertedTeams[0]._id,
            },
            {
                name: 'Mauro Icardi',
                age: 30,
                position: 'Forward',
                nationality: 'Argentinian',
                goalsScored: 12,
                team: insertedTeams[0]._id,
            },
    
    
    
    
    
            {
                name: 'Dominik Livakovic',
                age: 28,
                position: 'Goalkeeper',
                nationality: 'Croatian',
                goalsScored: 0,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Rodrigo Becao',
                age: 27,
                position: 'Defender',
                nationality: 'Brazilian',
                goalsScored: 0,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Alexander Djiku',
                age: 29,
                position: 'Defender',
                nationality: 'Ghanaian',
                goalsScored: 1,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Ferdi Kadioğlu',
                age: 24,
                position: 'Defender',
                nationality: 'Turkish',
                goalsScored: 0,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Bright Osayi-Samuel',
                age: 25,
                position: 'Defender',
                nationality: 'Nigerian',
                goalsScored: 2,
                team: insertedTeams[1]._id,
            },
            {
                name: 'İrfancan Kahveci',
                age: 28,
                position: 'Midfielder',
                nationality: 'Turkish',
                goalsScored: 6,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Fred',
                age: 30,
                position: 'Midfielder',
                nationality: 'Brazilian',
                goalsScored: 0,
                team: insertedTeams[1]._id,
            },
            {
                name: 'İsmail Yüksek',
                age: 24,
                position: 'Midfielder',
                nationality: 'Turkish',
                goalsScored: 0,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Sebastian Szymanski',
                age: 24,
                position: 'Midfielder',
                nationality: 'Polish',
                goalsScored: 8,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Dusan Tadic',
                age: 34,
                position: 'Midfielder',
                nationality: 'Serbian',
                goalsScored: 7,
                team: insertedTeams[1]._id,
            },
            {
                name: 'Edin Dzeko',
                age: 37,
                position: 'Forward',
                nationality: 'Bosnian',
                goalsScored: 12,
                team: insertedTeams[1]._id,
            },
    
    
    
    
    
            {
                name: 'Mert Günok',
                age: 34,
                position: 'Goalkeeper',
                nationality: 'Croatian',
                goalsScored: 0,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Daniel Amartey',
                age: 28,
                position: 'Defender',
                nationality: 'Ghanaian',
                goalsScored: 0,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Eric Bailly',
                age: 29,
                position: 'Defender',
                nationality: 'Ivory Coast',
                goalsScored: 0,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Umut Meraş',
                age: 27,
                position: 'Defender',
                nationality: 'Turkish',
                goalsScored: 0,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Onur Bulut',
                age: 29,
                position: 'Defender',
                nationality: 'Turkish',
                goalsScored: 0,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Ante Rebic',
                age: 30,
                position: 'Midfielder',
                nationality: 'Croatian',
                goalsScored: 0,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Necip Uysal',
                age: 32,
                position: 'Midfielder',
                nationality: 'Turkish',
                goalsScored: 0,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Alex Oxlade-Chamberlain',
                age: 30,
                position: 'Midfielder',
                nationality: 'English',
                goalsScored: 4,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Gedson Fernandes',
                age: 24,
                position: 'Midfielder',
                nationality: 'Portuguese',
                goalsScored: 1,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Cenk Tosun',
                age: 32,
                position: 'Forward',
                nationality: 'Turkish',
                goalsScored: 3,
                team: insertedTeams[2]._id,
            },
            {
                name: 'Vincent Aboubakar',
                age: 31,
                position: 'Forward',
                nationality: 'Cameroonian',
                goalsScored: 4,
                team: insertedTeams[2]._id,
            },
    
    
    
    
    
    
    
    
    
    
            {
                name: 'Alisson Becker',
                age: 31,
                position: 'Goalkeeper',
                nationality: 'Brasilian',
                goalsScored: 0,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Konstantinos Tsimikas',
                age: 27,
                position: 'Defender',
                nationality: 'Greek',
                goalsScored: 0,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Virgil van Dijk',
                age: 32,
                position: 'Defender',
                nationality: 'Dutch',
                goalsScored: 1,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Jarell Quansah',
                age: 20,
                position: 'Defender',
                nationality: 'English',
                goalsScored: 0,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Trent Alexander-Arnold',
                age: 25,
                position: 'Defender',
                nationality: 'English',
                goalsScored: 2,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Ryan Gravenberch',
                age: 21,
                position: 'Midfielder',
                nationality: 'Dutch',
                goalsScored: 0,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Wataru Endo',
                age: 30,
                position: 'Midfielder',
                nationality: 'Japanese',
                goalsScored: 1,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Dominik Szoboszlai',
                age: 23,
                position: 'Midfielder',
                nationality: 'Hungarian',
                goalsScored: 2,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Luis Diaz',
                age: 26,
                position: 'Forward',
                nationality: 'Colombian',
                goalsScored: 3,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Darwin Nunez',
                age: 24,
                position: 'Forward',
                nationality: 'Uruguayan',
                goalsScored: 4,
                team: insertedTeams[3]._id,
            },
            {
                name: 'Mohamed Salah',
                age: 31,
                position: 'Forward',
                nationality: 'Egyptian',
                goalsScored: 11,
                team: insertedTeams[3]._id,
            },
    
    
    
    
    
            {
                name: 'Ederson',
                age: 30,
                position: 'Goalkeeper',
                nationality: 'Brasilian',
                goalsScored: 0,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Josko Gvardiol',
                age: 21,
                position: 'Defender',
                nationality: 'Croatian',
                goalsScored: 0,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Nathan Ake',
                age: 28,
                position: 'Defender',
                nationality: 'Dutch',
                goalsScored: 2,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Ruben Dias',
                age: 26,
                position: 'Defender',
                nationality: 'Portuguese',
                goalsScored: 0,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Kyle Walker',
                age: 33,
                position: 'Defender',
                nationality: 'English',
                goalsScored: 0,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Bernardo Silva',
                age: 29,
                position: 'Midfielder',
                nationality: 'Portuguese',
                goalsScored: 4,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Rodri',
                age: 27,
                position: 'Midfielder',
                nationality: 'Spanish',
                goalsScored: 3,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Matteo Kovacic',
                age: 28,
                position: 'Midfielder',
                nationality: 'Croatian',
                goalsScored: 0,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Phil Foden',
                age: 23,
                position: 'Forward',
                nationality: 'English',
                goalsScored: 4,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Jack Grealish',
                age: 28,
                position: 'Forward',
                nationality: 'English',
                goalsScored: 2,
                team: insertedTeams[4]._id,
            },
            {
                name: 'Erling Haaland',
                age: 23,
                position: 'Forward',
                nationality: 'Norwegian',
                goalsScored: 14,
                team: insertedTeams[4]._id,
            },
    
    
    
    
    
            {
                name: 'Guglielmo Vicario',
                age: 27,
                position: 'Goalkeeper',
                nationality: 'Italian',
                goalsScored: 0,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Destiny Udogie',
                age: 21,
                position: 'Defender',
                nationality: 'Italian',
                goalsScored: 1,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Micky van de Ven',
                age: 22,
                position: 'Defender',
                nationality: 'Dutch',
                goalsScored: 1,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Cristian Romero',
                age: 25,
                position: 'Defender',
                nationality: 'Argentinian',
                goalsScored: 3,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Pedro Porro',
                age: 24,
                position: 'Defender',
                nationality: 'Spanish',
                goalsScored: 0,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Pape Sarr',
                age: 21,
                position: 'Midfielder',
                nationality: 'Senegalese',
                goalsScored: 1,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Yves Bissouma',
                age: 27,
                position: 'Midfielder',
                nationality: 'Malian',
                goalsScored: 0,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Brennan Johnson',
                age: 22,
                position: 'Forward',
                nationality: 'Welsh',
                goalsScored: 1,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Dejan Kulusevski',
                age: 23,
                position: 'Forward',
                nationality: 'Swedish',
                goalsScored: 4,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Heung-Min Son',
                age: 31,
                position: 'Forward',
                nationality: 'South Korean',
                goalsScored: 10,
                team: insertedTeams[5]._id,
            },
            {
                name: 'Richarlison',
                age: 26,
                position: 'Forward',
                nationality: 'Brasilian',
                goalsScored: 3,
                team: insertedTeams[5]._id,
            },
    
    
    
    
    
    
    
    
    
    
            {
                name: 'Thibaut Courtois',
                age: 31,
                position: 'Goalkeeper',
                nationality: 'Belgian',
                goalsScored: 0,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Ferland Mendy',
                age: 28,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[6]._id,
            },
            {
                name: 'David Alaba',
                age: 31,
                position: 'Defender',
                nationality: 'Austrian',
                goalsScored: 0,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Anthony Rüdiger',
                age: 30,
                position: 'Defender',
                nationality: 'German',
                goalsScored: 0,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Lucas Vazquez',
                age: 32,
                position: 'Defender',
                nationality: 'Spanish',
                goalsScored: 0,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Toni Kroos',
                age: 33,
                position: 'Midfielder',
                nationality: 'German',
                goalsScored: 1,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Federico Valverde',
                age: 25,
                position: 'Midfielder',
                nationality: 'Uruguayan',
                goalsScored: 1,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Jude Bellingham',
                age: 20,
                position: 'Midfielder',
                nationality: 'English',
                goalsScored: 12,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Luka Modric',
                age: 38,
                position: 'Midfielder',
                nationality: 'Croatian',
                goalsScored: 0,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Brahim Diaz',
                age: 24,
                position: 'Midfielder',
                nationality: 'Spanish',
                goalsScored: 2,
                team: insertedTeams[6]._id,
            },
            {
                name: 'Rodrygo',
                age: 22,
                position: 'Forward',
                nationality: 'Brasilian',
                goalsScored: 6,
                team: insertedTeams[6]._id,
            },
    
    
    
    
    
            {
                name: 'Marc-Andre Ter Stegen',
                age: 31,
                position: 'Goalkeeper',
                nationality: 'German',
                goalsScored: 0,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Ronald Araujo',
                age: 24,
                position: 'Defender',
                nationality: 'Uruguayan',
                goalsScored: 0,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Jules Kounde',
                age: 25,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 1,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Joao Cancelo',
                age: 29,
                position: 'Defender',
                nationality: 'Portuguese',
                goalsScored: 2,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Andreas Christensen',
                age: 27,
                position: 'Defender',
                nationality: 'Danish',
                goalsScored: 0,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Pedri',
                age: 21,
                position: 'Midfielder',
                nationality: 'Spanish',
                goalsScored: 1,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Ilkay Gündoğan',
                age: 33,
                position: 'Midfielder',
                nationality: 'German',
                goalsScored: 2,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Frenkie de Jong',
                age: 26,
                position: 'Midfielder',
                nationality: 'Dutch',
                goalsScored: 1,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Joao Felix',
                age: 24,
                position: 'Forward',
                nationality: 'Portuguese',
                goalsScored: 2,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Raphinha',
                age: 26,
                position: 'Forward',
                nationality: 'Brasilian',
                goalsScored: 2,
                team: insertedTeams[7]._id,
            },
            {
                name: 'Robert Lewandowski',
                age: 35,
                position: 'Forward',
                nationality: 'Polish',
                goalsScored: 8,
                team: insertedTeams[7]._id,
            },
    
    
    
    
    
            {
                name: 'Jan Oblak',
                age: 30,
                position: 'Goalkeeper',
                nationality: 'Slovenian',
                goalsScored: 0,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Cesar Azpilicueta',
                age: 34,
                position: 'Defender',
                nationality: 'Spanish',
                goalsScored: 0,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Axel Witsel',
                age: 34,
                position: 'Defender',
                nationality: 'Belgian',
                goalsScored: 1,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Sefan Savic',
                age: 32,
                position: 'Defender',
                nationality: 'Albanian',
                goalsScored: 0,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Samuel Lino',
                age: 23,
                position: 'Midfielder',
                nationality: 'Brasilian',
                goalsScored: 2,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Koke',
                age: 31,
                position: 'Midfielder',
                nationality: 'Spanish',
                goalsScored: 1,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Rodrigo De Paul',
                age: 29,
                position: 'Midfielder',
                nationality: 'Argentinian',
                goalsScored: 0,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Marcos Llorente',
                age: 28,
                position: 'Midfielder',
                nationality: 'Spanish',
                goalsScored: 2,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Antoine Griezmann',
                age: 32,
                position: 'Forward',
                nationality: 'French',
                goalsScored: 9,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Angel Correa',
                age: 28,
                position: 'Forward',
                nationality: 'Argentinian',
                goalsScored: 4,
                team: insertedTeams[8]._id,
            },
            {
                name: 'Alvaro Morata',
                age: 31,
                position: 'Forward',
                nationality: 'Spanish',
                goalsScored: 8,
                team: insertedTeams[8]._id,
            },
    
    
    
    
    
    
    
    
    
    
            {
                name: 'Gianluigi Donnarumma',
                age: 24,
                position: 'Goalkeeper',
                nationality: 'Italian',
                goalsScored: 0,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Marquinhos',
                age: 32,
                position: 'Defender',
                nationality: 'Brasilian',
                goalsScored: 0,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Milan Skriniar',
                age: 28,
                position: 'Defender',
                nationality: 'Slovakian',
                goalsScored: 0,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Achraf Hakimi',
                age: 25,
                position: 'Defender',
                nationality: 'Moroccan',
                goalsScored: 3,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Lucas Hernandez',
                age: 27,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Vitinha',
                age: 23,
                position: 'Midfielder',
                nationality: 'Portuguese',
                goalsScored: 4,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Manuel Ugarte',
                age: 22,
                position: 'Midfielder',
                nationality: 'Uruguayan',
                goalsScored: 0,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Carlos Soler',
                age: 26,
                position: 'Midfielder',
                nationality: 'Spanish',
                goalsScored: 1,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Ousmanne Dembele',
                age: 26,
                position: 'Forward',
                nationality: 'French',
                goalsScored: 1,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Kang-in Lee',
                age: 22,
                position: 'Forward',
                nationality: 'South Korean',
                goalsScored: 1,
                team: insertedTeams[9]._id,
            },
            {
                name: 'Kylian Mbappe',
                age: 24,
                position: 'Forward',
                nationality: 'French',
                goalsScored: 15,
                team: insertedTeams[9]._id,
            },
    
    
    
    
    
            {
                name: 'Pau Lopez',
                age: 28,
                position: 'Goalkeeper',
                nationality: 'Spanish',
                goalsScored: 0,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Renan Lodi',
                age: 25,
                position: 'Defender',
                nationality: 'Brasilian',
                goalsScored: 0,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Jonathan Clauss',
                age: 31,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 1,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Chancel Mbemba',
                age: 29,
                position: 'Defender',
                nationality: 'Congolese',
                goalsScored: 2,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Samuel Gigot',
                age: 30,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Geoffrey Kondogbia',
                age: 23,
                position: 'Midfielder',
                nationality: 'Central African',
                goalsScored: 4,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Pape Gueye',
                age: 24,
                position: 'Midfielder',
                nationality: 'Senegalese',
                goalsScored: 0,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Valentin Rongier',
                age: 29,
                position: 'Midfielder',
                nationality: 'French',
                goalsScored: 1,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Ismaila Sarr',
                age: 25,
                position: 'Forward',
                nationality: 'Senegalese',
                goalsScored: 3,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Vitinha',
                age: 23,
                position: 'Forward',
                nationality: 'Portuguese',
                goalsScored: 3,
                team: insertedTeams[10]._id,
            },
            {
                name: 'Pierre-Emerick Aubameyang',
                age: 34,
                position: 'Forward',
                nationality: 'Gabonese',
                goalsScored: 5,
                team: insertedTeams[10]._id,
            },
    
    
    
    
    
            {
                name: 'Anthony Lopes',
                age: 33,
                position: 'Goalkeeper',
                nationality: 'Portuguese',
                goalsScored: 0,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Sinaly Diomande',
                age: 22,
                position: 'Defender',
                nationality: 'Ivory Coast',
                goalsScored: 0,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Duje Caleta-Car',
                age: 27,
                position: 'Defender',
                nationality: 'Croatian',
                goalsScored: 0,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Nicolas Tagliacifco',
                age: 31,
                position: 'Defender',
                nationality: 'Argentinian',
                goalsScored: 1,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Sael Kumbedi',
                age: 18,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Maxence Caqueret',
                age: 23,
                position: 'Midfielder',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Corentin Tolisso',
                age: 29,
                position: 'Midfielder',
                nationality: 'French',
                goalsScored: 1,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Rayan Cherki',
                age: 20,
                position: 'Midfielder',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Jeffinho',
                age: 23,
                position: 'Forward',
                nationality: 'Brasilian',
                goalsScored: 0,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Ernest Nuamah',
                age: 20,
                position: 'Forward',
                nationality: 'Ghanaian',
                goalsScored: 1,
                team: insertedTeams[11]._id,
            },
            {
                name: 'Alexandre Lacazette',
                age: 32,
                position: 'Forward',
                nationality: 'French',
                goalsScored: 6,
                team: insertedTeams[11]._id,
            },
    
    
    
    
    
    
    
    
    
    
            {
                name: 'Mike Maignan',
                age: 28,
                position: 'Goalkeeper',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Fikayo Tomori',
                age: 25,
                position: 'Defender',
                nationality: 'English',
                goalsScored: 2,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Simon Kjaer',
                age: 34,
                position: 'Defender',
                nationality: 'Danish',
                goalsScored: 0,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Theo Hernandez',
                age: 26,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 2,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Davide Calabria',
                age: 27,
                position: 'Defender',
                nationality: 'Italian',
                goalsScored: 0,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Tijani Rejinders',
                age: 25,
                position: 'Midfielder',
                nationality: 'Dutch',
                goalsScored: 1,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Ismael Bennacer',
                age: 26,
                position: 'Midfielder',
                nationality: 'Algerian',
                goalsScored: 0,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Ruben Loftus-Cheek',
                age: 27,
                position: 'Midfielder',
                nationality: 'English',
                goalsScored: 1,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Rafael Leao',
                age: 24,
                position: 'Forward',
                nationality: 'Portuguese',
                goalsScored: 3,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Samuel Chukwueze',
                age: 24,
                position: 'Forward',
                nationality: 'Nigerian',
                goalsScored: 0,
                team: insertedTeams[12]._id,
            },
            {
                name: 'Oliver Giroud',
                age: 37,
                position: 'Forward',
                nationality: 'French',
                goalsScored: 8,
                team: insertedTeams[12]._id,
            },
    
    
    
    
    
            {
                name: 'Yann Sommer',
                age: 34,
                position: 'Goalkeeper',
                nationality: 'Swiss',
                goalsScored: 0,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Alessandro Bastoni',
                age: 24,
                position: 'Defender',
                nationality: 'Italian',
                goalsScored: 0,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Benjamin Pavard',
                age: 27,
                position: 'Defender',
                nationality: 'French',
                goalsScored: 0,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Francesco Acerbi',
                age: 35,
                position: 'Defender',
                nationality: 'Italian',
                goalsScored: 1,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Federico Dimarco',
                age: 26,
                position: 'Defender',
                nationality: 'Italian',
                goalsScored: 3,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Denzel Dumfries',
                age: 27,
                position: 'Defender',
                nationality: 'Dutch',
                goalsScored: 0,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Hakan Çalhanoğlu',
                age: 29,
                position: 'Midfielder',
                nationality: 'Turkish',
                goalsScored: 7,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Nicolo Barella',
                age: 26,
                position: 'Midfielder',
                nationality: 'Italian',
                goalsScored: 1,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Henrikh Mkhitaryan',
                age: 34,
                position: 'Midfielder',
                nationality: 'Armenian',
                goalsScored: 2,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Lautaro Martinez',
                age: 26,
                position: 'Forward',
                nationality: 'Argentinian',
                goalsScored: 14,
                team: insertedTeams[13]._id,
            },
            {
                name: 'Marcus Thuram',
                age: 26,
                position: 'Forward',
                nationality: 'French',
                goalsScored: 6,
                team: insertedTeams[13]._id,
            },
    
    
    
    
    
            {
                name: 'Wojciech Szczesny',
                age: 33,
                position: 'Goalkeeper',
                nationality: 'Polish',
                goalsScored: 0,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Alex Sandro',
                age: 32,
                position: 'Defender',
                nationality: 'Brasilian',
                goalsScored: 0,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Bremer',
                age: 26,
                position: 'Defender',
                nationality: 'Brasilian',
                goalsScored: 0,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Danilo',
                age: 32,
                position: 'Defender',
                nationality: 'Brasilian',
                goalsScored: 1,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Mattia De Sciglio',
                age: 31,
                position: 'Defender',
                nationality: 'Italian',
                goalsScored: 0,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Fabio Miretti',
                age: 20,
                position: 'Midfielder',
                nationality: 'Italian',
                goalsScored: 1,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Manuel Locatelli',
                age: 25,
                position: 'Midfielder',
                nationality: 'Italian',
                goalsScored: 1,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Adrian Rabiot',
                age: 28,
                position: 'Midfielder',
                nationality: 'French',
                goalsScored: 2,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Moise Kean',
                age: 23,
                position: 'Forward',
                nationality: 'Italian',
                goalsScored: 0,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Federico Chiesa',
                age: 26,
                position: 'Forward',
                nationality: 'Italian',
                goalsScored: 4,
                team: insertedTeams[14]._id,
            },
            {
                name: 'Dusan Vlahovic',
                age: 23,
                position: 'Forward',
                nationality: 'Serbian',
                goalsScored: 5,
                team: insertedTeams[14]._id,
            },
        ];
    
        Player.insertMany(playersData).then(() => {
            console.log("Players inserted successfully");
        }).catch(err => {
            console.error("Error inserting players:", err);
        });
    }).catch(err => {
        console.error("Error inserting teams:", err);
    });
}).catch(err => {
    console.error("Error inserting leagues:", err);
});



// Insert a single League
function insertLeague(leagueData) {
    return League.create(leagueData);
}

// Insert a single Team
function insertTeam(teamData) {
    return Team.create(teamData);
}

// Insert a single Player
function insertPlayer(playerData) {
    return Player.create(playerData);
}

// Find all leagues
function findAllLeagues() {
    return League.find({});
}

// Find a league by name
function findLeagueByName(name) {
    return League.findOne({ name });
}

// Find all teams in a country
function findTeamsByCountry(country) {
    return Team.find({ country });
}

// Find player by name
function findPlayerByName(name) {
    return Player.findOne({ name });
}

// Update a league's name
function updateLeague(oldName, newName) {
    return League.updateOne({ name: oldName }, { $set: { name: newName } });
}

// Update a team's points

function updateTeamPoints(teamName, newPoints) {
    return Team.updateOne({ name: teamName }, { $set: { points: newPoints } });
}

// Update a player's team
function updatePlayerTeam(playerName, newTeamId) {
    return Player.updateOne({ name: playerName }, { $set: { team: newTeamId } });
}

// Delete a league by ID
function deleteLeague(leagueId) {
    return League.deleteOne({ _id: leagueId });
}

// Delete a team by ID
function deleteTeam(teamId) {
    return Team.deleteOne({ _id: teamId });
}

// Delete a player by ID
function deletePlayer(playerId) {
    return Player.deleteOne({ _id: playerId });
}

// Update a team's information
function updateTeam(teamId, updatedData) {
    return Team.updateOne({ _id: teamId }, { $set: updatedData });
}

// Update a player's information
function updatePlayer(playerId, updatedData) {
    return Player.updateOne({ _id: playerId }, { $set: updatedData });
}

// Find the ID of a league by its name
function findLeagueIdByName(name) {
    return League.findOne({ name }, '_id');
}

// Find the ID of a team by its name
function findTeamIdByName(name) {
    return Team.findOne({ name }, '_id');
}

// Find the ID of a player by their name
function findPlayerIdByName(name) {
    return Player.findOne({ name }, '_id');
}






module.exports = {
    insertLeague,
    insertTeam,
    insertPlayer,
    findAllLeagues,
    findLeagueByName,
    findTeamsByCountry,
    findPlayerByName,
    updateLeague,
    updateTeamPoints,
    updatePlayerTeam,
    findLeagueIdByName,
    findTeamIdByName,
    findPlayerIdByName,
    deleteLeague,
    deleteTeam,
    deletePlayer,
    updateTeam,
    updatePlayer
};