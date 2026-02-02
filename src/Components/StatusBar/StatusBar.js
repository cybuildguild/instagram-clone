import React, { Component } from "react";
import './StatusBar.css';
import Avatar from "@mui/material/Avatar"; //Do not import Avatar in curly brackets... will receive an error
import statusimg from '../../images/profilephoto/jpeg';


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state =  { }
    }
    render() {
        return (
            <div>
                //Create Container in here
                <div className="statusbar__container">
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar__text">CyBuildGuild</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar__text">CyBuildGuild</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar__text">CyBuildGuild</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar__text">CyBuildGuild</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar__text">CyBuildGuild</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar__text">CyBuildGuild</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={statusimg}/>
                        <div className="statusbar__text">CyBuildGuild</div>
                    </div>
                </div>
            </div>
        );
    }

}
export default StatusBar;