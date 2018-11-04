import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IState } from '../../common/IState';
import {ChannelSection, IChannelSectionStateProps} from '../components/ChannelSection';
import {ChannelFilter} from '../constants/ChannelFilter';
import {IChannel} from '../models/IChannel';

const getVisibleChannelIds = createSelector<IState, ChannelFilter, Immutable.List<string>, Immutable.Map<string, IChannel>, Immutable.List<string>>(
    [
        state => state.channelList.visibilityFilter,
        state => state.channelList.channels.allIds,
        state => state.channelList.channels.byId,
    ],
    (visibilityFilter, allIds, byId) => {
        switch (visibilityFilter) {
            case ChannelFilter.All:
                return allIds;

            // case ChannelFilter.ByName:
            //     return allIds.filter((id: string) => byName.get(id)).toList();
            //
            // case ChannelFilter.ById:
            //     return allIds.filter((id: string) => byId.get(id)).toList();

            default:
                throw new Error(`Unknown value of visibility filter '${visibilityFilter}'`);
        }
    });

const mapStateToProps = (state: IState): IChannelSectionStateProps => {
    return {
        channelIds: getVisibleChannelIds(state),
    };
};

export const ChannelSectionContainer = connect(mapStateToProps)(ChannelSection);
