export default {
  classes: {
    button:
      'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-gray-400',
    disabledClass: 'cursor-not-allowed',
    loadingIconContainer: 'pr-3',
    loadingIcon: 'w-6 h-6 text-current animate-spin'
  },
  sizes: {
    xs: {
      button: 'px-2.5 py-1.5 text-xs leading-4 font-medium rounded'
    },
    sm: {
      button: 'px-3 py-2 text-sm leading-4 font-medium rounded-md'
    },
    md: {
      button: 'py-2 px-4 text-base leading-6 font-medium rounded-md'
    },
    lg: {
      button: 'py-3 px-6 text-base leading-6 font-medium rounded-md'
    },
    default: {
      button: 'py-2 px-4 text-sm leading-5 font-medium rounded-md'
    }
  },
  variants: {
    primary: {
      button:
        'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-primary-500 hover:bg-opacity-75'
    },
    success: {
      button:
        'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-success hover:bg-opacity-75'
    },
    danger: {
      button:
        'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-danger hover:bg-opacity-75'
    },
    primaryLight: {
      button:
        'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-primary-400 hover:bg-opacity-75'
    },
    warning: {
      button:
        'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-warning hover:bg-opacity-75'
    },
    info: {
      button:
        'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-info hover:bg-opacity-75'
    },
    primaryOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-150 border border-transparent border border-solid border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
    },
    successOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-150 border border-transparent border border-solid border-success text-success hover:bg-success hover:text-white'
    },
    dangerOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-150 border border-transparent border border-solid border-danger text-danger hover:bg-danger hover:text-white'
    },
    primaryLightOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-150 border border-transparent border border-solid border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white'
    },
    warningOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-150 border border-transparent border border-solid border-warning text-warning hover:bg-warning hover:text-white'
    },
    infoOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-150 border border-transparent border border-solid border-info text-info hover:bg-info hover:text-white'
    },
    outline: {
      button:
        'inline-flex justify-center items-center focus:outline-none transition ease-in-out duration-150 border border-transparent border border-solid border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white'
    }
  }
}
