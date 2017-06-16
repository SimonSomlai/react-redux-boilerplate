// STATE ALTERING ACTIONS
export const setBooks = function(games){
  return{
    type: types.SET_GAMES,
    games: games
  }
}

export const addBook = function(game){
  return{
    type: types.ADD_GAME,
    game: game
  }
}

export const deleteBookFromStore = function(_id){
  return{
    type: types.DELETE_GAME,
    _id: _id
  }
}
