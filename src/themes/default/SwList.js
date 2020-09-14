export default {
  classes: {
    container: 'p-0 list-none',
    itemContainer:
      'cursor-pointer pb-2 pr-0 text-sm font-medium leading-5 text-gray-500 flex items-center',
    title: '',
    iconContainer: 'mr-3',
    active: {
      itemContainer:
        'cursor-pointer pb-2 pr-0 text-sm font-medium flex items-center leading-5 text-primary-500'
    }
  },
  variants: {
    sidebar: {
      container: 'p-0 m-0 list-none mt-10 first:mt-6',
      itemContainer:
        'cursor-pointer px-0 py-3 flex items-center block border-l-3 border-solid border-gray-100',
      title: 'text-sm not-italic font-medium leading-5 text-black',
      iconContainer:
        'inline-block overflow-visible h-5 w-5 ml-6 text-sm text-gray-500 mr-5',
      active: {
        itemContainer:
          'cursor-pointer px-0 py-3 text-primary-500 flex items-center border-l-3 border-solid border-primary-500 bg-gray-100 ',
        title:
          'text-sm not-italic font-medium leading-5 text-black text-primary-500',
        iconContainer:
          'inline-block overflow-visible h-5 w-5 ml-6 text-sm text-primary-500 mr-5'
      }
    }
  }
}
