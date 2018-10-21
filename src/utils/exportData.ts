import * as data from '../tests/mockData.json';
import {IMessage} from '../Messages/model/IMessage';
import * as Immutable from 'immutable';
import {IUser} from '../Channels/models/IUser';

// TODO: add types
export const CHANNELS_DATA  =  (data as any).channels;

export const USERS_DATA = (data as any).users;

export const CHANNEL_MESSAGES_DATA: Immutable.List<IMessage> = (data as any).channelMessages;

export const USER_DATA: IUser = (data as any).user;
