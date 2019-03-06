import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow, Polyline
} from 'react-google-maps';
import { Wrapper } from '../../components';

const polyCoordinates = [
  {
    lat:-34.397,
    lng:150.644
  },
  {
    lat:-34.754764,
    lng: 149.736246
  }
];

const styles = [{
  featureType: 'all',
  stylers: [{
    saturation: -80
  }]
}, {
  featureType: 'road.arterial',
  elementType: 'geometry',
  stylers: [{
    hue: '#00ffee'
  }, {
    saturation: 50
  }]
}, {
  featureType: 'poi.business',
  elementType: 'labels',
  stylers: [{
    visibility: 'off'
  }]
}];

const pageStyles = (theme) => ({
  map: {
    [theme.breakpoints.down('sm')]: {
      height: `calc(100vh - 182px)`
    },
    [theme.breakpoints.up('sm')]: {
      height: `calc(100vh - 204px)`
    },
  },
});

const DemoMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultOptions={{
      scrollwheel: false,
      zoomControl: false,
      styles: props.showStyles ? styles : null
    }}
  >
    {props.showInfoWindow &&
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onToggleOpen}
      >
        {props.isInfoWindowOpen &&
          <InfoWindow onCloseClick={props.onToggleOpen}>
            <Typography>InfoWindow content</Typography>
          </InfoWindow>
        }
      </Marker>
    }
    {props.showPolyline &&
      <Polyline
        path={polyCoordinates}
        geodesic={true}
        options={{
          strokeColor: '#000000',
          strokeOpacity: 1,
          strokeWeight: 2,
        }}
      />
    }
  </GoogleMap>
));

class Google extends Component {
  state = {
    tab: 0,
    isInfoWindowOpen: false
  };

  handleInfoWindowToggle = () => {
    this.setState({ isInfoWindowOpen: !this.state.isInfoWindowOpen });
  }

  handleTabToggle = (event, tab) => {
    this.setState({ tab });
  };

  render() {
    const { classes } = this.props;
    const { tab, isInfoWindowOpen } = this.state;
    const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    const loadingElement = <div style={{ height: `100%` }} />;
    const containerElement = <div className={classes.map} />;
    const mapElement = <div style={{ height: `100%` }} />;

    return (
      <Wrapper padding={false}>
        <AppBar position="static">
          <Toolbar />
          <Toolbar />
        </AppBar>

        <Grid container spacing={8} justify={'center'} style={{marginTop: '-52px'}}>
          <Grid item xs={11} sm={11} md={10} lg={9}>
            <Card>
              <Tabs
                value={tab}
                onChange={this.handleTabToggle}
                scrollable
                scrollButtons="auto"
              >
                <Tab label="Basic" />
                <Tab label="Styles" />
                <Tab label="Polyline" />
                <Tab label="Info Window" />
              </Tabs>
              {tab === 0 && <DemoMap
                googleMapURL={googleMapURL}
                loadingElement={loadingElement}
                containerElement={containerElement}
                mapElement={mapElement}
              />}
              {tab === 1 && <DemoMap
                googleMapURL={googleMapURL}
                loadingElement={loadingElement}
                containerElement={containerElement}
                mapElement={mapElement}
                showStyles={true}
              />}
              {tab === 2 && <DemoMap
                googleMapURL={googleMapURL}
                loadingElement={loadingElement}
                containerElement={containerElement}
                mapElement={mapElement}
                showPolyline={true}
              />}
              {tab === 3 && <DemoMap
                googleMapURL={googleMapURL}
                loadingElement={loadingElement}
                containerElement={containerElement}
                mapElement={mapElement}
                showInfoWindow={true}
                onToggleOpen={this.handleInfoWindowToggle}
                isInfoWindowOpen={isInfoWindowOpen}
              />}
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}

export default withStyles(pageStyles)(Google);