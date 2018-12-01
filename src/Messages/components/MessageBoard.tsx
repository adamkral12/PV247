import * as React from 'react';
import './MessageBoard.css';
import {IUser} from '../../Channels/models/IUser';
import * as Immutable from 'immutable';
import {MessageContainer} from '../containers/Message';
import {MessageFormContainer} from '../containers/MessageForm';
import { Panel, Alert } from 'react-bootstrap';

export interface IMessageBoardStateProps {
    readonly messageIds: Immutable.List<Uuid>;
    readonly user: IUser;
    readonly loadingErrorMessage?: string;
    readonly crudErrorMessage?: string;

}

export interface IMessageBoardDispatchProps {
    readonly loadMessages: () => void;
}


export class MessageBoard extends React.PureComponent<IMessageBoardStateProps & IMessageBoardDispatchProps> {
    componentDidMount() {
        this.props.loadMessages();
    }
    render() {
        if (this.props.loadingErrorMessage) {
            return (
                <Panel.Body>
                    <div className="col-sm-12 text-center">
                        An error occurred: {this.props.loadingErrorMessage}
                    </div>
                </Panel.Body>
            );
        }
        return (
            <div>
                <div className="postWrapper">
                    {this.props.crudErrorMessage ?
                        <Alert bsStyle="warning">
                            {this.props.crudErrorMessage}
                        </Alert> : null
                    }
                    {this.props.messageIds.map((id: Uuid, index: number) => (
                        <MessageContainer
                            key={id}
                            id={id}
                            index={index + 1}
                        />
                    ))
                    }
                </div>
                <MessageFormContainer/>
            </div>
    );
  }
}

