import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/Send';
import { Wrapper } from '../../components';
import ChatStyles from '../../styles/Chat';
import { mockContacts, mockChats } from '../../utils/mock';

class Chat extends Component {
  state = {
    opened: false
  }

  handleDrawerToggle = () => {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const { classes } = this.props;
    const { opened } = this.state;
    const menu = (
      <List subheader={<ListSubheader disableSticky>Contacts</ListSubheader>}>
        { mockContacts.map((contact, index) => (
          <ListItem key={index} button>
            {contact.avatar}
            <ListItemText primary={contact.name} secondary={contact.status} />
          </ListItem>
        ))}
      </List>
    );
    return (
      <Wrapper padding={false}>
        <AppBar position="static">
          <Toolbar />
          <Toolbar />
        </AppBar>

        <Grid container spacing={0} justify={'center'} className={classes.header}>
          <Grid item xs={11} sm={11} md={10} lg={9}>
            <Card>
              <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar} color="default">
                  <Toolbar className={classes.toolBar}>
                    <Hidden mdUp>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => this.handleDrawerToggle()}>
                        <MenuIcon />
                      </IconButton>
                    </Hidden>
                    <div className={classes.headerLeft}>
                      <Avatar alt="" src='/static/images/face1.jpg' />
                    </div>
                    <List dense>
                      <ListItem>
                        <Avatar alt="" src='/static/images/face2.jpg' />
                        <ListItemText primary="Bobby" secondary="Online" />
                      </ListItem>
                    </List>
                    <span className="flexSpacer" />
                    <IconButton
                      color="inherit"
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <div className={classes.wrapper}>
                  <Hidden smDown>
                    <Drawer
                      variant="permanent"
                      ModalProps={{
                        keepMounted: false,
                        className: classes.modal,
                        BackdropProps: {
                          className: classes.backdrop,
                        },
                        onBackdropClick: this.handleDrawerToggle
                      }}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                    >
                      {menu}
                    </Drawer>
                  </Hidden>
                  <Hidden mdUp>
                    <Drawer
                      variant="temporary"
                      open={opened}
                      ModalProps={{
                        keepMounted: false,
                        className: classes.modal,
                        BackdropProps: {
                          className: classes.backdrop,
                        },
                        onBackdropClick: this.handleDrawerToggle
                      }}
                      classes={{
                        paper: classes.drawerPaper,
                      }}
                    >
                      {menu}
                    </Drawer>
                  </Hidden>
                  <main className={classes.main}>
                    <div className={classes.content}>
                      { mockChats.map((chat, index) => (
                        <div key={index} className={classNames(classes.conversation, chat.type === 'sent' ? classes.conversationSent : classes.conversationReceived)}>
                          <div className={classNames(classes.body, chat.type === 'sent' ? classes.bodySent : classes.bodyReceived)}>
                            <Typography color="inherit">{chat.message}</Typography>
                            <Typography variant="caption" className={
                                classNames(classes.date, chat.type === 'sent' ? classes.dateSent : classes.dateReceived)
                              }>{distanceInWordsToNow(chat.date)}</Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Divider />
                    <div className="px-2">
                      <Grid container spacing={0} justify={'center'} alignItems={'center'}>
                        <TextField
                          label="Write a message"
                          type="text"
                          margin="normal"
                          className={classes.input}
                        />
                        <Button variant="fab" color="primary" aria-label="send" className={classes.button}>
                          <SendIcon />
                        </Button>
                      </Grid>
                    </div>
                  </main>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(ChatStyles)(Chat);