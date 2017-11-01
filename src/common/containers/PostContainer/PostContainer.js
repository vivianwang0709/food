import React from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';

export default connect(
    (state) => ({
      recipeId: state.getIn(['recipe', 'recipe', 'id']),
      name: state.getIn(['recipe', 'recipe', 'name']),
      description: state.getIn(['recipe', 'recipe', 'description']),
      imagePath: state.getIn(['recipe', 'recipe', 'imagePath']),
    }),
    (dispatch) => ({
    })
  )(Post);
  
  