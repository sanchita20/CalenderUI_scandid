import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Header from '../../component/header/Header'
import TaskList from '../../component/taskList/TaskList'

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

const data = [
    {
        title: 'Todays Activity',
        task: [
            {
                taskame: 'Branding Reseach',
                status: 'done'
            },
            {
                taskame: 'Email Template design',
                status: 'done'
            }
        ]
    },
    {
        title: 'Tasks',
        task: [
            {
                taskame: 'Artwork poster',
                status: 'failed'
            },
            {
                taskame: 'Design Homepage',
                status: 'failed'
            },
            {
                taskame: 'Photoshoot Prep',
                status: 'pending'
            },
            {
                taskame: 'Development work',
                status: 'pending'
            }
        ]
    }
]


class ActivityList extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    onNotificationClick = () => {
        alert('onNotificationClick')
    }

    render() {
        return (
            <div className="Container">
                <Header onNotificationClick={this.onNotificationClick} timeIcon={true} />
                <div className="mainContainer">
                    {
                        data.map((item, index) => (
                            <TaskList data={item} key={index} />
                        ))
                    }
                </div>


            </div>
        );
    }
}

export default withStyles(styles)(ActivityList);
