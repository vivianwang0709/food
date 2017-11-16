import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const Post = (props) => {
    const location = props.location;
    return (
        <div className='post_frame'>
            <h3>{props.name}</h3>
            <h3>{props.params.name}</h3>
            <img src={props.imagePath} alt="242x200"></img>
            <h3>{props.description}</h3>
            <iframe width="400" height="300" src={'http://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=' + props.location + '&z=16&output=embed&t='}></iframe>
        </div>
    );
}
export default Post;