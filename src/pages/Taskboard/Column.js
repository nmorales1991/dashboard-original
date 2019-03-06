import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';

import TaskList from './TaskList';
import TaskboardStyles from '../../styles/Taskboard';

const Column = ({ title, tasks, index, classes }) => (
  <Draggable draggableId={title} index={index}>
    {(provided, snapshot) => (
      <div className={classes.wrapper} key={index}>
        <div className={classes.list}>
          <Typography className={classes.header}>{title}</Typography>
          <div ref={provided.innerRef} {...provided.draggableProps} className={classes.cards}>
            <TaskList listId={title} tasks={tasks} />
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

Column.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(TaskboardStyles)(Column);