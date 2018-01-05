import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';


const Post = (props) => {
    return (
        <div className='post_frame'>
        {
            props.isAuthorized === true ? (
            <p> { 
            console.log(props.location.query.recipeId) }
                <Button bsStyle="default" onClick={props.onUpadateContent(props.recipes, props.location.query.recipeId)}>Modify</Button>
            </p>): null            
        }
            <h3>{props.name}</h3>
            <img src={props.imagePath} alt="242x200"></img>
            <h3>{props.description}</h3>
            <iframe width="400" height="300" src={'http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=' + props.locations + '&z=16&output=embed&t='}></iframe>
        </div>
    );
}
export default Post;