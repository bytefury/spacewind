export default {
  classes: {
    container:
      'flex items-center relative w-full flex-row bg-white h-10 px-2 rounded border border-solid',
    prefix: 'flex items-center h-full text-black font-medium text-sm py-0 pr-1',
    input:
      'text-left bg-white border-none not-italic outline-none text-black w-full h-full pr-3 font-normal text-sm',
    focusIn: 'border-primary-500',
    focusOut: 'border-gray-300 focus:border-transparent'
  },
  variants: {
    danger: {
      focusIn: 'border-danger',
      focusOut: 'border-danger'
    },
    disabled: {
      container:
        'flex items-center relative w-full flex-row bg-white h-10 px-2 rounded border border-solid bg-gray-300 text-gray-600',
      input:
        'text-left bg-white border-none not-italic outline-none text-black w-full h-full pr-3 font-normal text-sm bg-gray-300 text-gray-600'
    }
  }
}
