import { createAction } from 'redux-actions';
import WebAPI from '../utils/WebAPI';

import {
  GET_RECIPES,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
  SET_RECIPE,
  SET_CONTENT,
  UPDATE_CONTENT,
  GET_CONTENT,
} from '../constants/actionTypes';
import { create } from 'domain';

export const getRecipes = createAction('GET_RECIPES', WebAPI.getRecipes);
export const addRecipe = createAction('ADD_RECIPE', WebAPI.addRecipe);
export const updateRecipe = createAction('UPDATE_RECIPE', WebAPI.updateRecipe);
export const deleteRecipe = createAction('DELETE_RECIPE', WebAPI.deleteRecipe);
export const setRecipe = createAction('SET_RECIPE');
export const addScript = createAction('ADD_SCRIPT', WebAPI.addScript);
export const setContent = createAction('SET_CONTENT', WebAPI.setContent);
export const updateContent = createAction('UPDATE_CONTENT', WebAPI.updateContent);
export const getContent = createAction('GET_CONTENT',WebAPI.getContent);