import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListIcon from '@material-ui/icons/List';
import ForwardIcon from '@material-ui/icons/Forward';

import { withStyles } from "@material-ui/core/styles";
import './style.css';

const styles = {
    input: {
        color: "white"
    },
    formText: {
        color: 'white',
    },
    formLabelFocused: {
    }
};


function Circle(props) {
    const { timeIcon } = props;
    return (
        <div className="Header">
            <div className="leftHeaderUI">
                <AppsIcon color="white" fontSize="large" />
                <p className="name">Mike</p>
            </div>
            {
                !!timeIcon ?
                    <div class="notificationUI">
                        <ForwardIcon className="arrow" fontSize="small" />
                        <AccessTimeIcon className="accessTime" />
                    </div>
                    :
                    <div class="notificationUI" onClick={() => props.onNotificationClick()}>
                        <ListIcon color="white" fontSize="large" />
                        <div className="notificationCount">
                            <p className="count">4</p>
                        </div>
                    </div>
            }
        </div>
    );
}

export default withStyles(styles)(Circle);