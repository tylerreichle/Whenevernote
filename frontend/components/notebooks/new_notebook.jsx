import React from 'react';
import { Link } from 'react-router-dom';

class NewNotebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <section className="new-notebook">
          <img src="http://res.cloudinary.com/dkuqs8yz1/image/upload/v1495234906/notebook.png"></img>
          <h4>CREATE NOTEBOOK</h4>

          <form>
            <input
              type="text"
              placeholder=""
              value={this.state.title}
              onChange={this.update('title')}/>

            <Link id="cancel" to="/">
              <button id="nn-cancel">Cancel</button>
            </Link>
            
            <button
              id="nn-create"
              onClick={this.handleSubmit}>Create notebook</button>
          </form>
      </section>
    );
  }
}

export default NewNotebook;
