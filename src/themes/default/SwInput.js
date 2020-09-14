export default {
  classes: {
    container:
      'relative flex items-center w-full border border-solid rounded-md px-1 bg-white',
    prefix: 'flex items-center h-full text-black font-medium text-sm py-0 px-1',
    input:
      'not-italic font-normal leading-tight text-left outline-none input-field box-border-2 placeholder-gray-500 text-black w-full h-10 px-1 py-3 text-sm',
    rightIconContainer: 'flex flex-col justify-center align-middle',
    leftIconContainer: 'flex flex-col justify-center align-middle',
    containerFocusIn: 'border-primary-500',
    containerFocusOut: 'border-gray-300 focus:border-transparent'
  },
  variants: {
    danger: {
      container:
        'relative flex w-full border border-solid border-danger rounded-md px-1 bg-white',
      input:
        'not-italic font-normal leading-tight text-left rounded-md outline-none input-field box-border-2 placeholder-gray-500 text-black w-full h-10 px-1 py-3 text-sm'
    },
    disabled: {
      container:
        'relative flex w-full border border-solid bg-gray-100 border-gray-300 rounded-md px-1',
      input:
        'not-italic font-normal leading-tight text-left rounded-md outline-none input-field box-border-2 placeholder-gray-500 bg-gray-100 text-gray-600 w-full h-10 px-1 py-3 text-sm'
    }
  }
}
