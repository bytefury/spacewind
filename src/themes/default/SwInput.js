export default {
  classes: {
    container:
      'relative flex items-center w-full border border-solid rounded-md bg-white',
    prefixContainer: 'flex items-center h-full py-0 pl-2',
    prefix: 'text-black font-medium text-sm whitespace-nowrap',
    baseInput:
      'not-italic font-normal leading-tight text-left outline-none rounded-md input-field box-border-2 placeholder-gray-400 text-black w-full h-10 px-3 py-2 text-sm',
    rightIconInput:
      'not-italic font-normal leading-tight text-left outline-none rounded-md input-field box-border-2 placeholder-gray-400 text-black w-full h-10 pl-3 pr-1 py-2 text-sm',
    leftIconInput:
      'not-italic font-normal leading-tight text-left outline-none rounded-md input-field box-border-2 placeholder-gray-400 text-black w-full h-10 pl-1 pr-3 py-2 text-sm',
    rightIconContainer: 'flex flex-col justify-center align-middle pr-2',
    leftIconContainer: 'flex flex-col justify-center align-middle',
    containerFocusIn: 'border-primary-500',
    containerFocusOut: 'border-gray-300 focus:border-transparent'
  },
  variants: {
    danger: {
      container:
        'relative flex items-center w-full border border-solid border-danger rounded-md bg-white',
      baseInput:
        'not-italic font-normal leading-tight text-left rounded-md outline-none input-field box-border-2 placeholder-gray-400 text-black w-full h-10 px-3 py-2 text-sm'
    },
    disabled: {
      container:
        'relative flex items-center w-full border border-solid bg-gray-100 border-gray-300 rounded-md',
      baseInput:
        'not-italic font-normal leading-tight text-left rounded-md outline-none input-field box-border-2 placeholder-gray-500 bg-gray-100 text-gray-600 w-full h-10 px-3 py-2 text-sm'
    },
    success: {
      container:
        'relative flex items-center w-full border border-solid border-success rounded-md bg-white',
      baseInput:
        'not-italic font-normal leading-tight text-left rounded-md outline-none input-field box-border-2 placeholder-gray-400 text-black w-full h-10 px-3 py-2 text-sm'
    }
  }
}
