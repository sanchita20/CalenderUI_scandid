import React from "react";
import moment from 'moment';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


import './style.css';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.width = props.width || '350px';
        this.style = props.style || {};
        this.style.width = this.width; // add this
        this.state = {
            dateContext: moment(),
            month: moment().format("MMMM"),
            year: moment().format("Y"),
            today: moment(),
            showMOnthPopup: false,
            showYearPopup: false,
            selectedDay: null
        }
    }

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = (type) => {
        if (type === 'prevYear') {
            return this.setState({ year: this.state.dateContext.subtract(1, "Y").format("Y") });
        } else if (type === 'nextYear') {
            return this.setState({ year: this.state.dateContext.add(1, "Y").format("Y") });
        } else {
            return this.state.dateContext.format("Y");
        }
    }

    month = (type) => {
        if (type === 'prevMonth') {
            return this.setState({ month: this.state.dateContext.subtract(1, "M").format("MMMM") });
        } else if (type === 'nextMonth') {
            return this.setState({ month: this.state.dateContext.add(1, "M").format("MMMM") });
        } else {
            return this.state.dateContext.format("MMMM");
        }
    }

    prevMonth = () => {
        return this.state.dateContext.add(1, "M").format("MMMM");
    }

    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        console.log("currentDate: ", this.state.dateContext.get("date"));
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // Day of week 0...1..5...6
        return firstDay;
    }

    YearNav = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                <div style={{ cursor: 'pointer' }} onClick={() => this.year('prevYear')}>
                    <ArrowLeftIcon />
                </div>
                <span
                    className="label-year">
                    {this.state.year}
                </span>
                <div style={{ cursor: 'pointer' }} onClick={() => this.year('nextYear')}>
                    <ArrowRightIcon />
                </div>
            </div>
        );
    }

    MonthNav = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', paddingBottom: '10px' }}>
                <div style={{ cursor: 'pointer' }} onClick={() => this.month('prevMonth')}>
                    <ArrowLeftIcon />
                </div>
                <span className="label-month">
                    {this.state.month}
                </span>
                <div style={{ cursor: 'pointer' }} onClick={() => this.month('nextMonth')}>
                    <ArrowRightIcon />
                </div>
            </div>
        );
    }

    onDayClick = (e, day) => {
        this.setState({
            selectedDay: day
        }, () => {
            console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(e, day);
    }

    render() {
        // Map the weekdays i.e Sun, Mon, Tue etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        });

        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
            </td>
            );
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <td key={d} className={className + selectedClass} >
                    <span onClick={(e) => { this.onDayClick(e, d) }}>{d}</span>
                </td>
            );
        }

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return (
                <tr key={i * 100}>
                    {d}
                </tr>
            );
        })

        return (
            <div className='calendar-container' style={this.style}>{
                this.props.showYear &&
                <table className="calendar">
                    <thead>
                        <tr className="calendar-year-header">
                            <td colSpan="8">
                                <this.YearNav />
                            </td>
                        </tr>
                    </thead>
                </table>
            }
                {
                    this.props.showMonthDate &&
                    <table className="calendar">
                        <thead>
                            <tr className="calendar-header">
                                <td colSpan="8">
                                    <this.MonthNav />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="calendar-weekdays">
                                {weekdays}
                            </tr>
                            {trElems}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}