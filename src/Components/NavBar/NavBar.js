import React, { Component } from "react";
import './NavBar.css';
import { Grid } from "@mui/material/Grid";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div>
                <div className="navbar__barContent"></div>
            </div>
        );
    }
}
export default NavBar;