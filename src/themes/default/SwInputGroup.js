export default {
  classes: {
    container: 'w-full',
    label: 'text-sm',
    requiredSign: 'text-danger',
    inputContainer: 'mt-1',
    errorText: 'mt-1 text-danger text-sm'
  },
  variants: {
    horizontal: {
      container: 'grid md:grid-cols-12',
      inputContainer: 'col-span-7 md:col-start-5 md:col-ends-12',
      label: 'relative pr-0 mr-3 text-sm md:col-span-4 md:text-right'
    }
  }
}
