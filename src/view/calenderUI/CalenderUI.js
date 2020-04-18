import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Header from '../../component/header/Header'
import TaskList from '../../component/taskList/TaskList'
import TextField from '@material-ui/core/TextField';

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


class CalenderUI extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    onNotificationClick = () => {
        alert('onNotificationClick')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="Container">
                <div class="textUI">
                    <TextField
                        label="00:00"
                        type="text"
                        variant="filled"
                        fullWidth="false"
                        InputLabelProps={{
                            className: classes.input
                        }}
                        InputProps={{
                            className: classes.input
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CalenderUI);
