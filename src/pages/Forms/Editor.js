import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import Card from '@material-ui/core/Card';
import { Wrapper } from '../../components';
import 'react-quill/dist/quill.snow.css';
import './editor.css';

class Editor extends Component {
  state = {
    text: ''
  }

  render() {
    return (
      <Wrapper>
        <Card className="overflow-visible">
          <ReactQuill value={this.state.text} onChange={this.handleChange} placeholder={"Write something"} />
        </Card>
      </Wrapper>
    );
  }
}

export default Editor;