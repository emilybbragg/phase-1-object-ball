function gameObject(){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                },
                'Reggie Evans': {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7,
                    },
                'Brook Lopez': {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15,
                },
                'Mason Plumlee': {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5,
                    },
                'Jason Terry': {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1,
                    },
            }, //closes players
        }, //closes home
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turqoise', 'Purple'],
            players: {
                'Jeff Adrian': {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2,
                },
                'Bismak Biyombo': {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                    },
                'DeSagna Diop': {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },
                'Ben Gordon': {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                    },
                'Brendan Haywood': {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                    }
            }
        }
    }
}


function numPointsScored(playerInput){
 const game = gameObject()

 for (const gameKey in game) { //iterate through game keys (home/away)
     const teamObj = game[gameKey]
     for (const teamKey in teamObj) { //iterate through teamKeys (name, etc.)
         const playerObj = teamObj.players
         for (const playerKey in playerObj) { //iterate through players
    
             if (playerKey === playerInput) { //check to see if player matches function
                 return playerObj[playerKey].points //return the player's points
             }
         }
     }
 }
}
numPointsScored('DeSagna Diop')


//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerInput){
    const game = gameObject()
    for (const gameKey in game) { //iterate through game keys (home/away)
        const teamObj = game[gameKey]
        for (const teamKey in teamObj) { //iterate through teamKeys (name, etc.)
            const playerObj = teamObj.players
            for (const playerKey in playerObj) { //iterate through players
                if (playerKey === playerInput) { //check to see if player matches function
                    console.log(playerObj[playerKey].shoe)
                    return playerObj[playerKey].shoe //return the player's she size
                }
            }
        }
    }
   }
   shoeSize('DeSagna Diop')

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamInput){
        const game = gameObject()
        for (const gameKey in game) { //iterate through game keys (home/away)
            const teamObj = game[gameKey]
            if (teamObj.teamName === teamInput) {
                return teamObj.colors
            }
         }
}


//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(){
    const game = gameObject()
    const teamArray = []
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        teamArray.push(teamObj.teamName)
    }
    return teamArray
}



//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamInput){
    const game = gameObject()
    const playerNumberArray = []
    for (const gameKey in game) {
        const teamObj = game[gameKey]
        if (teamObj.teamName === teamInput) {
            const players = teamObj.players
            for (const playerName in players) {
                const player = players[playerName]
                console.log(player)
                    for (const playerKey in player) {
                        if (playerKey === 'number'){
                            playerNumberArray.push(player[playerKey])
                        }
                    }
            }
        }
    }
    return playerNumberArray
}

//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:
function playerStats(playerInput){
    const game = gameObject()
    for (const gameKey in game) { //iterate through game keys (home/away)
        const teamObj = game[gameKey]
        for (const teamKey in teamObj) { //iterate through teamKeys (name, etc.)
            const playerObj = teamObj.players
            for (const playerKey in playerObj) { //iterate through players
                if (playerKey === playerInput) { //check to see if player matches function
                    console.log(playerObj[playerKey])
                    return playerObj[playerKey] //return the player's she size
                }
            }
        }
    }
   }
   playerStats('DeSagna Diop')