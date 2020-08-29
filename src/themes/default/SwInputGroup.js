export default {
  classes: {
    container: '',
    label: 'text-sm',
    requiredSign: 'text-danger',
    inputContainer: 'mt-2',
    errorText: 'mt-1 text-danger text-sm'
  },
  variants: {
    horizontal: {
      container: 'grid md:grid-cols-12',
      inputContainer: 'col-span-7',
      label: 'relative pr-0 mr-3 text-sm md:col-span-4 md:text-right'
    }
  }
}
