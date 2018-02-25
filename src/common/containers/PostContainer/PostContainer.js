import React from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';
import { browserHistory } from 'react-router';

export default connect(
    (state) => ({
      isAuthorized: state.getIn(['user', 'isAuthorized']),      
      recpipes: state.getIn(['recipes, recipes']),
      recipeId: state.getIn(['recipe', 'recipe', 'id']),
      name: state.getIn(['recipe', 'recipe', 'name']),
      description: state.getIn(['recipe', 'recipe', 'description']),
      imagePath: state.getIn(['recipe', 'recipe', 'imagePath']),
      locations: state.getIn(['recipe', 'recipe', 'locations']),
      mcontent: state.getIn(['recipe', 'recipe', 'mcontent']),
    }),
    (dispatch) => ({
      onUpadateContent: (recipes, recipeId) => () => {
        browserHistory.push('/editor?recipeId=' + recipeId);               
      },
    })
  )(Post);
  
  