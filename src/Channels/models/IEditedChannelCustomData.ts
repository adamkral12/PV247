import * as Immutable from 'immutable';

export interface IEditedChannelCustomData {
    readonly invitedUsers: Immutable.Set<string>;
    readonly image: string | null;
}
