import { Grid } from "@mui/material";
import React, { Component } from "react";
import inst_image from '../../images/9264675fb26.svg';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        Hello
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <div>
                                <img src={inst_image}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        CyBuildGuild
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;