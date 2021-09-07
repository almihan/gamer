import { actionsTypes } from "../actions/actionstypes";
 
const initial_state={
  game:{platforms:[]},
  screen:{results:[]},
  isLoading:true};

export const detailReducer =(state=initial_state,action)=>{
  switch(action.type){
    case actionsTypes.GET_DETAIL:
      return {
        ...state,
        game:action.payload.game,
        screen:action.payload.screen,
        isLoading:false
      };
      case actionsTypes.LOADING_DETAIL:
        return{
          ...state,
          isLoading:true
        }
      default:
        return {...state}
  };
}

