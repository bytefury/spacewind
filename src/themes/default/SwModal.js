export default {
  classes: {
    overlayContainer:
      'fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-25 flex justify-center min-h-screen items-center text-center sm:block sm:p-0',
    centering: 'hidden sm:inline-block sm:align-middle sm:h-screen',
    base:
      'inline-block w-2/6 align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle m-6 sm:m-0',
    header:
      'py-4 px-6 text-black font-medium text-lg border-b border-solid border-gray-200 flex justify-between items-center',
    body: 'modal body px-6 py-4 text-sm',
    footer: 'border-t border-solid border-gray-200 py-4 px-6 flex justify-end'
  },
  variants: {
    lg: {
      base:
        'inline-block align-bottom bg-white rounded text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle m-6 sm:m-0'
    }
  }
}
