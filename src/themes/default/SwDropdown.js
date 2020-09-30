export default {
  classes: {
    container: 'relative',
    activator: 'cursor-pointer',
    divider: 'border-t border-solid border-gray-200 my-2 mx-0 overflow-hidden',
    itemContainer:
      'absolute top-full mr-0 my-2 z-50 p-2 text-base text-left list-none rounded border-0 shadow bg-white text-black',
    item:
      'flex p-2 text-sm font-light text-left text-black bg-transparent rounded cursor-pointer none hover:bg-gray-200',
    itemIcon: 'w-5 h-5 mr-3 text-secondary',
    animation: 'animate-bounce origin-top-left'
  },
  variants: {
    right: {
      itemContainer:
        'absolute right-0 left-auto top-full mr-0 my-2 z-50 p-2 text-base text-left list-none rounded border-0 shadow bg-white text-black',
      animation: 'animate-bounce origin-top-right'
    },
    above: {
      animation: 'animate-bounce origin-bottom-left'
    },
    aboveRight: {
      itemContainer:
        'absolute right-0 left-auto top-full mr-0 my-2 z-50 p-2 text-base text-left list-none rounded border-0 shadow bg-white text-black',
      animation: 'animate-bounce origin-bottom-right'
    }
  }
}
