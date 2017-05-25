import React from 'react';
import TagsIndexItem from './tags_index_item';

class TagsIndex extends React.Component {

  componentWillMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const { tags, iiCallback } = this.props;

    return (
      <div className="tags-index">
        <ul>
          {
            tags.map((tag, idx) => (
              <TagsIndexItem
                tag={tag}
                key={idx}
                iiCallback={iiCallback}
              />
            ))
          }
        </ul>
      </div>
    );

  }
}

export default TagsIndex;
