import React from 'react';
import { Link } from 'react-router-dom';

class NewNotebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = {
      title: this.state.title,
      author_id: this.props.currentUser.id
    };
    this.props.createNotebook(notebook);
    this.props.history.push('/');
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleChange(e) {
    e.preventDefault();
    const title = e.target.value;

    if (title.length > 0) {
      $('#nn-create').attr('disabled', false);
    } else if (title === "") {
      $('nn-create').attr('disabled', true);
    }
      else {
      $('#nn-create').attr('diabled', true);
    }
    this.setState({ title });
  }

  render() {
    return (
      <section className="new-notebook">
        <section className="nn-main-content">
          <img src="https://res.cloudinary.com/dkuqs8yz1/image/upload/v1495419507/new-notebook.png"></img>
          <h4>CREATE NOTEBOOK</h4>

          <form className="nn-form">
            <input
              type="text"
              placeholder="Title your notebook"
              value={this.state.title}
              onChange={this.handleChange}/>

            <div className="nn-buttons">
              <button
                id="nn-cancel"
                onClick={this.handleCancel}>Cancel</button>

              <button
                id="nn-create"
                onClick={this.handleSubmit}
                disabled >Create notebook</button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default NewNotebook;
