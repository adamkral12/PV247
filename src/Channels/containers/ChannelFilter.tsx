import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {ChannelFilter, IChannelFilterDispatchProps, IChannelFilterStateProps} from '../components/ChannelFilter';
import {IState} from '../../common/IState';
import {setVisibilityFilter} from '../actions/visibility';

const mapDispatchToProps = (dispatch: Dispatch): IChannelFilterDispatchProps => {
    return {
        onFilterTextChange: (text: string) => dispatch(setVisibilityFilter(text)),
    };
};

const mapStateToProps = (state: IState): IChannelFilterStateProps => {
    return {
        text: state.channelList.visibilityFilter.text,
    };
};

export const ChannelFilterContainer = connect<IChannelFilterStateProps, IChannelFilterDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelFilter);
