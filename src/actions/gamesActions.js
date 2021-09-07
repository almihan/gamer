import axios from "axios";
import { popularGamesUrl,upcomingGamesUrl,newGamesUrl,searchGameUrl } from "../api";
import { actionsTypes } from "./actionstypes";



export const loadGames =() =>async(dispatch)=>{
  const popularData = await axios.get(popularGamesUrl());
  
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  
  dispatch({
    type:actionsTypes.FETCH_GAMES,
    payload:{
      popular:popularData.data.results,
      upcoming:upcomingData.data.results,
    newGames:newGamesData.data.results}
  });
 
};

export const fetchSearch = (game_name)=>async(dispatch)=>{
const searchGames = await axios.get(searchGameUrl(game_name));

dispatch({
  type:actionsTypes.FETCH_SEARCHED,
  payload:{searched:searchGames.data.results}
});
};

export const clearSearch = ()=>(dispatch)=>{
  dispatch({
    type:actionsTypes.CLEAR_SEARCHED,
    payload:{searched:[]}
  });
};