const SocialStyles = theme => ({
  avatar: {
    display: 'inline-block',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      width: 128,
      height: 128,
    },
    [theme.breakpoints.down('xs')]: {
      width: 64,
      height: 64,
    },
    marginBottom: theme.spacing.unit
  },
  tabRoot: {
    textTransform: 'initial',
    color: theme.palette.text.primary
  },
  postInput: {
    border: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
    fontSize: '13px',
    outline: 0,
    backgroundColor: theme.palette.background.paper,
  }
});

export default SocialStyles;