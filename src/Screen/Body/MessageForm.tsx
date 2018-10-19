import * as React from 'react';
import { FormControl, FormGroup, Button } from "react-bootstrap";

export class MessageForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "",
      isSubmitLoading: false
    };
  }

    onChange = (event) => {
      this.setState({ value: event.target.value });
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
                          placeholder="Message"
                          onChange={this.onChange}
                        />
                    </FormGroup>
                    <Button type="submit">
                        Send
                    </Button>
                </form>
            </div>
      );
    }
}
