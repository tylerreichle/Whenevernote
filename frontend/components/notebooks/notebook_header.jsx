import React from 'react';

class NotebookHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notebook: {} };
  }

  componentWillMount() {
    this.props.fetchSingleNotebook(this.props.notebookId);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.notebook.id !== newProps.notebook.id) {
      this.state = newProps.notebook;
    }
  }

  render() {
    const { notebook } = this.props.notebook;
    
    return (
      <div className="notebook-header">
        <img src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"/>
        <h3>demo's notebook</h3>
      </div>
    );
  }
}

export default NotebookHeader;
