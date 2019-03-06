import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import red from '@material-ui/core/colors/red';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PhoneIcon from '@material-ui/icons/Phone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import { Wrapper, ImageStatCard, MapCard, NewsCard, ProfileCard, StatCard, CartCard, WeatherCard, PostCard } from '../../components';
import { mockFeed } from '../../utils/mock';

class Widgets extends Component {
  state = {
    feed: mockFeed.slice(0,3),
    stats: [
      {
        title: 'Comments',
        value: 24
      },
      {
        title: 'Likes',
        value: 45
      },
      {
        title: 'Shares',
        value: 984
      }
    ]
  }

  render() {
    const { feed, stats } = this.state;

    return (
      <Wrapper>
        <Grid container spacing={8}>

          {/*
            Stat cards
          */}
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Campaigns"
              value={103}
              icon={<LocalOfferIcon />}
              color="#3f51b5"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Customers"
              value={230}
              icon={<PhoneIcon />}
              color="#9c27b0"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Queries"
              value={323}
              icon={<NotificationsIcon />}
              color="#f44336"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Opens"
              value={870}
              icon={<EmailIcon />}
              color="#ffd740"
            />
          </Grid>

          {/*
            Filled Stat cards
          */}
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

          {/*
            News card
          */}
          <Grid item xs={12} sm={12} md={4}>
            <NewsCard
              subtitle="Last updated 24 mins ago"
              feed={feed}
            />
          </Grid>

          {/*
            Image stat card
          */}
          <Grid item xs={12} sm={6} md={4}>
            <ImageStatCard
              title="image stat card"
              image="/static/images/unsplash/1.jpg"
              imageHeight={195}
              stats={stats}
            />
          </Grid>

          {/*
            Profile card
          */}
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard
              name={'Michael Obrien'}
              image="/static/images/avatar.jpg"
              location={'London, Uk'}
              stats={stats}
            />
          </Grid>

          {/*
            Google map card
          */}
          <Grid item xs={12} sm={12} md={6}>
            <MapCard
              title="Gerald Morris"
              subtitle="24 mins ago"
              lat={-34.397}
              lng={150.644}
              mapHeight={360}
              avatar={
                <Avatar aria-label="Map" style={{backgroundColor: red[500]}}>
                  R
                </Avatar>
              }
            />
          </Grid>

          {/*
            Blog Post card
          */}
          <Grid item sm={12} md={6}>
            <PostCard
              title="Shrimp and Chorizo Paella"
              subtitle="Yesterday"
              image="/static/images/unsplash/2.jpg"
              imageHeight={200}
              text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
              avatar={
                <Avatar aria-label="Post" style={{backgroundColor: red[500]}}>
                  R
                </Avatar>
              }
            />
          </Grid>

          {/*
            Weather card
          */}
          <Grid item sm={12} md={6}>
            <WeatherCard
              city="london"
              country="uk"
              days={7}
            />
          </Grid>

          {/*
            Cart card
          */}
          <Grid item xs={12} sm={6} md={3}>
            <CartCard
              title="Jacket"
              price={83.00}
              image="/static/images/unsplash/fashion3.jpg"
              imageHeight={258}
            />
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <div className="overflow-hidden radius-round">
              <GridList cellHeight={193} cols={3}>
                {[1,2,3,4,5].map((tile) => (
                  <GridListTile key={tile} cols={tile === 1 ? 2:1}>
                    <img src={`/static/images/unsplash/${tile + 1}.jpg`} alt={tile} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    )
  }
}

export default Widgets;