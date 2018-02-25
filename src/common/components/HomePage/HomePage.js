import React from 'react';
import RecipeBoxContainer from '../../containers/RecipeBoxContainer';

const HomePage = ({
  recipes
}) => (
  <div className='home_post'>        
  {
    recipes.map((recipe, index) => (
      <RecipeBoxContainer recipe={recipe} key={index}  />
    )).toJS()
  }
  </div>
);

export default HomePage;