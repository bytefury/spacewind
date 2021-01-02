export default {
  classes: {
    tableComponentContainer: 'flex flex-col relative mt-6 table-component',
    tableComponentFilterClear:
      'absolute cursor-pointer top-0 right-0 bottom-0 flex items-center justify-center pr-2 font-bold w-4',
    tableComponentTableWrapper: 'w-full',
    baseTableStyle: 'w-full border-separate table-auto mb-0 sw-border-gap-15',
    tableCaption: 'absolute top-auto overflow-hidden',
    emptyTableMessage: 'text-center text-gray-400 pt-3',
    thStyles:
      'relative px-4 py-3 text-gray-800 text-left align-middle tracking-widest uppercase whitespace-nowrap text-sm font-medium',
    thSortStyles: 'cursor-pointer select-none',
    tdStyles:
      'text-left text-base h-20 px-4 py-6 align-middle bg-white font-light first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md',
    trStyles: 'transition duration-300 ease-in-out hover:shadow-lg',
    paginationContainer: 'flex justify-end',
    paginationDisabled: 'cursor-auto pointer-events-none text-gray-400',
    paginationLeftIcon:
      'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
    pageItem:
      'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
    activePageItem: 'bg-primary-500 text-white',
    paginationRightIcon:
      'right chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
    filterInput:
      'py-1 pl-3 pr-5 border border-solid border-gray-100 rounded-sm text-sm focus:border-primary-500 outline-none'
  },
  variants: {
    flatRows: {
      tableComponentContainer:
        'flex flex-col relative mt-6 table-component bg-white rounded-md flat-table',
      tableComponentFilterClear:
        'absolute cursor-pointer top-0 right-0 bottom-0 flex items-center justify-center pr-2 font-bold w-4',
      tableComponentTableWrapper: 'w-full',
      baseTableStyle: 'w-full border-separate table-auto mb-0 sw-border-gap-0',
      tableCaption: 'absolute top-auto overflow-hidden',
      emptyTableMessage: 'text-center text-gray-400 pt-3',
      thStyles:
        'relative pt-6 pb-4 pl-2 pr-3 text-gray-600 text-left align-middle tracking-widest uppercase whitespace-nowrap text-sm font-medium',
      thSortStyles: 'cursor-pointer select-none',
      tdStyles:
        'text-left text-base h-8 px-2 py-3 align-middle font-light first:rounded-bl-md md:first:border-b-0 md:border-b border-solid border-gray-200',
      trStyles:
        'transition duration-300 ease-in-out bg-white hover:bg-primary-50',
      paginationContainer: 'flex justify-end',
      paginationDisabled: 'cursor-auto pointer-events-none text-gray-400',
      paginationLeftIcon:
        'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
      pageItem:
        'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
      activePageItem: 'bg-primary-500 text-white',
      paginationRightIcon:
        'right chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
      filterInput:
        'py-1 pl-3 pr-5 border border-solid border-gray-100 rounded-sm text-sm focus:border-primary-500 outline-none'
    },
    settingsTable: {
      tableComponentContainer: 'flex flex-col relative mt-6 table-component',
      tableComponentFilterClear:
        'absolute cursor-pointer top-0 right-0 bottom-0 flex items-center justify-center pr-2 font-bold w-4',
      tableComponentTableWrapper: 'w-full',
      baseTableStyle: 'w-full border-separate table-auto mb-0 sw-border-gap-15',
      tableCaption: 'absolute top-auto overflow-hidden',
      emptyTableMessage: 'text-center text-gray-400 pt-3',
      thStyles:
        'relative p-3 text-gray-800 text-left align-middle tracking-widest uppercase whitespace-nowrap text-sm font-medium',
      thSortStyles: 'cursor-pointer select-none',
      tdStyles:
        'text-left text-base h-20 px-4 py-6 align-middle font-light bg-gray-100 first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md',
      trStyles: 'transition duration-300 ease-in-out hover:shadow-lg',
      paginationContainer: 'flex justify-end',
      paginationDisabled: 'cursor-auto pointer-events-none text-gray-400',
      paginationLeftIcon:
        'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
      pageItem:
        'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
      activePageItem: 'bg-primary-500 text-white',
      paginationRightIcon:
        'right chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-100',
      filterInput:
        'py-1 pl-3 pr-5 border border-solid border-gray-100 rounded-sm text-sm focus:border-primary-500 outline-none'
    }
  }
}
