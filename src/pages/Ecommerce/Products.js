import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { Wrapper, ProductCard } from '../../components';
import EcommerceStyles from '../../styles/Ecommerce';
import { mockProduct } from '../../utils/mock';

class Products extends Component {
  state = {
    opened: false,
    products: []
  }

  handleDrawerToggle = () => {
    this.setState({ opened: !this.state.opened });
  }

  componentDidMount () {
    let products = [];

    const addProducts = (i) => {
      products.push({
        id: i,
        ...mockProduct()
      });
    }

    for (let num = 1; num <= 21; num += 1) {
      addProducts(num);
    }

    this.setState({ products })
  }

  render() {
    const { classes } = this.props;
    const { opened, products } = this.state;

    const menu = (
      <Fragment>
        <List subheader={<ListSubheader disableSticky>Brands</ListSubheader>}>
          { ['Apple', 'Microsoft', 'Samsung', 'HTC', 'Sony', 'Huawei'].map(value => (
            <ListItem
              key={value}
              role={undefined}
              button
            >
              <Checkbox
                tabIndex={-1}
                disableRipple
                className={classes.checkbox}
              />
              <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List subheader={<ListSubheader disableSticky>Screen Size</ListSubheader>}>
          { ['16 GB', '32 GB', '64 GB', '128 GB'].map(value => (
            <ListItem
              key={value}
              role={undefined}
              button
              className={classes.listItem}
            >
              <Checkbox
                tabIndex={-1}
                disableRipple
                className={classes.checkbox}
              />
              <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List subheader={<ListSubheader disableSticky>Operating System</ListSubheader>}>
          {['Android', 'iOS', 'Windows'].map(value => (
            <ListItem
              key={value}
              role={undefined}
              button
              className={classes.listItem}
            >
              <Checkbox
                tabIndex={-1}
                disableRipple
                className={classes.checkbox}
              />
              <ListItemText primary={value} />
            </ListItem>
          ))}
        </List>
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
              <Typography variant="title" color="inherit" noWrap>
                Products
              </Typography>
            </Toolbar>
          </AppBar>
        </Hidden>
        <Grid className={classes.root}>
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
            <Grid container spacing={8}>
              {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    sale={product.sale}
                    discounted={product.discounted}
                    discount={product.discount}
                  />
                </Grid>
              ))}
            </Grid>
          </main>
        </Grid>
      </Wrapper>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(EcommerceStyles)(Products);