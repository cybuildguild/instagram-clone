import React, { Component } from "react";
import './NavBar.css';
import Grid from "@mui/material/Grid"; //Do not import Grid in curly brackets... will receive an error
import insta_logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/react.svg";
import Avatar from "@mui/material/Avatar"; //Do not import Avatar in curly brackets... will receive an error
import dp from '../../images/profilephoto.jpeg';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div>
                <div className="navbar__barContent">
                    <Grid container>

                        <Grid item xs={2}>

                        </Grid>

                        <Grid item xs={3}>
                            <img className="navbar_logo" src={insta_logo} width="105px"/>
                        </Grid>

                        <Grid item xs={3}>
                            <input type="text" className="navbar__searchBar" placeholder="Search"/>
                        </Grid>

                        <Grid itemxs={3} style={{"display":flex}}>
                            <img className="navbar__img" src={home} width="25px"/>
                            <img className="navbar__img" src={message} width="25px"/>
                            <img className="navbar__img" src={find} width="25px"/>
                            <img className="navbar__img" src={react} width="25px"/>
                            <Avatar src={dp} className="navbar__img" style={{"maxHeight":"230x", "maxWidth":"30px"}}/>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default NavBar;