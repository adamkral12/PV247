import * as Immutable from 'immutable';

export interface IChannelCustomData {
    readonly members: Immutable.Set<string>;
    readonly image: File | null;
}
