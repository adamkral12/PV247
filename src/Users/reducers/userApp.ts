import {
    USER_APP_EDIT_USER,
    USER_APP_HIDE_EDIT_USER_MODAL,
    USER_APP_SHOW_EDIT_USER_MODAL
} from '../constants/actionTypes';
import {IUserApp} from '../model/IUserApp';

export const userApp = (prevState: IUserApp, action: Action): IUserApp => {
    switch (action.type) {
        case USER_APP_SHOW_EDIT_USER_MODAL:
        case USER_APP_HIDE_EDIT_USER_MODAL:
           return { user: prevState.user, showEditModal: action.payload.show};
        case USER_APP_EDIT_USER:
            return  {user: {...prevState.user, customData: {profilePicture: action.payload.profilePicture,
                        displayName: action.payload.displayName }}, showEditModal: action.payload.show};

        default:
            return prevState;
    }
};
