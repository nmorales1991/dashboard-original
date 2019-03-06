import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import withWidth from '@material-ui/core/withWidth';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Wrapper } from '../../components';
import HeaderStyles from '../../styles/Header';

let images = [];

for (let num = 1; num <= 21; num += 1) {
  images.push(num);
}

const getColWidth = (bp) => {
  let col;
  if (bp === 'lg') col = 3;
  if (bp === 'md') col = 2;
  if (bp === 'xs') col = 1;
  return col;
}

const gallery = (
  images.map(tile => (
    <GridListTile key={tile}>
      <img src={(`/static/images/unsplash/${tile}.jpg`)} alt={tile} />
      <GridListTileBar
        title={tile}
        subtitle={<span>Gallery image: {tile}</span>}
        actionIcon={
          <IconButton style={{color: 'rgba(255, 255, 255, 0.87)'}}>
            <FavoriteIcon />
          </IconButton>
        }
      />
    </GridListTile>
  ))
);

const Media = (props) => (
  <Wrapper padding={false}>
    <AppBar position="static" color="primary">
      <Toolbar className={props.classes.toolBar}>
        <Button variant="contained" color="default" className="mx-1">Add album</Button>
        <span className="flexSpacer" />
        <IconButton color="inherit" aria-label="Menu">
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Menu">
          <ChevronLeftIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="Menu">
          <ChevronRightIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

    <GridList cols={getColWidth(props.width)} spacing={1} cellHeight={400}>
      {gallery}
    </GridList>
  </Wrapper>
);

export default withWidth()(withStyles(HeaderStyles)(Media));