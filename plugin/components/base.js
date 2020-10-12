const baseStyle = {
  '.sw-page': {
    minHeight: 'calc(100vh - 39px) !important'
  },
  '.sw-scroll::-webkit-scrollbar': {
    width: '4px',
    cursor: 'pointer'
  },
  '.sw-scroll::-webkit-scrollbar-track': {
    backgroundColor: 'rgba(229, 231, 235, 1)',
    cursor: 'pointer'
  },
  '.sw-scroll::-webkit-scrollbar-thumb': {
    cursor: 'pointer',
    backgroundColor: '#a0aec0'
  }
}

module.exports = baseStyle
