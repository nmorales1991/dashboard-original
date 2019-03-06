import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Wrapper, ActivityStream } from '../../components';
import SocialStyles from '../../styles/Social';
import { mockActivity } from '../../utils/mock';

const TabContainer = (props) => (
  <Typography component="div" className="pa-0">
    {props.children}
  </Typography>
);

class Social extends Component {
  state = {
    tab: 0,
  };

  handleTabToggle = (event, tab) => {
    this.setState({ tab });
  };

  render() {
    const { classes } = this.props;
    const { tab } = this.state;

    return (
      <Wrapper>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Card>
              <CardContent>
                <Grid container spacing={24}>
                  <Grid item xs={7}>
                    <Typography variant="title" gutterBottom>Gerald <b>Morris</b></Typography>
                    <Typography variant="caption" gutterBottom>gerald@morris.com</Typography>
                    <Typography variant="body1" gutterBottom>Human Resources Manager</Typography>
                    <Typography variant="body1" gutterBottom><a>email@contact.com</a></Typography>
                    <Typography variant="body1" gutterBottom><a>www.example.com</a></Typography>
                    <Button variant="raised" color="primary">Edit Profile</Button>
                  </Grid>
                  <Grid item xs={5}>
                    <div className="text-xs-center">
                      <Avatar
                        alt="Adelle Charles"
                        src="/static/images/avatar.jpg"
                        className={classNames(classes.avatar)}
                      />
                      <Typography variant="caption" className={'mb-xs'}>Account Usage</Typography>
                      <LinearProgress variant="determinate" value={40} className={'mb-xs'} />
                      <Typography variant="caption">234Gb of 879Gb</Typography>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardContent className="text-xs-center">
                <Grid container spacing={24}>
                  <Grid item xs={4}>
                    <Typography variant="title" gutterBottom>23,8K</Typography>
                    <Typography variant="caption">Followers</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="title" gutterBottom>569</Typography>
                    <Typography variant="caption">Following</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="title" gutterBottom>67</Typography>
                    <Typography variant="caption">Posts</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardContent>
                <Typography variant="subheading" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <Card className="mb-xs">
              <form>
                <textarea placeholder="What's on your mind" rows="6" className={classes.postInput}></textarea>
              </form>
              <Divider />
              <CardActions>
                <IconButton className="ma-0" aria-label="Insert Photo">
                  <InsertPhotoIcon />
                </IconButton>
                <IconButton className="ma-0" aria-label="Insert Link">
                  <InsertLinkIcon />
                </IconButton>
                <IconButton className="ma-0" aria-label="Insert Link">
                  <LocationOnIcon />
                </IconButton>
                <span className="flexSpacer"></span>
                <Button variant="raised" color="primary">
                  Post
                </Button>
              </CardActions>
            </Card>

            <Card>
              <Tabs value={tab} onChange={this.handleTabToggle}>
                <Tab label="Activity" classes={{ root: classes.tabRoot }} />
                <Tab label="Bio" classes={{ root: classes.tabRoot }} />
                <Tab label="Photos" classes={{ root: classes.tabRoot }} />
              </Tabs>
              <Divider />
              { tab === 0 &&
                <TabContainer>
                  <CardContent className="pb-0">
                    <ActivityStream
                      title='Period ending 2017'
                      stream={mockActivity}
                    />
                  </CardContent>
                </TabContainer>
              }
              { tab === 1 &&
                <TabContainer>
                  <CardContent>
                    <Typography variant="title" gutterBottom>Basic Information</Typography>
                    <Grid container spacing={24} alignItems="flex-start" direction="row" justify="space-between">
                      <Grid item>
                        <div className="mb-1">
                          <Typography variant="caption" gutterBottom>Mobile</Typography>
                          <Typography variant="body1" className="font-weight-bold">+20 0593 4095 03</Typography>
                        </div>

                        <div className="mb-1">
                          <Typography variant="caption" gutterBottom>Birthday</Typography>
                          <Typography variant="body1" className="font-weight-bold">30.09.1900</Typography>
                        </div>

                        <div className="mb-1">
                          <Typography variant="caption" gutterBottom>Country</Typography>
                          <Typography variant="body1" className="font-weight-bold">South Africa</Typography>
                        </div>

                        <div>
                          <Typography variant="caption" gutterBottom>Occupation</Typography>
                          <Typography variant="body1" className="font-weight-bold">Web Developer</Typography>
                        </div>

                      </Grid>
                      <Grid item>
                        <div className="mb-1">
                          <Typography variant="caption" gutterBottom>Extension</Typography>
                          <Typography variant="body1" className="font-weight-bold">94</Typography>
                        </div>

                        <div className="mb-1">
                          <Typography variant="caption" gutterBottom>Mobile</Typography>
                          <Typography variant="body1" className="font-weight-bold">+123 456 7890</Typography>
                        </div>

                        <div className="mb-1">
                          <Typography variant="caption" gutterBottom>Phone</Typography>
                          <Typography variant="body1" className="font-weight-bold">+123 456 7890</Typography>
                        </div>

                        <div>
                          <Typography variant="caption" gutterBottom>Facebook</Typography>
                          <Typography variant="body1" className="font-weight-bold">@geraldmorris</Typography>
                        </div>

                      </Grid>
                    </Grid>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Typography variant="title" gutterBottom>Bio</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.</Typography>
                  </CardContent>
                </TabContainer>
              }
              { tab === 2 &&
                <TabContainer>
                  <GridList cols={3} spacing={1} cellHeight={180}>
                    { [1,2,3,4,5,6,7,8,9].map(tile => (
                      <GridListTile key={tile}>
                        <img src={`/static/images/unsplash/${tile}.jpg`} alt={tile} />
                        <GridListTileBar
                          title={tile}
                          subtitle={<span>Gallery image: {tile}</span>}
                          actionIcon={
                            <IconButton>
                              <FavoriteIcon />
                            </IconButton>
                          }
                        />
                      </GridListTile>
                    ))}
                  </GridList>
                </TabContainer>
              }
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    )
  }
}

Social.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(SocialStyles)(Social);