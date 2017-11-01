import React from 'react';
import { connect } from 'react-redux';
import ShareBox from '../../components/ShareBox';

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
    location: state.getIn(['recipe', 'recipe', 'location']),    
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
      dispatch(setRecipe({ keyPath: ['recipe', 'location'], value: event.target.value }))
    ),        
    onRecipeSubmit: (recipes, recipeId, name, description, imagePath, location, isEdit) => () => {
      if (isEdit === true) {
        dispatch(updateRecipe(dispatch, recipeId, name, description, imagePath, location));
        dispatch(showSpinner());
      } else {
        dispatch(addRecipe(dispatch, name, description, imagePath, location));
        dispatch(showSpinner());
      }
    },    
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { recipes, recipeId, name, description, imagePath, location, isEdit } = stateProps;
    const { onRecipeSubmit } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onRecipeSubmit: onRecipeSubmit(recipes, recipeId, name, description, imagePath, location, isEdit),
    });
  }  
)(ShareBox);

