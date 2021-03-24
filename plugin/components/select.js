const selectComponent = theme => {
  return {
    '.multiselect': {
      'min-height': '40px',
      color: '#35495e'
    },
    '.multiselect__spinner': {
      right: '1px',
      top: '1px'
    },
    '.multiselect__spinner-before, .multiselect__spinner-after': {
      position: 'absolute',
      content: '',
      top: '50%',
      left: '50%',
      margin: '-8px 0 0 -8px',
      zIndex: '5',
      width: '16px',
      height: '16px',
      borderRadius: '100%',
      borderColor: '#41b883 transparent transparent',
      borderStyle: 'solid',
      borderWidth: '2px',
      boxShadow: '0 0 0 1px transparent'
    },
    '.multiselect__spinner-after': {
      animation: 'spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8)',
      'animation-iteration-count': 'infinite'
    },

    '.multiselect__spinner-before': {
      animation: 'spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62)',
      'animation-iteration-count': 'infinite'
    },

    '.multiselect__loading-enter-active,.multiselect__loading-leave-active': {
      transition: 'opacity 0.4s ease-in-out',
      opacity: 1
    },

    '.multiselect__loading-enter,.multiselect__loading-leave-active': {
      opacity: '0'
    },

    'fieldset[disabled] .multiselect': {
      'pointer-events': 'none'
    },

    '.multiselect, .multiselect__input, .multiselect__single': {
      fontFamily: 'inherit',
      touchAction: 'manipulation'
    },

    '.multiselect': {
      minHeight: '40px',
      boxSizing: 'content-box',
      display: 'block',
      position: 'relative',
      width: '100%',
      textAlign: 'left',
      color: '#35495e'
    },

    '.multiselect *': {
      boxSizing: 'border-box'
    },

    '.multiselect:focus': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': theme('colors.primary.400')
    },

    '.multiselect--disabled': {
      'pointer-events': 'none',
      opacity: '0.6'
    },

    '.multiselect--active:not(.multiselect--above) .multiselect__current, .multiselect--active:not(.multiselect--above) .multiselect__input, .multiselect--active:not(.multiselect--above) .multiselect__tags': {
      'border-bottom-left-radius': '0',
      'border-bottom-right-radius': '0'
    },

    '.multiselect--active .multiselect__select': {
      transform: 'rotateZ(180deg)'
    },

    // -----------
    '.multiselect--above.multiselect--active .multiselect__current, .multiselect--above.multiselect--active .multiselect__input, .multiselect--above.multiselect--active .multiselect__tags': {
      'border-top-left-radius': 0,
      'border-top-right-radius': 0
    },

    '.multiselect__input, .multiselect__single': {
      'min-height': '20px',
      transition: 'border 0.1s ease'
    },

    '.multiselect__input::placeholder': {
      color: theme('colors.gray.400')
    },

    '.multiselect__tag ~ .multiselect__input, .multiselect__tag ~ .multiselect__single': {
      width: 'auto'
    },
    '.multiselect__input:hover, .multiselect__single:hover': {
      'border-color': '#cfcfcf' // not in colors.scss
    },
    '.multiselect__input:focus, .multiselect__single:focus': {
      'border-color': ' #a8a8a8', // not in colors.scss
      outline: 'none'
    },
    '.multiselect__tag': {
      // background: #41b883,
      'text-overflow': 'ellipsis'
    },
    '.multiselect__tag-icon': {
      'font-style': 'initial'
    },
    '.multiselect__tag-icon-after': {
      content: '×',
      color: '#ffffff',
      'font-size': '14px'
    },

    '.multiselect__placeholder': {
      color: theme('colors.gray.400'),
      display: 'inline-block',
      'margin-bottom': '10px',
      'padding-top': '2px'
    },

    '.multiselect--active .multiselect__placeholder': {
      display: 'none'
    },

    '.multiselect__content-wrapper': {
      '-webkit-overflow-scrolling': 'touch'
    },

    '.multiselect--above .multiselect__content-wrapper': {
      bottom: '100%',
      'border-bottom-left-radius': '0',
      'border-bottom-right-radius': '0',
      'border-top-left-radius': '5px',
      'border-top-right-radius': '5px',
      'border-bottom': 'none',
      'border-top': '1px solid #e8e8e8'
    },

    '.multiselect__content::webkit-scrollbar': {
      display: 'none'
    },

    '.multiselect__option': {
      'min-height': '40px'
    },

    '.multiselect': {
      '.multiselect__option--highlight': {
        'background-color': theme('colors.gray.100'),
        color: '#040405',
        'font-weight': 'normal !important',

        '&.multiselect__option--selected': {
          'background-color': theme('colors.primary.100'),
          color: '#040405',
          cursor: 'text',
          'font-weight': 'normal !important',

          ' &::after': {
            background: '#040405',
            color: '#fff'
          }
        },

        '&::after': {
          background: '#040405',
          color: '#fff'
        }
      },

      '.multiselect__option--selected': {
        'font-weight': 'normal !important',
        'background-color': theme('colors.primary.100')
      },

      '&.error': {
        border: '1px solid #fb7178',
        'border-radius': '5px'
      }
    }
  }
}

module.exports = selectComponent
