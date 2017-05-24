import React from 'react';
import { Editor, EditorState, ContentState, RichUtils } from 'draft-js';

import StyleButton from './style_button';

export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: "'Antic Slab', serif",
    fontSize: 16,
    padding: 5
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through',
  },
};

const INLINE_STYLES = [
  {title: 'Bold', style: 'BOLD'},
  {title: 'Italic', style: 'ITALIC'},
  {title: 'Underline', style: 'UNDERLINE'},
  {title: 'Strikethrough', style: 'STRIKETHROUGH'},
  {title: 'Monospace', style: 'CODE'},
];

const BLOCK_TYPES = [
  {title: 'UL', style: 'unordered-list-item'},
  {title: 'OL', style: 'ordered-list-item'},
  {title: 'Code Block', style: 'code-block'},
];

export const blocksStyleFn = (block) => {
  switch (block.getType()) {
    case 'unordered-list-item': return "ul-block-style";
    case 'ordered-list-item': return "ol-block-style";
    default: return null;
  }
};

export const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="blockType-controls">
      { BLOCK_TYPES.map(type =>
        <StyleButton
          key={type.title}
          active={type.style === blockType}
          title={type.title}
          onToggle={onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      { INLINE_STYLES.map(type =>
        <StyleButton
          key={type.title}
          active={currentStyle.has(type.style)}
          title={type.title}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
