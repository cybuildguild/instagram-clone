import { Grid } from "@mui/material";
import '.LoginPage.css';
import React, { Component } from "react";
import inst_image from '../../images/9264675fb26.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

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
                        <div>
                        <div className="loginpage__rightcomponent">
                            <img className="loginpage__logo" src={insta_logo} />
                            <div className="loginPage__signin">
                                <input className="loginpage__text" type="text" placeholder="Phone number, username or email"/>
                                <input className="loginpage__text" type="password" placeholder="Password"/>
                                <button className="login__button">Sign In</button>
                            </div>

                            <div className="login__ordiv">
                                <div className="login__dividor"></div>
                                <div className="login__or">OR</div>
                                <div className="login__dividor"></div>
                            </div>
                            <div className="login__fb">
                                <img src={fb} width="15px" style={{"marginRight":"5px"}}/>Log in with Facebook</div>
                            <div className="login_forgt">Forgot Password?</div>
                        </div>
                        </div>
                        
                        <div className="loginpage__signupoption">
                            <div className="loginpage__signin">
                                Don't have an account? Sign up
                            </div>
                            <div className="loginPage__signup">
                                Get the app.
                            </div>
                        </div>
                        <div>
                            <img src={appstore}/>
                            <img src={playstore}/>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;