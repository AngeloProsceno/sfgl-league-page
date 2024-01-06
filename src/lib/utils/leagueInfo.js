/*   STEP 1   */
export const leagueID = "992340899759714304"; // your league ID
export const leagueName = "Sasha French Gambling League"; // your league name
export const dues = 75; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Sasha French Gambling League, a realm for the bold and the strategic, where every move is critical and only the shrewdest prevail. Here, we don't just play for fun – we play to win, and the competition is fierce.</p>
  <p>Expect no mercy, no easy victories, and no room for the weak. Brace yourself for a league where every week is a high-stakes challenge, every decision can make or break your season, and only the toughest come out on top.</p>
  <p>Welcome to the fucking show. </p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "992890139686846464",
      "name": "Harry Richter",
      "location": "Napa", // (optional)
      "bio": "Smells like poo",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Maybe next year",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "866561160424620032",
      "name": "Jack England",
      "location": "The Mountains", // (optional)
      "bio": "Fighting fires somewhere",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Fighting fires somewhere",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "995552303740616704",
      "name": "Owen Richter",
      "location": "Virginia", // (optional)
      "bio": "I'm just here so I don't get fined",
      "photo": "/managers/GlizzyGobblers.png", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "bal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "When does F1 start?",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "857472323664584704",
      "name": "Connor Bacci",
      "location": "Napa", // (optional)
      "bio": "pee pee poo poo",
      "photo": "/managers/BrockParty.png", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "lv", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "When do we get paid?",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "999925640587460608",
      "name": "Sasha French",
      "location": "MF Ireland", // (optional)
      "bio": "Really tall",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "research...",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "995927327571861504",
      "name": "Tom Salsmen",
      "location": "Napa", // (optional)
      "bio": "Like long walks on the beach",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "COLLUSION",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "995525897077821440",
      "name": "Finn Barry",
      "location": "The City", // (optional)
      "bio": "MIA",
      "photo": "/managers/FlamingDragons.png", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "sf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "have you seen this man?",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "997336732758601728",
      "name": "Jacob Bowman",
      "location": "Napa", // (optional)
      "bio": "refuses to put the license plate cover on",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "didnt get last this year",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "996970919488716800",
      "name": "Lewis Owen",
      "location": "Phoenix", // (optional)
      "bio": "GF whipped",
      "photo": "/managers/AnailPounder.png", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "i luv my gf hehe",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
      {
      "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "992340574118158336",
      "name": "Angelo Prosceno",
      "location": "Wyoming", // (optional)
      "bio": "My team sold",
      "photo": "/managers/VicksDawgWalking.png", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
      //   name: "Rival", // Can be anything (usually your rival's name)
      //   link: 6, // manager array number within this array, or null to link back to all managers page
      //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Special teams, special plays, special players",
      // "tradingScale": 10, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //"preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
