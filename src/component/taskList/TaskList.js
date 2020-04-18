import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListIcon from '@material-ui/icons/List';
import ForwardIcon from '@material-ui/icons/Forward';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

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

function TaskList(props) {
    const { title, task } = props.data;

    return (
        <div>
            <div className="container">
                <h6 className="h6">{title}</h6>
                <div style={{ display: 'block', width: '60%' }}>
                    <hr style={{
                        color: '#fffff',
                        backgroundColor: '#fffff',
                        borderColor: '#fffff',
                    }} />
                </div>
            </div>
            {
                task.map((item, index) => {
                    const { status, taskame } = item;
                    var statusColor;
                    if (status === 'done') {
                        statusColor = 'green';
                    } else if (status === 'failed') {
                        statusColor = 'red';
                    } else {
                        statusColor = 'yellow';
                    }

                    return (
                        <>
                            <div className="list">
                                <div className="listFirstDiv">
                                    <FiberManualRecordIcon style={{ color: statusColor, paddingRight: '5px' }} fontSize="small" />
                                    <h5>{taskame}</h5>
                                </div>
                                <div className="downArrowDiv">
                                    <ArrowRightIcon className="downArrow" />
                                </div>
                            </div>
                            <div style={{ display: 'block', width: '100%' }}>
                                <hr style={{
                                    color: '#333333',
                                    backgroundColor: '#333333',
                                    borderColor: '#333333',
                                }} />
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default withStyles(styles)(TaskList);