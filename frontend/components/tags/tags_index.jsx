import React from 'react';
import TagsIndexItem from './tags_index_item';
import { selectTagIds } from '../../reducers/selectors';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { noteTags: [] };
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.noteTags.length !== newProps.noteTags.length) {
      this.setState(newProps.noteTags);
    }
  }

  render() {
    const { iiCallback, tags } = this.props;
    const noteTags = selectTagIds(this.props.noteTags);

    return (
      <div className="tags-index">
        <ul>
          {
            tags.map((tag, idx) => {
              let tagged = false;
              if (noteTags.includes(tag.id)) {
                tagged = true;
              }
              return <TagsIndexItem
                tag={tag}
                key={idx}
                iiCallback={iiCallback}
                noteId={this.props.noteId}
                tagged={tagged}
                deleteTaggedNote={this.props.deleteTaggedNote}
                createTaggedNote={this.props.createTaggedNote}
              />;
          })
          }
        </ul>
      </div>
    );

  }
}

export default TagsIndex;
