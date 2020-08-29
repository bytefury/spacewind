const plugin = require('tailwindcss/plugin')
const colors = require('./colors')

const SwitchComponent = require('./components/switch')

const spacing = {
  '1.5': '0.375rem',
  '2.5': '0.625rem'
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

      let craterDefaultTypography = {
        fontWeight: 600,
        color: theme('colors.black')
      }

      addBase({
        '.page-title': {
          ...craterDefaultTypography,
          fontSize: '24.5px'
        }
      })

      let SwSwitch = SwitchComponent(theme)

      addComponents(SwSwitch)
    }
  },
  function() {
    return {
      theme: {
        extend: {
          colors,
          spacing
        }
      }
    }
  }
)
