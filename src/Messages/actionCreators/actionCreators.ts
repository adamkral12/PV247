import {MESSAGE_APP_DELETE_MESSAGE, MESSAGE_APP_UPVOTE_MESSAGE, MESSAGE_APP_DOWNVOTE_MESSAGE} from '../constants/actionTypes';

export const deleteMessage = (id : Uuid): Action => { alert("zavolali ma s " + id); return ({
    type: MESSAGE_APP_DELETE_MESSAGE,
    payload: {
        id
    }
})};

export const upvoteMessage = (id : Uuid): Action => ({
    type: MESSAGE_APP_UPVOTE_MESSAGE,
    payload: {
        id
    }
});

export const downvoteMessage = (id : Uuid): Action => ({
    type: MESSAGE_APP_DOWNVOTE_MESSAGE,
    payload: {
        id
    }
});
