import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import TextField from '@material-ui/core/TextField';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from "@material-ui/core/styles";
import Calendar from "../../component/calendar/Calendar";
import moment from 'moment'
import './style.css';

const styles = {
    input: {
        color: "white"
    },
    formText: {
        color: 'white',
    },
    formLabelFocused: {
    },
    textView: {
        float: 'left',
        backgroundColor: '#282c34',
        borderRadius: '4px',
        width: '300px'
    },
    calendarStyle: {
        position: 'relative',
        margin: '20px auto'
    }
};


class CalenderUI extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }

    timeChange = (event) => {
        const { value } = event.target;
        if (Number(value) && value.length <= 5) {
            this.setState({ time: moment(value, 'HH').format('HH:mm') })
        } else alert('Please enter number in given format')
    }

    onDayClick = (e, day) => {
        console.log(day);
    }

    render() {
        const { classes } = this.props;
        const { time } = this.state;
        return (
            <div className="Container">
                <div className="topDiv">
                    <TextField
                        className={classes.textView}
                        id="filled-secondary"
                        label={time === '' && "00:00"}
                        size="small"
                        value={time}
                        type="text"
                        maxLength={4}
                        variant="filled"
                        onChange={this.timeChange}
                        InputLabelProps={{
                            className: classes.input
                        }}
                        InputProps={{
                            className: classes.input,
                        }}
                    />
                    <div className="calendarIconDiv">
                        <DateRangeIcon fontSize="large" className='dateRangeIcon' />
                    </div>
                </div>
                <div style={{ backgroundColor: '#282c34' }}>
                    <Calendar style={{ position: 'relative', margin: '20px auto' }} width='302px' showYear={true} />
                </div>
                <div style={{ backgroundColor: '#282c34' }}>
                    <Calendar
                        style={{ position: 'relative', margin: '20px auto' }}
                        width='302px'
                        showMonthDate={true}
                        onDayClick={(e, day) => this.onDayClick(e, day)} />
                </div>

                <div className="bottomDiv">
                    <Button variant="contained" size="large" style={{ backgroundColor: 'green', width: '300px', color: 'white' }}>
                        Set Date
                    </Button>
                    <div className="cancelIconDiv" onClick={() => this.props.callBack()}>
                        <CloseIcon
                            fontSize="large"
                            style={{ alignSelf: 'center', float: 'right', backgroundColor: 'red', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CalenderUI);
