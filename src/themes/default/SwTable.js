export default {
  classes: {
    tableComponentContainer: 'flex flex-col relative mt-6 table-component',
    tableComponentFilterClear:
      'absolute cursor-pointer top-0 right-0 bottom-0 flex items-center justify-center pr-2 font-bold w-4',
    tableComponentTableWrapper: 'w-full',
    baseTableStyle: 'w-full border-separate table-auto mb-0',
    tableCaption: 'absolute top-auto overflow-hidden',
    emptyTableMessage: 'text-center text-gray-dark pt-3',
    thStyles:
      'p-3 text-very-dark text-left align-middle tracking-widest uppercase whitespace-no-wrap text-sm font-medium',
    thSortStyles: 'cursor-pointer select-none',
    tdStyles:
      'text-left text-base h-20 px-4 py-6 align-middle bg-white first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md',
    trStyles: 'rounded-lg transition-all ease-in-out delay-200 hover:shadow-lg',
    paginationContainer: 'flex justify-end',
    paginationDisabled: 'cursor-auto pointer-events-none text-gray-light',
    paginationLeftIcon:
      'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-light',
    pageItem:
      'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-light',
    activePageItem: 'bg-primary text-white',
    paginationRightIcon:
      'right chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-light',
    filterInput:
      'py-1 pl-3 pr-5 border border-solid border-gray-light rounded-sm text-sm focus:border-primary outline-none'
  }
}

// export default {
//   tableComponentContainer: {
//     class: 'flex flex-col relative mt-6 table-component',
//   },
//   tableComponentFilterClear: {
//     class: `absolute top-0 right-0 bottom-0 flex items-center justify-center`,
//     style: `width: '2em'; color: '#007593'; font-weight: 'bold`,
//   },
//   tableComponentTableWrapper: {
//     class: `w-full`,
//   },
//   baseTableStyle: {
//     class: `w-full border-separate table-auto mb-0`,
//     style: `border-spacing: 0 15px;`,
//   },
//   tableCaption: {
//     class: `absolute top-auto overflow-hidden`,
//     style: `left: -10000px; width: 1px; height: 1px;`,
//   },
//   emptyTableMessage: {
//     class: `text-center`,
//     style: `color: #999; padding-top: 10px;`,
//   },
//   thStyles: {
//     class:
//       'text-left align-middle uppercase whitespace-no-wrap text-sm font-medium',
//     style: 'padding: 0.75em 1.25em; color: #263B5E;letter-spacing: 0.3px;',
//   },
//   thSortStyles: {
//     class: 'cursor-pointer select-none',
//   },
//   tdStyles: {
//     class:
//       'text-left align-middle bg-white first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md',
//     style: `padding: 0.75em 1.25em; font-size: 15px; padding: 25px 15px; height: 80px;`,
//   },
//   trStyles: {
//     class: 'rounded-lg transition-all ease-in-out delay-200 hover:shadow-lg',
//   },
//   paginationContainer: 'flex justify-end',
//   paginationDisabled: {
//     class: 'cursor-auto pointer-events-none',
//     style: 'color: #d9d9d9;',
//   },
//   paginationLeftIcon:
//     'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-light',
//   pageItem:
//     'left chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-light',
//   activePageItem: 'bg-primary text-white',
//   paginationRightIcon:
//     'right chevron icon block px-3 py-2 not-italic cursor-pointer leading-tight bg-white border border-solid border-gray-light',
//   filterInput:
//     'py-1 pl-3 pr-5 border border-solid border-gray-light rounded-sm text-sm focus:border-primary outline-none',
// }
