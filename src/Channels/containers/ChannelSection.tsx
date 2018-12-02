import * as Immutable from 'immutable';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IState } from '../../common/IState';
import {ChannelSection, IChannelSectionStateProps} from '../components/ChannelSection';
import {IChannel} from '../models/IChannel';
import {IVisibilityFilter} from '../models/IVisibilityFilter';

const getVisibleChannelIds = createSelector<IState, IVisibilityFilter, Immutable.List<string>, Immutable.Map<string, IChannel>, string, Immutable.List<string>>(
    [
        state => state.channelList.visibilityFilter,
        state => state.channelList.channels.allIds,
        state => state.channelList.channels.byId,
        state => state.userApp.user.email
    ],
    (visibilityFilter, allIds, byId, userEmail) => {
        console.log(userEmail);
        // return allIds.filter((id: string) => byId.get(id).name.includes(visibilityFilter.text) && userEmail in byId.get(id).customData.members.keys()).toList();
        // return allIds.filter((id: string) => byId.get(id).name.includes(visibilityFilter.text) && userEmail in byId.get(id).customData.members.has(userEmail)).toList();
        // return allIds.filter((id: string) => byId.get(id).name.includes(visibilityFilter.text) && byId.get(id).customData.members.toSeq().has(userEmail)).toList();
        return allIds.filter((id: string) => byId.get(id).name.includes(visibilityFilter.text)).toList();

    });

const mapStateToProps = (state: IState): IChannelSectionStateProps => {
    return {
        channelIds: getVisibleChannelIds(state),
        isLoading: state.channelList.isLoading,
        loadingErrorMessage: state.channelList.loadingErrorMessage,
    };
};

export const ChannelSectionContainer = connect(mapStateToProps)(ChannelSection);
