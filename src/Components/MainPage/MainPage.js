import React, { Component } from "react";
import './MainPage.css';
import './Post.css';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div>
                <Post/>
            </div>
        );
    }

}
export default MainPage;