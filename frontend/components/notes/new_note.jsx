import React from 'react';
import { Link } from 'react-router-dom';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '', body: '', notebook_id: 0};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit() {
    const note = {
      title: this.state.title,
      body: this.state.body,
      author_id: this.props.currentUser.id,
      notebook_id: this.state.notebook_id
    };
    this.props.createNote(note);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <div className="new-note">
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <form>
          <input
            type="text"
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.update('title')}/>

          <textarea
            rows="10"
            cols="50"
            value={this.state.body}
            placeholder="Just start typing..."
            onChange={this.update('body')}/>

          <button onClick={this.handleSubmit}>Create Note</button>
        </form>
      </div>
    );
  }
}

export default NewNote;
