import React, { Component } from "react";
import './HomePage.css';
import MainContent from "../MainContent/MainContent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div>
                <NavBar/>
                <MainContent/>
            </div>
            
        );
    }
}
export default Home;