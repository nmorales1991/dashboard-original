import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';

import TaskboardStyles from '../../styles/Taskboard';

const TaskItem = ({ task, isDragging, provided, classes }) => (
  <div
    className={classNames(classes.task, task.color ? classes[task.color] : '')}
    ref={provided.innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
  >
    <Typography variant="body1" gutterBottom>{task.title}</Typography>
    <Typography variant="caption">{task.description}</Typography>
  </div>
);

TaskItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(TaskboardStyles)(TaskItem);