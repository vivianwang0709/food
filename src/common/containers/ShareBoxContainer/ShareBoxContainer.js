import React from 'react';
import { connect } from 'react-redux';
import ShareBox from '../../components/ShareBox';
import { browserHistory } from 'react-router';


import { 
  addRecipe,
  updateRecipe,
  showSpinner,
  setRecipe,
} from '../../actions';

export default connect(
  (state) => ({
    recipes: state.getIn(['recipe', 'recipes']),
    recipeId: state.getIn(['recipe', 'recipe', 'id']),
    name: state.getIn(['recipe', 'recipe', 'name']),
    description: state.getIn(['recipe', 'recipe', 'description']),
    imagePath: state.getIn(['recipe', 'recipe', 'imagePath']),
    locations: state.getIn(['recipe', 'recipe', 'locations']),
    content: state.getIn(['recipe', 'recipe', 'content']),
    mcontent: state.getIn(['recipe', 'recipe', 'mcontent']),  
    isEdit: state.getIn(['ui', 'isEdit']),
  }),
  (dispatch) => ({
    onChangeNameInput: (event) => (
      dispatch(setRecipe({ keyPath: ['recipe', 'name'], value: event.target.value }))
    ),
    onChangeDescriptionInput: (event) => (
      dispatch(setRecipe({ keyPath: ['recipe', 'description'], value: event.target.value }))
    ),
    onChangeImageUrl: (event) => (
      dispatch(setRecipe({ keyPath: ['recipe', 'imagePath'], value: event.target.value }))
    ),
    onChangeLocation: (event) => (
      dispatch(setRecipe({ keyPath: ['recipe', 'locations'], value: event.target.value }))
    ),        
    onRecipeSubmit: (recipes, recipeId, name, description, imagePath, locations, content, mcontent, isEdit) => () => {
      if (isEdit === true) {
        dispatch(updateRecipe(dispatch, recipeId, name, description, imagePath, locations));
        dispatch(showSpinner());
      } else {
        dispatch(addRecipe(dispatch, name, description, imagePath, locations));
        dispatch(showSpinner());
      }
    },
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { recipes, recipeId, name, description, imagePath, locations, isEdit } = stateProps;
    const { onRecipeSubmit } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onRecipeSubmit: onRecipeSubmit(recipes, recipeId, name, description, imagePath, locations, isEdit),
    });
  }  
)(ShareBox);

