import React, {  Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MessagesPageStyles from '../../styles/Messages';
import { mockFolders, mockFolders2, mockTags , mockMessages } from '../../utils/mock';
import { Wrapper, Message } from '../../components';

class Messages extends Component {
  state = {
    opened: false
  }

  handleDrawerToggle = () => {
    this.setState({ opened: !this.state.opened });
  }

  render () {
    const { classes } = this.props;
    const { opened } = this.state;

    const menu = (
      <Fragment>
        <List>{mockFolders}</List>
        <Divider />
        <List>{mockFolders2}</List>
        <Divider />
        <List>{mockTags}</List>
      </Fragment>
    );

    return (
      <Wrapper padding={false}>
        <Hidden mdUp>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => this.handleDrawerToggle()}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>Messages</Typography>
            </Toolbar>
          </AppBar>
        </Hidden>
        <div className={classes.root}>
          <Hidden smDown>
            <Drawer
              variant="permanent"
              ModalProps={{
                keepMounted: false,
                className: classes.modal,
                BackdropProps: {
                  className: classes.backdrop
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

          <main className={classes.content}>
            <Message messages={mockMessages} />
          </main>
        </div>
      </Wrapper>
    );
  }
}

Messages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(MessagesPageStyles)(Messages);