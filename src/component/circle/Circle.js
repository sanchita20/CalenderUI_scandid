import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListIcon from '@material-ui/icons/List';
import TextField from '@material-ui/core/TextField';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
    return (
        <div class="mainCircle">
            <CircularProgressbarWithChildren
                styles={buildStyles({
                    pathColor: 'red'
                })}
                value={60}
                strokeWidth={1.5}
            // text={'00:00'}
            >
                <div style={{ marginTop: '-70px' }}>
                    <h1>00:00</h1>
                </div>
                <div class="timerClockOuterCircle">
                    <AccessTimeIcon className="iconCounterColor" fontSize="large" />
                </div>
                <div class="checkbox">
                    <CheckBoxIcon fontSize="large" style={{ color: 'green' }} />
                </div>
            </CircularProgressbarWithChildren >
        </div>

    );
}

export default withStyles(styles)(Circle);