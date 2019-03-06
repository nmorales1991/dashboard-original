import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { capitalize, getWeather, windDirection, getWeatherIcon } from '../../helpers';
import WidgetStyles from '../../styles/Widget';
import format from 'date-fns/format';

class WeatherCard extends Component {
  state = {
    current: undefined,
    forecast: undefined
  }

  async componentDidMount() {
    const { city, country, days } = this.props;
    const forecast = await getWeather(city, country, days);

    if (forecast) {
      const current = forecast.list[0];
      this.setState({
        current,
        forecast
      })
    }
  }

   getWindDirection(degree) {
    const direction = windDirection(degree);
    switch (direction) {
      case 'n':
        return <ArrowUpwardIcon />;
      case 'ne':
        return <CallMadeIcon />;
      case 'e':
        return <ArrowForwardIcon />;
      case 'se':
        return <CallReceivedIcon className={this.props.classes.flip} />;
      case 's':
        return <ArrowDownwardIcon />;
      case 'sw':
        return <CallReceivedIcon />;
      case 'w':
        return <ArrowBackIcon />;
      case 'nw':
        return <CallMadeIcon className={this.props.classes.flip} />;
      default:
        break;
    }
  }

  render() {
    const { classes } = this.props;
    const { current, forecast } = this.state;
    return (
      <Card>
        { current &&
          <Fragment>
            <CardContent>
              <Grid
                container
                spacing={0}
                direction={'row'}
                justify={'space-between'}
              >
                <Grid item>
                  <Typography variant="title">{`${forecast.city.name}, ${forecast.city.country}`}</Typography>
                  <Typography variant="subheading">{format((current.dt * 1000), 'MMMM Do YYYY, h:mm:ss a')}</Typography>
                  <Typography variant="caption">{capitalize(current.weather[0].description)}</Typography>
                </Grid>
                <Grid item className="text-xs-right">
                  <Typography variant="display1">
                    <span>{current.main.temp}</span>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={8}
                alignItems={'center'}
                direction={'row'}
                justify={'space-between'}
                className="my-1"
              >
                { Object.keys(current.main).map((key, index) => (
                  <Grid item xs={6} key={index}>
                    <Grid
                      container
                      spacing={0}
                      alignItems={'center'}
                      direction={'row'}
                      justify={'space-between'}
                    >
                      <Grid item>
                        <Typography variant="caption">
                          <span>{capitalize(key.replace(/_/g , ' '))}</span>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption">
                          <span>{current.main[key]}</span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
            <CardContent className={classes.weatherBackground}>
              <Grid
                container
                spacing={0}
                alignItems={'center'}
                direction={'row'}
                justify={'space-between'}
                className="text-xs-center"
              >
                { forecast.list.map((day, index) => (
                    index !== 0 &&
                    <Typography variant="caption" className={classes.weatherDetails} key={index}>
                      <span className="block">{day.weather.description}</span>
                      <span className="block py-xs">
                        { this.getWindDirection(day.wind.deg) }
                      </span>
                      <span className="block pb-xs">{format((current.dt * 1000), 'ddd')}</span>
                      <span className="block pb-xs"><i className={classNames(getWeatherIcon(day.weather[0].icon), classes.weatherIcon)}></i></span>
                      <strong className="block pb-xs">{`${day.main.temp}`} &deg;</strong>
                    </Typography>
                  )
                )}
              </Grid>
            </CardContent>
          </Fragment>
        }
        { !current && !forecast &&
          <CardContent>
            <Typography>Weather Data Not Loaded</Typography>
          </CardContent>
        }
      </Card>
    );
  }
}

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string,
  country: PropTypes.string,
  days: PropTypes.number,
};

export default withStyles(WidgetStyles)(WeatherCard);