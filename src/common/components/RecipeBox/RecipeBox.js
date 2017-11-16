import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Grid, Row, Col, Image, Thumbnail, Button } from 'react-bootstrap';

const RecipeBox = (props) => {
  return(
      <Col xs={6} md={4}>
      <Link to={`/post/${props.recipe.get('_id')}`} onClick={props.onPost(props.recipe.get('_id'))} >link</Link>
        <Thumbnail src={props.recipe.get('imagePath')} alt="242x200">
          <h3>{props.recipe.get('name')}</h3>
          <h3>{props.recipe.get('location')}</h3>
          <p>{props.recipe.get('description')}</p>
          {
            props.isAuthorized === true ? (
            <p>
              <Button bsStyle="primary" onClick={props.onDeleteRecipe(props.recipe.get('_id'))}>Delete</Button>&nbsp;
              <Button bsStyle="default" onClick={props.onUpadateRecipe(props.recipe.get('_id'))}>Modify</Button>
            </p>)
            : null            
          }
        </Thumbnail>
      </Col>
    );
}

export default RecipeBox;