const CheckboxComponent = {
  '.radio': {
    'input[type="radio"]': {
      '-webkit-print-color-adjust': 'exact',
      colorAdjust: 'exact',
      backgroundOrigin: 'border-box'
    },
    'input[type="radio"]:checked': {
      backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
      borderColor: 'transparent',
      backgroundColor: 'currentColor',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }
}

module.exports = CheckboxComponent
