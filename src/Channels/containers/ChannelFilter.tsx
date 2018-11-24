import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/actionCreators';
import {ChannelFilter, IChannelFilterDispatchProps, IChannelFilterStateProps} from '../components/ChannelFilter';
import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';
import {IState} from '../../common/IState';

const mapDispatchToProps = (dispatch: Dispatch): IChannelFilterDispatchProps => {
    return {
        onFilterTextChange: (text: string) => dispatch(setVisibilityFilter(ChannelFilterEnum.ByName, text)),
    };
};

const mapStateToProps = (state: IState): IChannelFilterStateProps => {
    return {
        text: state.channelList.visibilityFilter.text,
    }
};

export const ChannelFilterContainer = connect<IChannelFilterStateProps, IChannelFilterDispatchProps>(mapStateToProps, mapDispatchToProps)(ChannelFilter);
