import React from 'react';

class NotebookHeader extends React.Component {

  componentWillMount() {
    console.log('Iamhere');
    this.props.fetchSingleNotebook(1);
  }

  render() {
    const { notebook } = this.props.notebook;
    debugger
    return (
      <div className="notebooks">
        <img src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"/>
        <h3>{notebook.title}</h3>
      </div>
    );
  }
}

export default NotebookHeader;
