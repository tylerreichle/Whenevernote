import React from 'react';
import { Link } from 'react-router-dom';

import TagsIndex from './tags_index';

class TagsSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panelOpen: false };
    this.togglePanel = this.togglePanel.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  tagsPanel() {
    if (this.state.panelOpen) {
      return (
        <div className="tags-panel">

          <div className="tags-panel-header">
            <h3>TAGS</h3>

            <Link to="/tag/new">
              <button></button>
            </Link>
          </div>

          <TagsIndex
            tags={this.props.tags}
            noteId={this.props.noteId}
            iiCallback={'assign'}
          />
        </div>
      );
    }
  }

  togglePanel(e) {
    e.preventDefault();
    if (this.state.panelOpen) {
      this.setState({ panelOpen: false });
    } else {
      this.setState({ panelOpen: true });
    }
  }

  render() {
    return (
      <div>
        <button
          id="tags"
          title="TAGS"
          className="circle-button"
          onClick={this.togglePanel}
        />

        {this.tagsPanel()}
      </div>
    );
  }
}

export default TagsSidebar;
