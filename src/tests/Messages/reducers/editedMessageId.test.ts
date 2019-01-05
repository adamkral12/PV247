import {
    MESSAGE_APP_CANCEL_EDITING_MESSAGE,
    MESSAGE_APP_START_EDITING_MESSAGE,
    MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
} from '../../../Messages/constants/actionTypes';
import {editedMessageId} from '../../../Messages/reducers/editedMessageId';

describe('edited message id reducer test', () => {
    it('test start editing message', () => {
        expect(editedMessageId(undefined, {
            type: MESSAGE_APP_START_EDITING_MESSAGE,
            payload: { id: '123321' }
        })).toEqual('123321');
    });

    const actionsThatShouldReturnNull = [
        MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
        MESSAGE_APP_CANCEL_EDITING_MESSAGE,
    ];

    actionsThatShouldReturnNull.map((action: string) => {
        it('test ' + action + ' returning null', () => {
            expect(editedMessageId('132132', {
                type: action,
            })).toEqual(null);
        });
    });


});
