import React from 'react';
import TagsIndexItem from './tags_index_item';
import { selectTagIds } from '../../reducers/selectors';

export default class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { noteTags: [] };
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.sidebar) {
      if (this.props.noteTags.length !== newProps.noteTags.length) {
        this.setState(newProps.noteTags);
      }
    }
  }

  render() {
    const { iiCallback, tags } = this.props;
    let noteTags;

    if (this.props.sidebar) {
      noteTags = [];
    } else {
      noteTags = selectTagIds(this.props.noteTags);
    }

    return (
      <div className="tags-index">
        <ul>
          {
            tags.map((tag) => {
              let tagged = false;
              if (noteTags.includes(tag.id)) {
                tagged = true;
              }
              return (
                <TagsIndexItem
                  tag={tag}
                  key={tag.id}
                  iiCallback={iiCallback}
                  noteId={this.props.noteId}
                  tagged={tagged}
                  deleteTaggedNote={this.props.deleteTaggedNote}
                  createTaggedNote={this.props.createTaggedNote}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}
