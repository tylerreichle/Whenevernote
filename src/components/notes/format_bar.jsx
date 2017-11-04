import React from 'react'
import PropTypes from 'prop-types'
import { CHECKABLE_LIST_ITEM } from 'draft-js-checkable-list-item'

import StyleButton from './style_button'

export const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: 'Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
    fontSize: 12,
    whiteSpace: 'pre'
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through'
  },
  HIGHLIGHT: {
    backgroundColor: 'rgba(255, 230, 0, 0.5)'
  }
}

const INLINE_STYLES = [
  { className: 'fa fa-bold', title: 'Bold', style: 'BOLD' },
  { className: 'fa fa-italic', title: 'Italic', style: 'ITALIC' },
  { className: 'fa fa-underline', title: 'Underline', style: 'UNDERLINE' },
  { className: 'fa fa-strikethrough', title: 'Strikethrough', style: 'STRIKETHROUGH' },
  { className: 'fa fa-pencil', title: 'Highlight', style: 'HIGHLIGHT' },
  { className: 'fa fa-code', title: 'Code Block', style: 'CODE' }
]

const BLOCK_TYPES = [
  { className: 'fa fa-check-square-o', title: 'Checkbox', style: CHECKABLE_LIST_ITEM },
  { className: 'fa fa-list-ul', title: 'Unordered List', style: 'unordered-list-item' },
  { className: 'fa fa-list-ol', title: 'Ordered List', style: 'ordered-list-item' }
]


export const blocksStyleFn = (block) => {
  switch (block.getType()) {
    case 'unordered-list-item': return 'ul-block-style'
    case 'ordered-list-item': return 'ol-block-style'
    case 'blockquote': return 'RichEditor-blockquote'
    case CHECKABLE_LIST_ITEM: return CHECKABLE_LIST_ITEM
    default: return null
  }
}

export const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className="blocktype-controls">
      { BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.title}
          active={type.style === blockType}
          className={type.className}
          title={type.title}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

BlockStyleControls.propTypes = {
  onToggle: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired
}

export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div className="inline-controls">
      { INLINE_STYLES.map(type => (
        <StyleButton
          key={type.title}
          active={currentStyle.has(type.style)}
          className={type.className}
          title={type.title}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

InlineStyleControls.propTypes = {
  onToggle: PropTypes.func.isRequired,
  editorState: PropTypes.object.isRequired
}
