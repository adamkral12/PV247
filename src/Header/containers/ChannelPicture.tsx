import {connect} from 'react-redux';
import {IState} from '../../common/IState';
import {ChannelPicture, IChannelPictureStateProps} from '../components/ChannelPicture';

const mapStateToProps = (state: IState): IChannelPictureStateProps => {
    const channel = state.channelList.selectedChannelId === null ? null : state.channelList.channels.byId.get(state.channelList.selectedChannelId);
    return {
        picture: channel ? channel.customData.image : null
    };
};

export const ChannelPictureContainer = connect<IChannelPictureStateProps>(mapStateToProps)(ChannelPicture);
