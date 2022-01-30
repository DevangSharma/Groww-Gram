import axios from "axios";
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { BASE_URL, CLIENT_ID } from "../../constants/API";
import { FETCH_POSTS } from "../posts/PostActionTypes";
import { FETCH_USER, FETCH_USER_IMAGES, SET_USER, SET_USER_IMAGES } from "./userActionTypes";


export const getUserData = (username : string) => {
    return async (dispatch: ThunkDispatch<{},void,AnyAction>) => {
        dispatch({
            type: FETCH_USER,
        });

        axios.get(BASE_URL + 'users/' + username + CLIENT_ID).then(
            (res) => {
                dispatch(setUser(res.data));
            }
        )
    }
}

export const setUser = (userData: any) => {
    return async (dispatch: ThunkDispatch<{},void,AnyAction>) => {
        dispatch({
            type: SET_USER,
            payload: userData,
        });
    }
}

export const setUserImages = (userImages: any) => {
    
    return async (dispatch: ThunkDispatch<{},void,AnyAction>) => {
        dispatch({
            type: SET_USER_IMAGES,
            payload: userImages,
        });
    }
}

export const getUserImages = (username : string) => {

    return async (dispatch: ThunkDispatch<{},void,AnyAction>) => {
        
        dispatch({
            type: FETCH_USER_IMAGES,
        });
       
        
        axios.get( BASE_URL + 'users/' + username + '/photos' + CLIENT_ID ).then(
            (res) => {                
                dispatch(setUserImages(res.data));
            }
        ).catch(
            (err) => console.log(err)
            
        )
    }
}