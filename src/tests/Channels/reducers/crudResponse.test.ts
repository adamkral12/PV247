import {crudResponse} from '../../../Channels/reducers/crudResponse';
import {CHANNEL_APP_CHANNEL_CREATE_SUCCESS, CHANNEL_APP_CHANNEL_REMOVE_SUCCESS, CHANNEL_APP_CHANNEL_UPDATE_SUCCESS, CHANNEL_APP_CRUD_FAILURE, CHANNEL_APP_HIDE_EDIT_CHANNEL} from '../../../Channels/constants/actionTypes';

describe("crud response reducer", () => {
    it("test create channel failure", () => {
        expect(crudResponse(undefined,{
            type: CHANNEL_APP_CRUD_FAILURE,
            payload: { message: "could not create channel" }
        })).toEqual("could not create channel")
    });

    const actionsThatShouldReturnUndefined = [
        CHANNEL_APP_CHANNEL_CREATE_SUCCESS,
        CHANNEL_APP_CHANNEL_UPDATE_SUCCESS,
        CHANNEL_APP_CHANNEL_REMOVE_SUCCESS,
        CHANNEL_APP_HIDE_EDIT_CHANNEL,
    ];

    actionsThatShouldReturnUndefined.map((action: string) => {
        it("test " + action + " returning undefined", () => {
            expect(crudResponse("could not create channel", {
                type: action,
            })).toEqual(undefined);
        });
    });


});