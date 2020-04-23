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
import Circle from './component/circle/Circle'
import Header from './component/header/Header'
import ActivityList from './view/activityList/ActivityList'
import CalenderUI from './view/calenderUI/CalenderUI'

import { withStyles } from "@material-ui/core/styles";
import './App.css';

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


class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      viewActivity: false,
      viewCalender: false
    }
  }

  onNotificationClick = () => {
    this.setState(prevState => ({
      viewActivity: !prevState.viewActivity,
      viewCalender: false
    }))
  }

  onTimeClick = () => {
    this.setState(prevState => ({
      viewCalender: !prevState.viewCalender,
      viewActivity: false,
    }))
  }

  render() {
    const { classes } = this.props;
    const { viewActivity, viewCalender } = this.state;
    return (
      <>
        <div className="App">
          <div className="Container">
            <Header onNotificationClick={this.onNotificationClick} />
            <div class="textUI">
              <TextField
                label="Type task name"
                type="text"
                variant="filled"
                fullWidth="true"
                InputLabelProps={{
                  className: classes.input
                }}
                InputProps={{
                  className: classes.input
                }}
              />
            </div>
            <Circle viewInsideCircle={viewActivity ? true : false} />
            <div class="timeUI">
              <Input
                id="standard-adornment-password"
                disabled
                style={{ color: 'white', width: '47vmin', paddingTop: '5px' }}
                value={"Add Time"}
                InputProps={{
                  className: classes.input
                }}
                InputLabelProps={{
                  className: classes.input
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.onTimeClick}
                    >
                      {<AccessTimeIcon className="iconColor" />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          </div>
          {
            viewActivity &&
            <div style={{ position: 'absolute', zIndex: 1, marginLeft: '105vmin', height: '550px' }}><ActivityList /></div>
          }
          {
            viewCalender &&
            <div style={{ position: 'absolute', zIndex: 1, marginLeft: '105vmin', height: '550px' }}>
              <CalenderUI callBack={() => { this.setState({ viewCalender: false }) }} />
            </div>
          }
        </div>
      </>
    );
  }
}

export default withStyles(styles)(App);
