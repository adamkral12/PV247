import React, { Component } from 'react';
import {FormControl, FormGroup, HelpBlock} from "react-bootstrap";

export default class MessageForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <FormControl
                            type="text"
                            value={""}//this.state.value}
                            placeholder="Message"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Validation is based on string length.</HelpBlock>
                    </FormGroup>
                </form>
            </div>
    );
    }

    getValidationState() {
        return undefined;
    }
}