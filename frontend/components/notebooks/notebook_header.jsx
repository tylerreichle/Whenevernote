import React from 'react';

class NotebookHeader extends React.Component {

  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="notebook-header">
        <img src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"/>
        <h3>demo's notebook</h3>
      </div>
    );
  }
}

export default NotebookHeader;
