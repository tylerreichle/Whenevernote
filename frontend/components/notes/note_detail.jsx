import React from 'react';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { id: '', title: '', body: '', notebook_id: ''};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchSingleNote(3);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.note.id !== newProps.note.id) {
      this.state = newProps.note;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = Object.assign({}, this.state);
    this.props.updateNote(note);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    const { title, body } = this.state;

    return (
      <section className="note-detail">
        <span className="detail-toolbar">

          <div className="detail-buttons">
            <button id="info" className="detail-button"></button>
            <button id="trash" className="detail-button"></button>
          </div>

          <div className="note-options">
            <div className="detail-notebook">
              <img src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"/>
            </div>

            <div className="detail-tag">
              <img src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/tag.png"/>
            </div>

          </div>
        </span>

        <form className="detail-form" onSubmit={this.handleSubmit}>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.update('title')}/>

          <textarea
            id="body"
            rows="10"
            cols="50"
            value={this.state.body}
            onChange={this.update('body')}/>

          <input type="submit"/>
        </form>
      </section>
    );
  }
}

export default NoteDetail;
