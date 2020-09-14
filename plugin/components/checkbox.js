const CheckboxComponent = {
  '.checkbox': {
    'input[type="checkbox"]': {
      '-webkit-print-color-adjust': 'exact',
      colorAdjust: 'exact',
      backgroundOrigin: 'border-box'
    },
    'input[type="checkbox"]:checked': {
      backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }
}

module.exports = CheckboxComponent
