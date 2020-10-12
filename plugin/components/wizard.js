const WizardComponent = {
  '.wizard': {
    '.indicator-line': {
      borderWidth: '5px',
      width: '530px'
    },
    '.center': {
      marginTop: '-11px',
      width: '105%'
    },
    '.steps': {
      float: 'left',
      borderWidth: '5px',
      height: '25px',
      width: '25px'
    },
    '@media (max-width: 480px)': {
      '.indicator-line': {
        width: '90%'
      }
    }
  }
}

module.exports = WizardComponent
