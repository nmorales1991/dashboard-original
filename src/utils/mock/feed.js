import React from 'react';
import red from '@material-ui/core/colors/red';
import Avatar from '@material-ui/core/Avatar';

export default [{
  from: 'Ali Connors',
  message: 'Dapibus Tellus',
  avatar: <Avatar alt='Ali Connors' src='static/images/face3.jpg' />,
  subject: 'Quam Amet Vehicula',
}, {
  from: 'Trevor Hansen',
  message: 'Sit Malesuada',
  subject: 'Sem Adipiscing Tristique',
}, {
  from: 'Sandra Adams',
  message: 'Adipiscing Mattis',
  avatar: <Avatar alt='Sandra Adams' src='static/images/face4.jpg' />,
  subject: 'Ullamcorper Bibendum Ligula',
}, {
  from: 'Jeff Jones',
  message: 'Consectetur Dolor',
  avatar: <Avatar aria-label="Post" style={{backgroundColor: red[500]}}>J</Avatar>,
  subject: 'Ullamcorper Bibendum Ligula',
}];