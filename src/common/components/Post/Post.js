import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';


const Post = (props) => {
    return (
        <div className='post_frame'>
        {
            props.isAuthorized === true ? (
            <div className="post_button"> 
                <Button bsStyle="default" onClick={props.onUpadateContent(props.recipes, props.location.query.recipeId)}>Modify</Button>
            </div>): null            
        }
            <div className='post_content'>
                <h3>{props.name}</h3>
                <h5>{props.description}</h5>
                <div className='content_img'>
                    <img src={props.imagePath} alt="242x200"></img>
                </div>
                <div className='content' dangerouslySetInnerHTML={{__html:props.mcontent}}></div>
                <div className='content_map'>
                    <iframe height="300" src={'http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=' + props.locations + '&z=16&output=embed&t='}></iframe>
                </div>
            </div>
        </div>
    );
}
export default Post;