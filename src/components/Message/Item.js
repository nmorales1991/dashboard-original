import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import ForwardIcon from '@material-ui/icons/Forward';
import EditIcon from '@material-ui/icons/Edit';
import MessageItemStyles from '../../styles/MessageItem';
import format from 'date-fns/format';

const Item = (props) => {
  const { classes, message, index, activeMessage, toggleMessage } = props;
  const currentlyOpened = activeMessage === index ? true : false;
  const createMarkup = (body) => {
    return {__html: body};
  }
  return (
    <div className={classNames(classes.message, currentlyOpened ? classes.messageOpened : null)}>
      <Grid
        container
        spacing={0}
        alignItems={'center'}
        direction={'row'}
        className={classes.header}
        onClick={() => toggleMessage(index)}
      >
        { !currentlyOpened && message.avatar }
        { !currentlyOpened && <span className="mx-xs"></span> }
        <Hidden xsDown>
          <Typography className={classNames('mr-1', currentlyOpened ? null : 'pl-1')} style={{minWidth: '120px'}}>{message.from}</Typography>
        </Hidden>
        <Typography noWrap>{message.subject}</Typography>
        <span className="flexSpacer"></span>
        <Hidden smDown>
          <Typography variant="caption">{format(message.date, 'MMMM Do YYYY')}</Typography>
        </Hidden>
      </Grid>

      <Collapse in={currentlyOpened ? true : false} timeout="auto" unmountOnExit>
        <Card className={classes.card}>
          <Divider />
          <CardHeader
            avatar={message.avatar}
            title={message.from}
            subheader={format(message.date, 'MMMM Do YYYY')}
            className="pb-0"
          />
          <CardContent className="pt-0">
            <Typography dangerouslySetInnerHTML={createMarkup(message.body)} component="div"></Typography>
          </CardContent>
          <Divider />
          <CardActions disableActionSpacing>
            <Hidden xsDown>
              <span className="flexSpacer" />
              <Button variant="contained" color="primary" className={classes.button}>Archive</Button>
              <Button variant="contained" color="secondary" className={classes.button}>Delete</Button>
              <Button variant="contained" className={classes.button}>Forward</Button>
              <Button variant="contained" disabled className={classes.button}>Edit</Button>
            </Hidden>

            <Hidden smUp>
              <IconButton>
                <ArchiveIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <IconButton>
                <ForwardIcon />
              </IconButton>
              <IconButton>
                <EditIcon />
              </IconButton>
            </Hidden>

          </CardActions>
        </Card>
      </Collapse>
    </div>
  )
}

Item.proptypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.shape({
    from: PropTypes.string,
    date: PropTypes.number,
    subject: PropTypes.string,
    avatar: PropTypes.element,
    body: PropTypes.string
  }).isRequired,
  index: PropTypes.number,
  activeMessage: PropTypes.number,
  toggleMessage: PropTypes.func
};

export default withStyles(MessageItemStyles)(Item);