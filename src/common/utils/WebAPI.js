import axios from 'axios';
import { browserHistory } from 'react-router';
import uuid from 'uuid';


import { 
  authComplete,
  authError,
  hideSpinner,
  completeLogout,
  setRecipe,
  updateContent,
  getContent,
} from '../actions';


var loadScript = function(src) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  document.body.appendChild(tag);
};


function getCookie(keyName) {
  var name = keyName + '=';
  const cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0)==' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
  }
  return "";
}

export default {
  getContent: (dispatch, recipeId) => {
    axios.get('api/recipe/' + recipeId)
    .then((response) => {
      editor.codemirror.setValue('#fdfdf');
      if(response.data[0].content !== null){
        editor.codemirror.setValue(response.data[0].content);
      }
    })
    .catch(function (error) {
    });
  },
  updateContent: (dispatch, recipeId, content, mcontent) => {
    axios.put('/api/recipe/content/' + recipeId + '?token=' + getCookie('token'), {
      id: recipeId,
      content: content,
      mcontent: mcontent,
    })
    .then((response) => {
      if(response.data.success === false) {
        dispatch(hideSpinner());  
        dispatch(setRecipe({ key: 'recipeId', value: '' }));
        dispatch(setUi({ key: 'isEdit', value: false }));
        alert('發生錯誤，請再試一次！');
        browserHistory.push('/editor?recipeId=' + recipeId);         
      } else {
        dispatch(hideSpinner());  
        //window.location.reload();        
        //browserHistory.push('/'); 
      }
    })
    .catch(function (error) {
    });
  },
  setContent: (dispatch, recipeId) => {
    const mcontent = editor.codemirror.getValue();
    const content = Editor.markdown(mcontent);
    editor.codemirror.setValue('#hope it will success');
    dispatch(setRecipe({ keyPath: ['recipe', 'content'], value: content }));
    dispatch(setRecipe({ keyPath: ['recipe', 'mcontent'], value: mcontent }));
    dispatch(updateContent(dispatch, recipeId, mcontent,content))
  },
  addScript: () => {
    loadScript('/static/js/editor.js');
    loadScript('/static/js/marked.js');
    loadScript('/static/js/zepto.min.js');
    //browserHistory.push('/'); 
  },
  login: (dispatch, email, password) => {
    axios.post('/api/login', {
      email: email,
      password: password
    })
    .then((response) => {
      if(response.data.success === false) {
        dispatch(authError()); 
        dispatch(hideSpinner());  
        alert('發生錯誤，請再試一次！');
        window.location.reload();        
      } else {
        if (!document.cookie.token) {
          // Cookies are data, stored in small text files, on your computer.
          // document.cookie is the way to creat a cookie by javascipt.
          let d = new Date();
          d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
          const expires = 'expires=' + d.toUTCString();
          document.cookie = 'token=' + response.data.token + '; ' + expires;
          dispatch(authComplete());
          dispatch(hideSpinner());  
          browserHistory.push('/'); 
        }
      }
    })
    .catch(function (error) {
      dispatch(authError());
    });
  },
  logout: (dispatch) => {
    document.cookie = 'token=; ' + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    dispatch(hideSpinner());  
    browserHistory.push('/'); 
  },
  checkAuth: (dispatch, token) => {
    axios.post('/api/authenticate', {
      token: token,
    })
    .then((response) => {
      if(response.data.success === false) {
        dispatch(authError()); 
      } else {
        dispatch(authComplete());
      }
    })
    .catch(function (error) {
      dispatch(authError());
    });
  },
  getRecipes: () => {
    axios.get('/api/recipes')
    .then((response) => {
    })
    .catch((error) => {
    });
  },
  addRecipe: (dispatch, name, description, imagePath, locations) => {
    const id = uuid.v4();
    axios.post('/api/recipes?token=' + getCookie('token'), {
      id: id,
      name: name,
      description: description,
      imagePath: imagePath,
      locations: locations,
      content:'null',
      mcontent:'null',
    })
    .then((response) => {
      if(response.data.success === false) {
        dispatch(hideSpinner());  
        alert('發生錯誤，請再試一次！');
        browserHistory.push('/share');         
      } else {
        window.location.reload();
        dispatch(hideSpinner());
        browserHistory.push('/editor?recipeId=' + response.data[0]._id);
      }
    })
    .catch(function (error) {
    });

/*     axios.get('/api/recipes', {
    })
    .then((recipes) => {
      // add _id to store:recipe
      const index = recipes['data'].length - 1;
      const recipe = recipes['data'][index];
      dispatch(setRecipe({ keyPath: ['recipe', 'id'], value: recipe._id }));        
      //window.location.reload();
      browserHistory.push('/editor?recipeId=' + recipe._id);
    }); */
  },
  updateRecipe: (dispatch, recipeId, name, description, imagePath, location) => {
    axios.put('/api/recipes/' + recipeId + '?token=' + getCookie('token'), {
      id: recipeId,
      name: name,
      description: description,
      imagePath: imagePath,
      locations: locations,
    })
    .then((response) => {
      if(response.data.success === false) {
        dispatch(hideSpinner());  
        dispatch(setRecipe({ key: 'recipeId', value: '' }));
        dispatch(setUi({ key: 'isEdit', value: false }));
        alert('發生錯誤，請再試一次！');
        browserHistory.push('/share');         
      } else {
        dispatch(hideSpinner());  
        window.location.reload();        
        browserHistory.push('/'); 
      }
    })
    .catch(function (error) {
    });
  },
  deleteRecipe: (dispatch, recipeId) => {
    axios.delete('/api/recipes/' + recipeId + '?token=' + getCookie('token'))
    .then((response) => {
      if(response.data.success === false) {
        dispatch(hideSpinner());  
        alert('發生錯誤，請再試一次！');
        browserHistory.push('/');         
      } else {
        dispatch(hideSpinner()); 
        // 頁面重載 
        window.location.reload();        
        browserHistory.push('/'); 
      }
    })
    .catch(function (error) {
    });    
  } 
};