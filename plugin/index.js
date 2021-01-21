const plugin = require('tailwindcss/plugin')
const colors = require('./colors')
const keyframes = require('./keyframes')

const baseStyle = require('./components/base')

const SwitchComponent = require('./components/switch')
const FileUploadComponent = require('./components/file-upload')
const DatepickrComponent = require('./components/datepickr')
const TiptapEditorComponent = require('./components/tiptap-editor')
const TableComponent = require('./components/table')
const SelectComponent = require('./components/select')

const SwWizard = require('./components/wizard')
const SwRadio = require('./components/radio')
const SwCheckbox = require('./components/checkbox')

const spacing = {
  '0.5': '0.125rem',
  '1.5': '0.375rem',
  '2.5': '0.625rem',
  '22': '5.625rem',
  '60': '240px',
  '130': '560px'
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

const minHeight = {
  '10': '2.5rem'
}

const maxHeight = {
  '130': '560px',
  '60': '240px'
}

const zIndex = {
  '5': 5,
  '15': 15,
  '25': 25
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
        '.sw-h1': {
          ...spacewindTypography,
          fontSize: '35px'
        },
        '.sw-h2': {
          ...spacewindTypography,
          fontSize: '28px'
        },
        '.sw-h3': {
          ...spacewindTypography,
          fontSize: '24.5px'
        },
        '.sw-h4': {
          ...spacewindTypography,
          fontSize: '21px'
        },
        '.sw-h5': {
          ...spacewindTypography,
          fontSize: '17.5px'
        },
        '.sw-h6': {
          ...spacewindTypography,
          fontSize: '14px'
        },
        '.sw-page-title': {
          ...spacewindTypography,
          fontSize: '24.5px'
        },
        '.sw-section-title': {
          ...spacewindTypography,
          fontSize: '17.5px',
          fontWeight: 500
        }
      })

      let SwSwitch = SwitchComponent(theme)
      let SwFileUpload = FileUploadComponent(theme)
      let SwDatepickr = DatepickrComponent(theme)
      let SwEditor = TiptapEditorComponent(theme)
      let SwTable = TableComponent(theme)
      let SwSelect = SelectComponent(theme)

      addComponents(SwFileUpload)
      addComponents(SwSwitch)
      addComponents(SwCheckbox)
      addComponents(SwRadio)
      addComponents(SwDatepickr)
      addComponents(SwEditor)
      addComponents(SwTable)
      addComponents(SwWizard)
      addComponents(SwSelect)
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
          inset,
          minHeight,
          maxHeight,
          zIndex
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
