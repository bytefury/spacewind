export default {
  classes: {
    container: 'w-full relative',
    label: 'text-sm',
    requiredSign: 'text-danger',
    inputContainer: 'mt-1',
    errorText: 'mt-1 text-danger text-sm',
    tooltipContainer: 'absolute top-0 right-0',
    tooltipIconContainer: '',
    tooltipIcon: 'w-6 h-6 text-current text-gray-400 cursor-pointer',
    tooltip: 'px-2.5 py-1 text-sm text-white rounded bg-black',
    popoverClass: '',
    popoverBaseClass: '',
    popoverWrapperClass: '',
    popoverArrowClass: '',
    popoverInnerClass: '',
    openClass: ''
  },
  variants: {
    horizontal: {
      container: 'grid md:grid-cols-12',
      inputContainer: 'col-span-8 md:col-start-5 md:col-ends-12',
      label: 'relative pr-0 pt-1 mr-3 text-sm md:col-span-4 md:text-right'
    }
  }
}
