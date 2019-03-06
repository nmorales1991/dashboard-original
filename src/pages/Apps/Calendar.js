import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TodayIcon from '@material-ui/icons/Today';
import { mockEvents } from '../../utils/mock';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const CustomToolbar = (toolbar) => {
  this.toolbarDate = toolbar.date;

  const handleChanger = (event, value) => {
    switch (value) {
      case 'day':
        goToDayView()
        break;
      case 'week':
        goToWeekView()
        break;
      default:
        goToMonthView()
        break;
    }
  };

  const goToDayView = () => {
    toolbar.onViewChange('day');
  }
  const goToWeekView = () => {
    toolbar.onViewChange('week');
  }
  const goToMonthView = () => {
    toolbar.onViewChange('month');
  }
  const goToBack = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() - 1);
    toolbar.onNavigate('prev');
  }
  const goToNext = () => {
    toolbar.date.setMonth(toolbar.date.getMonth() + 1);
    toolbar.onNavigate('next');
  }
  const goToCurrent = () => {
    const now = new Date();
    toolbar.date.setMonth(now.getMonth());
    toolbar.date.setYear(now.getFullYear());
    toolbar.onNavigate('current');
  }
  const label = () => {
    const date = moment(toolbar.date);
    return <span><b>{date.format('MMMM')}</b><span> {date.format('YYYY')}</span></span>;
  }

  return (
    <AppBar position="static" style={{zIndex: 1000}}>
      <Toolbar className="calendar-toolbar">
        <Hidden mdUp>
          <Typography variant="title" color="inherit" className="flexSpacer px-1">{label()}</Typography>
          <IconButton aria-label="Previous" color="inherit" onClick={goToBack}><ChevronLeftIcon /></IconButton>
          <IconButton aria-label="Today" color="inherit" onClick={goToCurrent}><TodayIcon /></IconButton>
          <IconButton aria-label="Next" color="inherit" onClick={goToNext}><ChevronRightIcon /> </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden smDown>
        <Toolbar className="calendar-toolbar">
          <Typography variant="title" color="inherit" className="flexSpacer px-1">{label()}</Typography>
          <Button color="inherit" onClick={goToDayView}>Day</Button>
          <Button color="inherit" onClick={goToWeekView}>Week</Button>
          <Button color="inherit" onClick={goToMonthView}>Month</Button>
          <Hidden mdUp>
            <span className="flexSpacer" />
          </Hidden>
          <IconButton aria-label="Previous" color="inherit" onClick={goToBack}><ChevronLeftIcon /></IconButton>
          <IconButton aria-label="Today" color="inherit" onClick={goToCurrent}><TodayIcon /></IconButton>
          <IconButton aria-label="Next" color="inherit" onClick={goToNext}><ChevronRightIcon /> </IconButton>
        </Toolbar>
      </Hidden>
      <Hidden mdUp>
        <Tabs value={toolbar.view} onChange={handleChanger}>
          <Tab label="Day" value="day" />
          <Tab label="Week" value="week" />
          <Tab label="Month" value="month" />
        </Tabs>
      </Hidden>
    </AppBar>
  );
};

class Calendar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Typography component="div">
        <BigCalendar
          events={mockEvents}
          defaultDate={new Date(2015, 3, 1)}
          components={{
            toolbar: CustomToolbar
          }}
        />
      </Typography>
    );
  }
}

export default Calendar;