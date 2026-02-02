import React, { Component } from "react";
import './Post.css';
import Post from '../Post/Post';
import Avatar from "@mui/material/Avatar";
import postimage from '../../images/profilephoto.jpeg';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div className="post__container">
                {Header}

                <div className="post__container">
                    <Avatar className="post__images" src=""/>
                    <div className="post__username">Username</div>
                </div>
                <div>
                    <img src={postimage} width="610px" />
                </div>
                <div>

                </div>
                <div></div>
                
            </div>
        );
    }

}
export default Post;