import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import LinearProgress from '@material-ui/core/LinearProgress';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import format from 'date-fns/format';
import NotificationCenterStyles from '../../styles/NotificationCenter';
import { formatPrice, getStocks, getWeather, getWeatherIcon } from '../../helpers';
import { mockNotifications, mockTodo, mockStats } from '../../utils/mock';

class NotificationCenter extends Component {
  state = {
    tab: 1,
    stocks: undefined,
    forecast: undefined
  };

  mounted = true;

  handleTabToggle = (event, tab) => {
    this.setState({ tab });
  };

  async componentDidMount() {
    const stocks = await getStocks('MSFT,FB,AAPL,GOOG,DAX');
    const forecast = await getWeather('london', 'uk', 1);

    if (this.mounted) {
      if (stocks) this.setState({ stocks });
      if (forecast) this.setState({ forecast })
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { classes, notificationsOpen, toogleNotifications } = this.props;
    const { tab, stocks, forecast } = this.state;
    const today = Date.now();
    return (
      <Drawer
        variant="temporary"
        anchor="right"
        open={notificationsOpen}
        ModalProps={{
          keepMounted: false,
          className: classes.modal,
          BackdropProps: {
            className: classes.backdrop,
          },
          onBackdropClick: toogleNotifications
        }}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Tabs
          value={tab}
          onChange={this.handleTabToggle}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
          centered
          fullWidth
        >
          <Tab
            classes={{ root: classes.tabRoot }}
            label="Today"
          />
          <Tab
            classes={{ root: classes.tabRoot }}
            label="Notifications"
          />
        </Tabs>
        <div className={classes.container}>
          { tab === 0 &&
            <Fragment>
              <div className={classes.padding}>
                <Typography variant="display1" gutterBottom>{format(today, 'dddd')}</Typography>
                <Typography variant="subheading">{format(today, 'MMM Do YY')}</Typography>
              </div>
              { stocks &&
                <Fragment>
                  <Divider />
                  <List component="nav" subheader={<ListSubheader disableSticky>Stocks</ListSubheader>}>
                    { stocks['Stock Quotes'].map((stock, index) => (
                      <ListItem button key={index}>
                        <ListItemText primary={stock['1. symbol']} />
                        <ListItemSecondaryAction className="mx-1">
                          <Typography variant="caption">{formatPrice(stock['2. price'])}</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                  </List>
                </Fragment>
              }
              { forecast &&
                <Fragment>
                  <Divider />
                  <List subheader={<ListSubheader disableSticky>Weather</ListSubheader>}>
                    <ListItem button>
                      <ListItemText primary={forecast.city.country} secondary={forecast.city.name} />
                      <ListItemSecondaryAction className="mx-1">
                        <Typography variant="title">
                          { <Fragment>
                              <i className={classNames(getWeatherIcon(forecast.list[0].weather[0].icon), 'text-lg mx-1')}></i>
                              {forecast.list[0].main.temp}
                            </Fragment>
                          }
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Fragment>
              }
              <Divider />
              <List subheader={<ListSubheader disableSticky>Tasks</ListSubheader>}>
                { mockTodo.map((todo, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={todo.title} secondary={todo.subtitle} />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List subheader={<ListSubheader disableSticky>Stats</ListSubheader>}>
                { mockStats.map((stat, index) => (
                  <div className={classes.padding} key={index}>
                    <Typography variant="caption">{stat.title}</Typography>
                    <LinearProgress variant="determinate" value={stat.value} />
                  </div>
                ))}
              </List>
            </Fragment>
          }
          { tab === 1 &&
            <List>
              { mockNotifications.map((notification, index) => (
                <ListItem button key={index}>
                  {notification.avatar}
                  <ListItemText primary={notification.title} secondary={notification.subtitle} />
                </ListItem>
              ))}
            </List>
          }
        </div>
      </Drawer>
    );
  }
}

NotificationCenter.propTypes = {
  classes: PropTypes.object.isRequired,
  notificationsOpen: PropTypes.bool,
  toogleNotifications: PropTypes.func
}

export default withStyles(NotificationCenterStyles)(NotificationCenter);