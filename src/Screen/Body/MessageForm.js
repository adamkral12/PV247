import React, { Component } from 'react';
import {FormControl, FormGroup, Button} from "react-bootstrap";

export default class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || "",
            isSubmitLoading: false
        }
    }

    onChange = (event) => {
        this.setState({value: event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault();
        // unset loading state when done
        this.setState({ isSubmitLoading: true });
        // this.props.onSubmit(this.state.value);
    };

    render() {
        return (
            <div>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                    >
                        <FormControl
                            componentClass="textarea"
                            value={this.state.value}
                            placeholder="Message"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button type="submit"
                            disabled={this.state.isSubmitLoading}
                            onClick={this.state.isSubmitLoading ? null : this.onSubmit}
                    >
                        Send
                    </Button>
                </form>
            </div>
        );
    }
}
