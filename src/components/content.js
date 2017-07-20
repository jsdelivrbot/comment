import React, { Component } from 'react';

export default class Content extends Component{
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this.onContentChange = this.onContentChange.bind(this);
    this.onContentSubmit = this.onContentSubmit.bind(this);
  }
  onContentChange(value) {
    this.setState({ content: value });
  }
  onContentSubmit(event) {
    event.preventDefault();
    this.props.contentSubmit(this.state.content);
    this.setState({ content: '' });
  }
  render() {
    return (
        <form onSubmit={this.onContentSubmit}>
          <input
            className="control-form"
            value={this.state.content}
            onChange={event => this.onContentChange(event.target.value)} />
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>

    );
  }
}
