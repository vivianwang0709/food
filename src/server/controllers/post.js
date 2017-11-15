import Express from 'express';
import Recipe from '../models/recipe';


// API Route
const postRoutes = Express.Router();

postRoutes.get('/:id', (req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps == null) {
          res.status(404).send('Not found');
        }
        fetchPostData(req.params.id).then((response) => {
          let isAuthorized = false;
          if (response[1].data.success === true) {
             isAuthorized = true;
          } else {
            isAuthorized = false;        
          }
          let data = reponse[0].data
          const initialState = fromJS({
            recipe: {
              recipes: response[1].data,
              recipe: {
                id: data.id,
                name: data.name, 
                description: '', 
                imagePath: '', 
                location: '',           
              }  
            },
            user: {
              isAuthorized: isAuthorized,
              isEdit: false,
            }
          });
          // Create a new Redux store instance
          const store = configureStore(initialState);
          const initView = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          );
          let state = store.getState();
          let page = renderFullPage(initView, state);
          return res.status(200).send(page);
        })
        .catch(err => res.end(err.message));
      })



/*     Recipe.find({_id: req.params.id}, (err, recipe) => {
      res.status(200).json(recipe);
    }) */
  });

export default postRoutes;