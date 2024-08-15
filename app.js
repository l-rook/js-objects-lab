const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
// console.dir(pokemon, { maxArrayLength: null })
// console.log(game)

game.difficulty = 'easy'; //this is gen 1 none of the mechanics work properly its easily exploitable and you can pretty much sweep the game with a nidoking
// console.log(game)

game.party.push(pokemon[6])

// console.log(game.party)

game.party.push(pokemon[33], pokemon[149], pokemon[148])

console.log(game.party)

function gymWin(difficulty) {
    for (i = 0; i < game.gyms.length; i++) {
        if (game.gyms[i].difficulty <= difficulty) {
            game.gyms[i].completed = true;
            console.log(game.gyms[i])
        }
    }
}
gymWin(2)

game.party.splice(0, 1, pokemon[7]);
console.log(game.party[0])

function partyList(){
    for (i = 0; i < game.party.length; i++) {
        console.log(game.party[i].name)
    }
}
partyList()

function starterChoices() {
    for (i = 0; i < pokemon.length; i++) {
        if (pokemon[i].starter == 1) {
            console.log(pokemon[i].name);
        }
    }
}
starterChoices()

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
  };
  
game.catchPokemon(pokemon[58])

// partyList()

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
    game.items[1].quantity -= 1;
  };

  game.catchPokemon(pokemon[129])

  partyList()

  console.log(game.items)

  gymWin(6)

  game.gymStatus = function () {
    const gymTally = {
        completed: 0,
        incomplete: 0,
    }
    for (i = 0; i < game.gyms.length; i++) {
        if (game.gyms[i].completed === true) {
            gymTally.completed += 1
        } else {
            gymTally.incomplete += 1
        }
    }
    console.log(gymTally)
  }

game.gymStatus()

function partyCount() {
    console.log(game.party.length)
}

partyCount()

gymWin(8)

game.gymStatus()

console.log(game)