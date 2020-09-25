const plugin = require('tailwindcss/plugin')
const colors = require('./colors')
const keyframes = require('./keyframes')

const SwitchComponent = require('./components/switch')
const fileUploadComponent = require('./components/file-upload')
const SwCheckbox = require('./components/checkbox')
const SwRadio = require('./components/radio')
const DatepickrComponent = require('./components/datepickr')
const tiptapEditorComponent = require('./components/tiptap-editor')
const baseStyle = require('./components/base')

const spacing = {
  '1.5': '0.375rem',
  '2.5': '0.625rem',
  '22': '5.625rem',
  '60': '240px'
}

const borderWidth = {
  '3': '3px'
}

const animation = {
  bounce: 'bounce 0.6s ease-in-out'
}

const inset = {
  '-60': '-240px'
}

module.exports = plugin.withOptions(
  function() {
    return function(options) {
      const {
        addUtilities,
        addVariant,
        theme,
        e,
        prefix,
        variants,
        addBase,
        addComponents
      } = options

      let spacewindTypography = {
        fontWeight: 600,
        color: theme('colors.black')
      }

      addUtilities(baseStyle)

      addBase({
        '.h1': {
          ...spacewindTypography,
          fontSize: '35px'
        },
        '.h2': {
          ...spacewindTypography,
          fontSize: '28px'
        },
        '.h3': {
          ...spacewindTypography,
          fontSize: '24.5px'
        },
        '.h4': {
          ...spacewindTypography,
          fontSize: '21px'
        },
        '.h5': {
          ...spacewindTypography,
          fontSize: '17.5px'
        },
        '.h6': {
          ...spacewindTypography,
          fontSize: '14px'
        },
        '.page-title': {
          ...spacewindTypography,
          fontSize: '24.5px'
        },
        '.section-title': {
          ...spacewindTypography,
          fontSize: '17.5px',
          fontWeight: 500
        }
      })

      let SwSwitch = SwitchComponent(theme)
      let fileUpload = fileUploadComponent(theme)
      let Datepickr = DatepickrComponent(theme)
      let tiptapEditor = tiptapEditorComponent(theme)

      addComponents(fileUpload)
      addComponents(SwSwitch)
      addComponents(SwCheckbox)
      addComponents(SwRadio)
      addComponents(Datepickr)
      addComponents(tiptapEditor)
    }
  },
  function() {
    return {
      theme: {
        extend: {
          colors,
          spacing,
          borderWidth,
          keyframes,
          animation,
          inset
        }
      },
      variants: {
        borderRadius: ['responsive', 'last', 'first'],
        borderWidth: ['responsive', 'last', 'first'],
        margin: ['responsive', 'first']
      }
    }
  }
)
