export default {
  classes: {
    container: 'relative flex flex-row',
    icon:
      'absolute w-5 h-5 mx-2 my-2 text-sm not-italic font-black text-gray-500 cursor-pointer',
    datepicker:
      'w-full h-10 px-3 py-3 pl-8 text-sm not-italic font-normal leading-tight text-left border border-solid rounded-md outline-none input-field box-border-2 focus:border-primary-500 base-date-picker-input placeholder-gray-400 border-gray-100 focus:border-primary-500'
  },
  variants: {
    invalid: {
      datepicker:
        'w-full h-10 px-3 py-3 pl-8 text-sm not-italic font-normal leading-tight text-left border border-solid rounded-md outline-none input-field box-border-2 base-date-picker-input placeholder-gray-400 border-danger'
    },
    disabled: {
      datepicker:
        'w-full h-10 px-3 py-3 pl-8 text-sm not-italic font-normal leading-tight text-left border border-solid rounded-md outline-none input-field box-border-2 base-date-picker-input placeholder-gray-400 bg-gray-100 text-gray-600 border-gray-300'
    }
  }
}
