import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Grid, Row, Col, Image, Thumbnail, Button } from 'react-bootstrap';

const RecipeBox = (props) => {
  return(
      <Col xs={6} md={4}>
      {
        props.isAuthorized === true ? (
          <Thumbnail src={props.recipe.get('imagePath')} alt="242x200">
          <div>
            <h4>{props.recipe.get('name')}</h4>
            <div><p>{props.recipe.get('description')}</p></div>
            <div><p>地址：{props.recipe.get('locations')}</p></div>
          </div>  
            <p>
              <Button bsStyle="primary" onClick={props.onDeleteRecipe(props.recipe.get('_id'))}>Delete</Button>&nbsp;
              <Button bsStyle="default" onClick={props.onUpadateRecipe(props.recipe.get('_id'))}>Modify</Button>&nbsp;
              <Button bsStyle="default" onClick={props.onPost(props.recipe.get('_id'))}>Review</Button>
            </p>
          </Thumbnail>)
          :(<a onClick={props.onPost(props.recipe.get('_id'))} >
          <Thumbnail src={props.recipe.get('imagePath')} alt="242x200">
            <h4>{props.recipe.get('name')}</h4>
            <p>{props.recipe.get('description')}</p>
            <p>地址：{props.recipe.get('locations')}</p>
          </Thumbnail>
            </a>)
      }
      </Col>
    );
}

export default RecipeBox;