import axios from "axios";
import { gameDetailsUrl,gameScreenshotUrl } from "../api";
import { actionsTypes } from "./actionstypes";

export const loadDetail =(id)=>async (dispatch)=>{
  dispatch({type:actionsTypes.LOADING_DETAIL});

  const detailData = await axios.get(gameDetailsUrl(id));
  const screenShotData = await axios.get(gameScreenshotUrl(id));

 dispatch({
   type:actionsTypes.GET_DETAIL,
   payload:{
     game:detailData.data,
     screen:screenShotData.data

   }
 });
}