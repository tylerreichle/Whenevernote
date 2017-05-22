import React from 'react';
import { Link } from 'react-router-dom';

class NewNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '', body: '', notebook_id: 0};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body,
      author_id: this.props.currentUser.id,
      notebook_id: this.state.notebook_id
    };
    this.props.createNote(note);
    this.props.history.push('/notes');
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <section className="new-note">

        <div className="new-cancel">
          <Link id="cancel" to="/notes">
            <button>Cancel</button>
          </Link>
        </div>
        <div className="new-toolbar">
          <div className="detail-notebook">
            <img src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"/>
          </div>

          <div className="detail-tag">
            <img src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/tag.png"/>
          </div>
        </div>

        <form>
          <input
            id="new-title"
            type="text"
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.update('title')}/>

          <textarea
            id="new-body"
            rows="10"
            cols="50"
            value={this.state.body}
            placeholder="Just start typing..."
            onChange={this.update('body')}/>

          <button onClick={this.handleSubmit}>Create Note</button>
        </form>
      </section>
    );
  }
}

export default NewNote;
