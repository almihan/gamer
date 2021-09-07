import { actionsTypes } from "../actions/actionstypes";

const init_state ={
  popular:[],
  newGames:[],
  upcoming:[],
  searched:[]
};

export const gameReducer=(state=init_state,action)=>{
switch(action.type){
  case actionsTypes.FETCH_GAMES:
    return {...state,
      popular:action.payload.popular,
       upcoming: action.payload.upcoming,
      newGames:action.payload.newGames};
      case actionsTypes.FETCH_SEARCHED:
        return {
          ...state,
          searched:action.payload.searched

        };
        case actionsTypes.CLEAR_SEARCHED:
          return {
            ...state,
            searched:[]
          }
    default:return {...state};
}
}