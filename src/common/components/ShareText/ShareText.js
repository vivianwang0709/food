import React from 'react';
import { Form, Button,} from 'react-bootstrap';


class ShareText extends React.Component {
    componentDidMount() {
        this.props.onLoad()
    }

    render() {
        return (
            <Form horizontal>

                <div className="editor-wrapper">
                    {/*         <input className="title" type="text" placeholder="Title" /> */}
                    <textarea id="editor" placeholder="Content here ...."></textarea>
                </div>
                <Button
                    onClick={this.props.onEditorSubmit}
                    bsStyle="success"
                    bsSize="large"
                    block
                >
                    Submit
                </Button>
            </Form>

        )
    }
};

export default ShareText;