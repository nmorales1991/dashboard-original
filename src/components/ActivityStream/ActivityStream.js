import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import StreamStyles from '../../styles/Stream';

const ActivityStream = (props) => {
  const { classes, title, stream } = props;
  return (
    <div className={classes.stream}>
      <div className={classes.card}>
        <Button variant="contained" color="primary">{title}</Button>
      </div>

      {stream.map((item, index) => (
        <Card key={index} className={classes.card}>
          <CardHeader
            avatar={item.avatar}
            title={item.title}
            subheader={item.subtitle}
          />
          <CardContent className={classes.content}>
            <Typography component="p">{item.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

ActivityStream.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  stream: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.element,
      body: PropTypes.string
    })
  ).isRequired
};

export default withStyles(StreamStyles)(ActivityStream);