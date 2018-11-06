import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/actionCreators';
import {ChannelFilter, IChannelFilterDispatchProps} from '../components/ChannelFilter';
import {ChannelFilterEnum} from '../constants/ChannelFilterEnum';

const mapDispatchToProps = (dispatch: Dispatch): IChannelFilterDispatchProps => {
    return {
        onFilterTextChange: (text: string) => dispatch(setVisibilityFilter(ChannelFilterEnum.ByName, text)),
    };
};

export const ChannelFilterContainer = connect<IChannelFilterDispatchProps>(undefined, mapDispatchToProps)(ChannelFilter);
