import * as React from 'react';
import './MessageBoard.css';
import {IUser} from '../../Channels/models/IUser';
import * as Immutable from 'immutable';
import {MessageContainer} from '../containers/Message';
import { Panel, Alert } from 'react-bootstrap';
import {ScaleLoader} from 'react-spinners';
import {RichTextEditorContainer1} from '../containers/CreateMessageRichTextEditor';

export interface IMessageBoardStateProps {
    readonly messageIds: Immutable.List<Uuid>;
    readonly user: IUser;
    readonly loadingErrorMessage?: string;
    readonly crudErrorMessage?: string;
    readonly isLoading: boolean;

}

export class MessageBoard extends React.PureComponent<IMessageBoardStateProps> {

    private messageForm: null | HTMLDivElement;

    private scrollToBottom(): void {
        if (this.messageForm !== null) {
            this.messageForm.scrollIntoView();
        }
    }
    componentDidMount() {
            this.scrollToBottom();
    }


    componentDidUpdate() {
            this.scrollToBottom();
    }


    render() {
        if (this.props.isLoading) {
            return (
                <Panel.Body>
                    <div className="col-sm-12 text-center">
                        <ScaleLoader/>
                    </div>
                </Panel.Body>
            );
        }
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
                    <div ref={(el) => { this.messageForm = el; }}/>
                </div>
                <RichTextEditorContainer1/>
            </div>
        );
    }
}
