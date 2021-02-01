const tiptapEditorComponent = theme => {
  let listStyle = {
    display: 'block !important',
    'margin-block-start': ' 1em !important',
    'margin-block-end': '1em !important',
    'margin-inline-start': '0px !important',
    'margin-inline-end': '0px !important',
    'padding-inline-start': '40px !important'
  }
  let headingStyle = {
    display: 'block',
    'margin-inline-start': '0px',
    'margin-inline-end': '0px',
    fontWeight: 'bold'
  }
  return {
    '.header-editior': {
      '.editor-menu-bar': {
        marginLeft: '0.6px',
        marginRight: '0px'
      }
    },
    '.editor__content': {
      '.ProseMirror': {
        borderRadius: '5px',
        minHeight: '200px',
        borderColor: theme('colors.gray.400'),
        borderWidth: '1px',
        borderStyle: 'solid',
        '&.ProseMirror-focused': {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme('colors.primary.500'),
          outline: 'none'
        }
      },
      pre: {
        whiteSpace: ' pre-wrap'
      },
      pre: {
        padding: '0.7rem 1rem',
        borderRadius: '5px',
        fontSize: '0.8rem',
        overflowX: 'auto',
        backgroundColor: theme('colors.gray.800'),
        color: theme('colors.white')
      },
      'pre code': {
        display: 'block'
      },
      '& *': {
        caretColor: 'currentColor'
      },
      ul: {
        ...listStyle,
        'list-style-type': 'disc !important'
      },
      ol: {
        ...listStyle,
        'list-style-type': 'decimal'
      },
      blockquote: {
        'border-left-width': '3px !important',
        'border-left-style': 'solid !important',
        'border-left-color': theme('colors.gray.400'),
        color: theme('colors.gray.800'),
        paddingLeft: '0.8rem !important',
        fontStyle: 'italic !important'
      },

      h1: {
        ...headingStyle,
        fontSize: '2em',
        'margin-block-start': '0.67em',
        'margin-block-end': '0.67em'
      },

      h2: {
        ...headingStyle,
        fontSize: '1.5em',
        'margin-block-start': '0.83em',
        'margin-block-end': ' 0.83em'
      },

      h3: {
        ...headingStyle,
        fontSize: '1.17em',
        'margin-block-start': '1em',
        'margin-block-end': '1em'
      }
    }
  }
}

module.exports = tiptapEditorComponent
