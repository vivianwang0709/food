import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const Post = (props) => {
    const id = props.params.name; 
    return(
        <Col xs={6} md={4}>
          <h3>{props.name}</h3>
          <h3>{props.params.name}</h3>
          <img src={props.imagePath} alt="242x200"></img>
          <h3>{props.description}</h3>
        </Col>
    );
}
export default Post;