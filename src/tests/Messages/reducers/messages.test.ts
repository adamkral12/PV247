import * as Immutable from 'immutable';
import {messages} from '../../../Messages/reducers/messages';
import {IMessage} from '../../../Messages/model/IMessage';
import {MESSAGE_APP_CREATE_MESSAGE_SUCCESS, MESSAGE_APP_DELETE_MESSAGE_SUCCESS, MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS, MESSAGE_APP_UPDATE_MESSAGE_SUCCESS, MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS} from '../../../Messages/constants/actionTypes';
import {CHANNEL_APP_SELECT_CHANNEL_SUCCESS} from '../../../Channels/constants/actionTypes';

const testMessages: IMessage[] = [
    {
        id: '12',
        channelId: '1234',
        value: 'message value',
        createdAt: '2017',
        createdBy: 'adam',
        updatedAt: null,
        updatedBy: null,
        customData: {
            votes: 0,
        }
    },
    {
        id: '123',
        channelId: '123',
        value: 'message value',
        createdAt: '2017',
        createdBy: 'adam',
        updatedAt: '2018',
        updatedBy: 'jozef',
        customData: {
            votes: 0,
        }
    }
];

const testMap = Immutable.Map({
    12: {
        id: '12',
        channelId: '1234',
        value: 'message value',
        createdAt: '2017',
        createdBy: 'adam',
        updatedAt: null,
        updatedBy: null,
        customData: {
            votes: 0,
        }
    },
    123: {
        id: '123',
        channelId: '123',
        value: 'message value',
        createdAt: '2017',
        createdBy: 'adam',
        updatedAt: '2018',
        updatedBy: 'jozef',
        customData: {
            votes: 0,
        }
    }
});

describe(
    'messages reducer', () => {
        it('should return previous state on random action', () => {
            expect(messages(
                {
                    allIds: Immutable.List<string>(),
                    byId: Immutable.Map(),
                },
                {
                    type: 'random',
                },
            )).toEqual({
                byId: Immutable.Map(),
                allIds: Immutable.List()
            });
        });

        it('creating message success', () => {
            expect(messages({
                allIds: Immutable.List(['12']),
                byId: Immutable.Map<string, IMessage>({
                    12: testMessages[0],
                })
            }, {
                type: MESSAGE_APP_CREATE_MESSAGE_SUCCESS,
                payload: {message: testMessages[1]}
            })).toEqual({
                byId: testMap,
                allIds: Immutable.List<string>(['12', '123'])
            });
        });

        const updatingMessageActions = [
            MESSAGE_APP_UPVOTE_MESSAGE_SUCCESS,
            MESSAGE_APP_DOWNVOTE_MESSAGE_SUCCESS,
            MESSAGE_APP_UPDATE_MESSAGE_SUCCESS,
        ];

        updatingMessageActions.map((updatingAction: string) => {
            it('updating action ' + updatingAction + ' success', () => {
                expect(messages({
                    allIds: Immutable.List(['12']),
                    byId: Immutable.Map<string, IMessage>({
                        12: testMessages[0],
                    })
                }, {
                    type: updatingAction,
                    payload: {message: {...testMessages[1], id: '12'}}
                })).toEqual({
                    byId: Immutable.Map({ 12: {...testMap.get('123'), id: '12'}}),
                    allIds: Immutable.List<string>(['12'])
                });
            });
        });

        it('Message remove success', () => {
            expect(messages({
                allIds: Immutable.List(['12', '123']),
                byId: Immutable.Map({
                    12: testMessages[0],
                    123: testMessages[1],
                })
            }, {
                type: MESSAGE_APP_DELETE_MESSAGE_SUCCESS,
                payload: {messageId: '123'}
            })).toEqual({
                allIds: Immutable.List(['12']),
                byId: Immutable.Map({
                    12: testMessages[0],
                })
            });
        });

        it('selecting channel should return new list of messages', () => {
            expect(messages({
                allIds: Immutable.List(['12']),
                byId: Immutable.Map<string, IMessage>({
                    12: testMessages[0],
                })
            }, {
                type: CHANNEL_APP_SELECT_CHANNEL_SUCCESS,
                payload: {messages: [testMessages[1]]}
            })).toEqual({
                byId: Immutable.Map<string, IMessage>({
                    123: testMessages[1],
                }),
                allIds: Immutable.List<string>(['123'])
            });
        });
    }
);
