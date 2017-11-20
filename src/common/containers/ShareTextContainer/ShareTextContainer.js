import React from 'react';
import { connect } from 'react-redux';
import ShareText from '../../components/ShareText';

import { 
  addScript,
  setRecipe,
  setContent 
} from '../../actions';


export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    onLoad: (e) => (
      dispatch(addScript())
    ),
    onEditorSubmit: (event) => (
      dispatch(setRecipe({ keyPath: ['recipe','content'], value: editor.codemirror.getValue() }))
    ),
  })
)(ShareText);