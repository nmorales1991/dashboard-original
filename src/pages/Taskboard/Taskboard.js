import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Column from './Column';
import reorder, { reorderQuoteMap } from './reorder';
import TaskboardStyles from '../../styles/Taskboard';
import { mockTaskboard } from '../../utils/mock';

class Taskboard extends Component {

  state = {
    columns: mockTaskboard,
    ordered: Object.keys(mockTaskboard),
  };

  onDragEnd = (result) => {

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === 'COLUMN') {
      const ordered = reorder(
        this.state.ordered,
        source.index,
        destination.index,
      );

      this.setState({
        ordered,
      });

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: this.state.columns,
      source,
      destination,
    });

    this.setState({
      columns: data.quoteMap,
    });
  };

  render() {
    const { columns, ordered} = this.state;
    const { classes } = this.props;

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <Droppable
          droppableId="taskboard"
          type="COLUMN"
        >
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className={classes.taskboard}>
              {ordered.map((key, index) => (
                <Column
                  key={key}
                  index={index}
                  title={key}
                  tasks={columns[key]}
                />
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(TaskboardStyles)(Taskboard);