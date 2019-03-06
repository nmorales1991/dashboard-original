import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import TimelineStyles from '../../styles/Timeline';

const Timeline = (props) => {
  const { classes, title, timeline } = props;
  return (
    <div className={classes.timeline}>
      { title &&
        <div className={classNames(classes.card, 'text-lg-center')}>
          <Button variant="raised" color="primary">{title}</Button>
        </div>
      }
      { timeline.map((item, index) => (
        <div key={index} className={classes.card}>
          <div className={classNames(classes.icon, classes[item.color])}></div>
          <section className={classNames(classes.content, index % 2 ? classes.contentOdd : classes.contentEven)}>
            <Paper className={classNames(classes.body, index % 2 ? classes.bodyOdd : classes.bodyEven)}>
              <Typography variant="body1">{item.text}</Typography>
            </Paper>
            <Typography variant="body1" component="div" className={classNames(classes.date, index % 2 ? classes.dateOdd : classes.dateEven)}>{distanceInWordsToNow(item.date)}</Typography>
          </section>
        </div>
        ))}
      <div className={classes.card}>
        <div className={classNames(classes.icon, classes.bgDanger)} style={{ top: 0 }}></div>
      </div>
    </div>
  );
}

Timeline.prototypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      date: PropTypes.string,
      color: PropTypes.string
    })
  )
};

export default withStyles(TimelineStyles)(Timeline);