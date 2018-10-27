import {
    USER_APP_EDIT_USER,
    USER_APP_HIDE_EDIT_USER_MODAL,
    USER_APP_SHOW_EDIT_USER_MODAL
} from '../constants/actionTypes';
import {IUserApp} from "../model/IUserApp";

export const editUserModal = (prevState: IUserApp, action: Action): IUserApp => {
    //alert("action")
    switch (action.type) {
        case USER_APP_SHOW_EDIT_USER_MODAL:
        case USER_APP_HIDE_EDIT_USER_MODAL:
           return { user: prevState.user, showEditModal: action.payload.show} as IUserApp;
        case USER_APP_EDIT_USER:
            alert(action.payload.profilePicture);
            alert(action.payload.displayName);
            //alert("Edit User");
            //return {user: {...prevState.user, customData.displayName: action.payload.profilePicture, payload.profilePicture, payload.displayName}, showEditModal: action.payload.show} as IUserApp;
            //return {...prevState, user: ...prevState.user, showEditModal:false} as IUserApp
            //return prevState;
            //return {...prevState, user: {...prevState.user, customData: {...prevState.user.customData, profilePicture: action.payload.profilePicture, displayName: action.payload.displayName }}, showEditModal: action.payload.show} as IUserApp;
            //return {user: {...prevState.user, customData: {profilePicture: action.payload.profilePicture, displayName: action.payload.displayName }}, showEditModal: action.payload.show} as IUserApp;
             return  {user: {...prevState.user, customData: {profilePicture: action.payload.profilePicture, displayName: action.payload.displayName }}, showEditModal: action.payload.show} as IUserApp;

        default:
            return prevState;
    }
};
