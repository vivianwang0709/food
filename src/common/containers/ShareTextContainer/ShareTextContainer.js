import React from 'react';
import { connect } from 'react-redux';
import ShareText from '../../components/ShareText';

import { 
  addScript,
  setContent,
  getContent,
} from '../../actions';


export default connect(
  (state) => ({
    recipes: state.getIn(['recipe', 'recipes']),
    recipe: state.getIn(['recipe', 'recipe']),
  }),
  (dispatch) => ({
    onLoad: (recipeId) => {
      dispatch(addScript());
      dispatch(getContent(dispatch, recipeId));
    },      
    onEditorSubmit: (recipeId) => () => {
      dispatch(setContent(dispatch, recipeId));
    },
  })
)(ShareText);