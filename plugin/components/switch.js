const SwitchComponent = theme => {
  return {
    '.switch[type = "checkbox"]': {
      height: 0,
      width: 0,
      visibility: 'hidden'
    },
    '.switch-label': {
      textIndent: '-9999px',
      width: '35px',
      borderRadius: '16px',
      '.switch-circle': {
        position: 'absolute',
        top: '-3px',
        left: '0px',
        width: '20px',
        height: '20px',
        background: theme('colors.gray.500'),
        borderRadius: '15px',
        transition: '0.3s'
      }
    },
    '.switch-label:active .switch-circle': {
      width: '20px'
    },
    '.switch:checked + .switch-label': {
      background: theme('colors.primary.300')
    },
    '.switch:checked + .switch-label .switch-circle': {
      left: 'calc(100% - 0px)',
      transform: 'translateX(-100%)',
      background: theme('colors.primary.500')
    }
  }
}

module.exports = SwitchComponent
