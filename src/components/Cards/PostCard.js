import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import WidgetStyles from '../../styles/Widget';

const PostCard = (props) => {
  const { classes, title, subtitle, text, image, imageHeight, avatar } = props;
  return (
    <Card>
      <CardHeader
        avatar={avatar}
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        image={image}
        title={title}
        className={classes.media}
        style={{paddingTop: imageHeight}}
      />
      <CardContent>
        <Typography component="p" className={classes.clamp}>{text}</Typography>
      </CardContent>
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <span className="flexSpacer" />
        <Button>More Info</Button>
        <Button>Download</Button>
      </CardActions>
    </Card>
  );
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageHeight: PropTypes.number,
  avatar: PropTypes.element,
};

export default withStyles(WidgetStyles)(PostCard);