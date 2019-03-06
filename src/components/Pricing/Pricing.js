import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import PricingStyles from '../../styles/Pricing';

const Pricing = (props) => {
  const { classes, title, subtitle, price, features } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        title={title}
        subheader={subtitle}
        classes={{
          title: classes.title,
          subheader: classes.subheader,
        }}
      />
      <Typography variant="headline" className={classes.price}>
        <span className={classes.symbol}>$</span>
        <span>{price}</span>
        <span className={classes.period}>/ month</span>
      </Typography>
      <List>
        { features.map((feature, index) => (
          <ListItem button className={classes.feature} key={index}>
            <ListItemText
              primary={feature.title}
              className={classNames(classes.description, feature.available ? '' : classes.inactive)}
              disableTypography
            />
          </ListItem>
        ))}
      </List>
      <CardActions className={classes.actions} disableActionSpacing>
        <Button variant="raised" color="secondary" className={classes.centered}>Choose plan</Button>
      </CardActions>
    </Card>
  );
}

Pricing.prototypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      available: PropTypes.bool,
    })
  )
};

export default withStyles(PricingStyles)(Pricing);