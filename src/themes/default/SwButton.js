export default {
  classes: {
    button:
      'inline-flex items-center justify-center text-white font-normal transition duration-150 ease-in-out border border-transparent focus:outline-none bg-gray-400 whitespace-nowrap',
    disabledClass: 'cursor-not-allowed',
    loadingIconContainer: 'pr-3',
    loadingIcon: 'text-current animate-spin'
  },
  sizes: {
    xs: {
      button: 'px-2.5 py-1.5 text-xs leading-4 rounded',
      loadingIcon: 'w-3 h-3 -ml-1'
    },
    sm: {
      button: 'px-3 py-2 text-sm leading-4 rounded-md',
      loadingIcon: 'w-3 h-3 -ml-2'
    },
    md: {
      button: 'py-2 px-4 text-sm leading-5 rounded',
      loadingIcon: 'w-4 h-4 -ml-2'
    },
    lg: {
      button: 'py-2 px-4 text-base leading-6 rounded-md',
      loadingIcon: 'w-6 h-6 -ml-2'
    },
    xl: {
      button: 'py-3 px-6 text-base leading-6 rounded-md',
      loadingIcon: 'w-6 h-6 -ml-2'
    }
  },
  variants: {
    primary: {
      button:
        'inline-flex items-center justify-center text-white font-normal transition duration-150 ease-in-out border border-transparent focus:outline-none bg-primary-500 hover:bg-opacity-75 whitespace-nowrap'
    },
    success: {
      button:
        'inline-flex items-center justify-center text-white font-normal transition duration-150 ease-in-out border border-transparent focus:outline-none bg-success hover:bg-opacity-75 whitespace-nowrap'
    },
    danger: {
      button:
        'inline-flex items-center justify-center text-white transition duration-150 ease-in-out border border-transparent focus:outline-none bg-danger hover:bg-opacity-75 whitespace-nowrap'
    },
    primaryLight: {
      button:
        'inline-flex items-center justify-center text-white font-normal transition duration-150 ease-in-out border border-transparent focus:outline-none bg-primary-400 hover:bg-opacity-75 whitespace-nowrap'
    },
    warning: {
      button:
        'inline-flex items-center justify-center text-white font-normal transition duration-150 ease-in-out border border-transparent focus:outline-none bg-warning hover:bg-opacity-75 whitespace-nowrap'
    },
    info: {
      button:
        'inline-flex items-center justify-center text-white font-normal transition duration-150 ease-in-out border border-transparent focus:outline-none bg-info hover:bg-opacity-75 whitespace-nowrap'
    },
    primaryOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none font-normal transition ease-in-out duration-150 border border-transparent border border-solid border-primary-500 text-primary-500 hover:bg-primary-200 shadow-inner whitespace-nowrap'
    },
    successOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none font-normal transition ease-in-out duration-150 border border-transparent border border-solid border-success text-success hover:bg-success shadow-inner hover:bg-opacity-25 whitespace-nowrap'
    },
    dangerOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none font-normal transition ease-in-out duration-150 border border-transparent border border-solid border-danger text-danger hover:bg-danger shadow-inner hover:bg-opacity-25 whitespace-nowrap'
    },
    primaryLightOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none font-normal transition ease-in-out duration-150 border border-transparent border border-solid border-primary-400 text-primary-400 hover:bg-primary-100 shadow-inner whitespace-nowrap'
    },
    warningOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none font-normal transition ease-in-out duration-150 border border-transparent border border-solid border-warning text-warning hover:bg-warning shadow-inner hover:bg-opacity-25 whitespace-nowrap'
    },
    infoOutline: {
      button:
        'inline-flex justify-center items-center focus:outline-none font-normal transition ease-in-out duration-150 border border-transparent border border-solid border-info text-info hover:bg-info shadow-inner hover:bg-opacity-25 whitespace-nowrap'
    },
    outline: {
      button:
        'inline-flex justify-center items-center focus:outline-none font-normal transition ease-in-out duration-150 border border-transparent border border-solid border-gray-400 text-gray-400 hover:bg-gray-200 shadow-inner whitespace-nowrap'
    }
  }
}
