export default {
  classes: {
    container: 'relative',
    activator: 'cursor-pointer',
    divider: 'border-t border-solid border-gray-200 my-2 mx-0 overflow-hidden',
    itemContainer:
      'mr-0 my-2 z-10 p-2 text-base text-left list-none rounded border-0 shadow bg-white text-black overflow-auto sw-scroll',
    item:
      'flex p-2 text-sm font-light text-left text-black bg-transparent rounded cursor-pointer none hover:bg-gray-200 whitespace-no-wrap',
    itemIcon: 'w-5 h-5 mr-3 text-secondary'
  },
  positions: {
    topRight: 'absolute right-0 left-auto bottom-full',
    topLeft: 'absolute left-0 right-auto bottom-full',
    bottomLeft: 'absolute left-0 right-auto top-full',
    bottomRight: 'absolute right-0 left-auto top-full'
  },
  variants: {}
}
