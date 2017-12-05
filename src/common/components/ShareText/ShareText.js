import React from 'react';
import { Form, Button,} from 'react-bootstrap';


class ShareText extends React.Component {
    componentDidMount() {
        this.props.onLoad(this.props.location.query.recipeId);
    }

    render() {
        return (
            <Form horizontal>

                <div className="editor-wrapper">
                    {/*         <input className="title" type="text" placeholder="Title" /> */}
                    <textarea id="editor" placeholder="Content here ...."></textarea>
                </div>
                {this.props.recipes.findIndex((_recipe) => (_recipe.get('_id') === '5a26129456fbca27c2074bbe'))}
                { this.props.location.query.recipeId }
                { this.props.recipe }
                <Button
                    onClick={this.props.onEditorSubmit(this.props.location.query.recipeId)}
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