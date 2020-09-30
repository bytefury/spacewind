export default {
  classes: {
    container: 'px-4 list-none',
    itemContainer:
      'cursor-pointer pb-2 pr-0 text-sm font-medium leading-5 text-gray-500 flex items-center',
    title: '',
    iconContainer: 'mr-3',
    listGroup: {
      container: 'p-0 list-none',
      titleContainer:
        'flex items-center justify-between pb-2 pr-0 text-sm font-medium leading-5 text-gray-500 cursor-pointer',
      title: 'text-sm',
      icon: 'w-5 h-5 leading-4 transform rotate-90',
      itemsContainer: 'pl-4 list-none',
      itemContainer:
        'cursor-pointer pb-2 pr-0 text-sm font-medium leading-5 text-gray-500 flex items-center'
    },
    active: {
      itemContainer:
        'cursor-pointer pb-2 pr-0 text-sm font-medium flex items-center leading-5 text-primary-500',
      listGroup: {
        container: 'p-0 list-none',
        titleContainer:
          'flex items-center justify-between pb-2 pr-0 text-sm font-medium leading-5 text-primary-500 cursor-pointer',
        title: 'text-sm',
        icon: 'w-5 h-5 leading-4 ',
        itemsContainer: 'pl-4 list-none',
        itemContainer:
          'cursor-pointer pb-2 pr-0 text-sm font-medium leading-5 text-gray-500 flex items-center'
      }
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
    },
    collapseSidebar: {
      container: '',
      itemContainer:
        'flex flex-row items-center h-10 text-sm px-4 hover:bg-gray-300 cursor-pointer text-gray-700 font-medium',
      title: 'text-sm',
      iconContainer: 'mr-4',
      listGroup: {
        container: '',
        titleContainer:
          'flex flex-row items-center h-10 text-sm px-4 hover:bg-gray-300 cursor-pointer text-gray-700 font-medium',
        title: 'text-sm',
        icon: 'h-4 w-4 transform rotate-90',
        itemsContainer: 'transition-all duration-150 bg-gray-100',
        itemContainer:
          'flex flex-row items-center h-10 text-sm pl-12 hover:bg-gray-300 cursor-pointer'
      },
      active: {
        itemContainer:
          'flex flex-row items-center h-10 text-sm px-4 hover:bg-gray-300 cursor-pointer text-primary-500',
        title: 'text-sm',
        iconContainer: 'mr-4',
        listGroup: {
          container: '',
          titleContainer:
            'flex flex-row items-center h-10 text-sm px-4 hover:bg-gray-300 cursor-pointer font-medium text-primary-500',
          title: '',
          icon: 'h-4 w-4',
          itemsContainer: 'transition-all duration-150 bg-gray-100',
          itemContainer:
            'flex flex-row items-center h-10 text-sm pl-12 hover:bg-gray-300 cursor-pointer text-primary-500'
        }
      }
    }
  }
}
