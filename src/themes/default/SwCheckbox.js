export default {
  classes: {
    container: 'checkbox flex items-center',
    label: 'cursor-pointer text-primary-800',
    input:
      'cursor-pointer flex-shrink-0 inline-block text-primary-500 align-middle bg-white border border-gray-300 rounded outline-none appearance-none select-none transition duration-200 ease-in-out'
  },
  variants: {
    success: {
      input:
        'cursor-pointer flex-shrink-0 inline-block text-success align-middle bg-white border border-gray-300 rounded outline-none appearance-none select-none transition duration-200 ease-in-out',
      label: 'cursor-pointer text-primary-800'
    },
    danger: {
      input:
        'cursor-pointer flex-shrink-0 inline-block text-danger align-middle bg-white border border-gray-300 rounded outline-none appearance-none select-none transition duration-200 ease-in-out',
      label: 'cursor-pointer text-primary-800'
    },
    flatTable: {
      container: 'checkbox flex justify-center items-center'
    }
  },
  sizes: {
    sm: {
      input: 'w-4 h-4',
      label: 'ml-2'
    },
    default: {
      input: 'w-6 h-6',
      label: 'ml-3 text-lg'
    },
    lg: {
      input: 'w-8 h-8',
      label: 'ml-4 text-xl'
    }
  }
}
