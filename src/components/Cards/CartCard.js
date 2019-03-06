import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { formatPrice } from '../../helpers';
import WidgetStyles from '../../styles/Widget';

const CartCard = (props) => {
  const { classes, title, price, image, imageHeight } = props;
  return (
    <Card>
      <Grid container spacing={0} alignItems="center" className="pa-1">
        <Grid item className="flexSpacer">
          <Typography variant="subheading">{title}</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            {formatPrice(price)}
          </Button>
        </Grid>
      </Grid>
      <CardMedia
        className={classes.media}
        style={{paddingTop: imageHeight}}
        image={image}
        title={title}
      />
      <CardActions className={classes.actions} disableActionSpacing>
        <div className="flexSpacer">
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
        </div>
        <Button variant="contained" color="secondary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

CartCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
};

export default withStyles(WidgetStyles)(CartCard);