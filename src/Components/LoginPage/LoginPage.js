import { Grid } from "@mui/material";
import '.LoginPage.css';
import React, { Component } from "react";
import inst_image from '../../images/9264675fb26.svg';
import insta_logo from '../../images/logoinsta.png';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_image} width="450" />
                            </div>
                        </div>
                        <div className="loginpage__rightcomponent">
                            <img className="loginpage__logo" src={insta_logo} />
                            <div className="loginPage__signin">
                                <input className="loginpage__text" type="text"/>
                                <input className="loginpage__text" type="password"/>
                                <button className="login__button">Sign In</button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;