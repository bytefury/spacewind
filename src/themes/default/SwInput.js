export default {
  classes: {
    container: 'relative w-full base-input',
    input:
      'not-italic font-normal leading-tight text-left border border-solid rounded-md outline-none input-field box-border-2 placeholder-gray-500 border-gray-300 focus:border-primary-500 text-black w-full h-10 px-3 py-3 text-sm',
    disabled: 'bg-gray-300 text-gray-600'
  },
  variants: {
    danger: {
      input:
        'not-italic font-normal leading-tight text-left border border-solid rounded-md outline-none input-field box-border-2 placeholder-gray-500 border-danger focus:border-danger text-black w-full h-10 px-3 py-3 text-sm'
    },
    disabled: {
      input:
        'not-italic font-normal leading-tight text-left border border-solid rounded-md outline-none input-field box-border-2 placeholder-gray-500 bg-gray-300 text-gray-600 w-full h-10 px-3 py-3 text-sm'
    }
  }
}
