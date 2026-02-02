import React, { Component } from "react";
import './HomePage.css';
import NavBar from "../NavBar/NavBar";
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