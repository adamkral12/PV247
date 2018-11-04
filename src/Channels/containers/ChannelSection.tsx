import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IState } from '../../common/IState';
import {ChannelSection, IChannelSectionStateProps} from '../components/ChannelSection';
import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';
import {IChannel} from '../models/IChannel';
import {IVisibilityFilter} from '../models/IVisibilityFilter';

const getVisibleChannelIds = createSelector<IState, IVisibilityFilter, Immutable.List<string>, Immutable.Map<string, IChannel>, Immutable.List<string>>(
    [
        state => state.channelList.visibilityFilter,
        state => state.channelList.channels.allIds,
        state => state.channelList.channels.byId,
    ],
    (visibilityFilter, allIds, byId) => {
        switch (visibilityFilter.filter) {
            case ChannelFilterEnum.All:
                return allIds;
            case ChannelFilterEnum.ByName:
                return allIds.filter((id: string) => byId.get(id).name.includes(visibilityFilter.text)).toList();

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
