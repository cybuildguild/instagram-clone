import React, { Component } from "react";
import './MainContent.css';
import Grid from "@mui/material/Grid";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item={2}></Grid>
                    <Grid item={6}>
                        <div>
                            
                        </div>
                    </Grid>

                    <Grid>
                        <Grid item={2}></Grid>
                    </Grid>
                    <Grid>
                        <Grid item={2}></Grid>
                    </Grid>
                </Grid>
            </div>
            
        );
    }
}
export default MainContent;