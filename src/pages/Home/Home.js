import React, { Component } from 'react';
import { Bar, Bubble } from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PhoneIcon from '@material-ui/icons/Phone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import MoreIcon from '@material-ui/icons/More';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Wrapper, NewsCard, StatCard, WeatherCard, PostCard } from '../../components';
import { mockFeed, mockDashboard } from '../../utils/mock';

let id = 0;
function createData(name, date, progress) {
  id += 1;
  return { id, name, date, progress };
}

const data = [
  createData('UI prototyping', 'January 23', 67),
  createData('Design', 'February 2', 87),
  createData('Development', 'March 30', 54),
  createData('Testing and delivery', 'April 12', 34),
  createData('Ongoing maintanance', 'May 28', 56),
  createData('Extensive review', 'December 3', 56),
];

class Home extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const chartMenu = (
      <Menu
        id="chart-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText inset primary="Settings" />
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
          <ListItemIcon>
            <MoreIcon />
          </ListItemIcon>
          <ListItemText inset primary="View more" />
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
          <ListItemIcon>
            <NotificationsOffIcon />
          </ListItemIcon>
          <ListItemText inset primary="Disable notifications" />
        </MenuItem>
        <MenuItem onClick={this.handleClose}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText inset primary="Remove panel" />
        </MenuItem>
      </Menu>
    );

    return (
      <Wrapper>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              type="fill"
              title="Campaigns"
              value={103}
              icon={<LocalOfferIcon />}
              color="#3f51b5"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              type="fill"
              title="Customers"
              value={230}
              icon={<PhoneIcon />}
              color="#9c27b0"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              type="fill"
              title="Queries"
              value={323}
              icon={<NotificationsIcon />}
              color="#f44336"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              type="fill"
              title="Opens"
              value={870}
              icon={<EmailIcon />}
              color="#ffd740"
            />
          </Grid>
          {chartMenu}
          { mockDashboard.map((chart, index) => (
            <Grid item xs={12} sm={12} md={4} key={index}>
              <Card>
                <CardHeader
                  subheader={chart.title}
                  action={
                    <IconButton id={`${index}-menu-button`} onClick={this.handleClick}>
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent>
                  { chart.type === 'bar' &&
                    <Bar
                      data={chart.data}
                      height={chart.height}
                      options={chart.options}
                    />
                  }
                  { chart.type === 'bubble' &&
                    <Bubble
                      data={chart.data}
                      height={chart.height}
                      options={chart.options}
                    />
                  }
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={8}>
            <Paper className="table-responsive">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Project</TableCell>
                    <TableCell numeric>Due Date</TableCell>
                    <TableCell numeric>Current Progress</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { data.map(n => (
                    <TableRow key={n.id}>
                      <TableCell component="th" scope="row">
                        {n.name}
                      </TableCell>
                      <TableCell numeric>{n.date}</TableCell>
                      <TableCell numeric>{<LinearProgress variant="determinate" value={n.progress} />}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <NewsCard
              subtitle="Last updated 24 mins ago"
              feed={mockFeed}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <PostCard
              title="Shrimp and Chorizo Paella"
              subtitle="Yesterday"
              image="/static/images/unsplash/2.jpg"
              imageHeight={153}
              text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
              avatar={
                <Avatar aria-label="Post" style={{backgroundColor: red[500]}}>
                  R
                </Avatar>
              }
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <WeatherCard
              city="london"
              country="uk"
              days={7}
            />
          </Grid>
        </Grid>
      </Wrapper>
    )
  }
}

export default Home;