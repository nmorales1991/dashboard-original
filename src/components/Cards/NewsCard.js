import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import WidgetStyles from '../../styles/Widget';

const NewsCard = (props) => {
  const { classes, feed, subtitle } = props;
  return (
    <Card>
      <CardHeader
        title="Newsfeed"
        subheader={subtitle}
      />
      <Divider />
      <List>
        {feed.map((item, index) => (
          <ListItem key={index}>
            {item.avatar ? item.avatar : <Avatar>{item.subject.charAt(0)}</Avatar>}
            <ListItemText
              primary={item.subject}
              secondary={item.message}
              classes={{
                primary: classes.textEllipsis,
                secondary: classes.textEllipsis,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      avatar: PropTypes.element,
      subject: PropTypes.string,
      message: PropTypes.string
    })
  ).isRequired,
  subtitle: PropTypes.string,
};

export default withStyles(WidgetStyles)(NewsCard);