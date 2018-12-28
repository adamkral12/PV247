import {connect} from 'react-redux';
import {IToggleChannelListDispatchProps, ToggleChannelList} from '../components/ToggleChannelList';
import {Dispatch} from 'redux';
import {showChannelList} from '../actions/visibility';

const mapDispatchToProps = (dispatch: Dispatch): IToggleChannelListDispatchProps => {
    return {
        showChannelList: () => dispatch(showChannelList())
    };
};

export const ToggleChannelListContainer = connect<{}, IToggleChannelListDispatchProps>(null, mapDispatchToProps)(ToggleChannelList);
