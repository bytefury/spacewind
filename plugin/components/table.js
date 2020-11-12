const TableComponent = theme => {
  return {
    '.flat-table': {
      'tr:last-child': {
        td: {
          border: 'none !important'
        }
      }
    },
    '.table-component__filter': {
      alignSelf: 'flex-end',
      position: 'relative'
    },

    '.table-component__filter__field': {
      padding: '0.15em 1.25em 0.15em 0.75em',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme('colors.gray.100'),
      fontSize: '15px',
      borderRadius: '3px'
    },

    '.table-component__filter__field:focus': {
      outline: 0,
      borderColor: theme('colors.primary.500')
    },

    '.table-component__table': {
      borderSpacing: '0 15px'
    },

    '.asc-direction, .desc-direction': {
      display: 'none'
    },

    '.table-component__th--sort-asc': {
      '.asc-direction': {
        display: 'inline'
      }
    },

    '.table-component__th--sort-desc': {
      '.desc-direction': {
        display: 'inline'
      }
    },

    // Pagination
    '.table-component .pagination': {
      '.page-item.active .page-link': {
        color: `${theme('colors.white')} !important`
      },

      'a i': {
        padding: '0.5rem 0.75rem',
        marginLeft: '-1px'
      }
    },

    'table.full-width': {
      width: '100%'
    },

    '.selectall': {
      cursor: 'pointer',
      zIndex: '10'
    },

    '.table-component td > span:first-child': {
      background: '#ebf1fa',
      color: theme('colors.primary.500'),
      display: 'none',
      fontSize: '10px',
      fontWeight: 'bold',
      padding: '5px',
      left: '0',
      position: 'absolute',
      textTransform: 'uppercase',
      top: '0'
    },

    '.select-all-label': {
      display: 'none !important'
    },

    '@media (max-width: 768px)': {
      '.select-all-label': {
        display: 'inline !important',
        color: theme('colors.primary.700'),
        cursor: 'pointer'
      },

      '.selectall': {
        top: '20px'
      },

      '.table-component': {
        '.dropdown-group': {
          position: 'absolute',
          visibility: 'visible',
          top: '15px',
          right: '10px'
        },

        thead: {
          left: '-9999px',
          position: 'absolute',
          visibility: 'hidden'
        },

        tr: {
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: '50px',
          position: 'relative'
        },

        td: {
          margin: '0 -1px -1px 0',
          paddingTop: '40px !important',
          position: 'relative',
          width: '50%',
          left: '0',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme('colors.gray.100'),

          '&:not(:first-child)': {
            textAlign: 'center !important'
          },

          '&:first-child': {
            display: 'flex',
            justifyContent: 'space-between',
            flex: '1 100%',
            height: '50px',
            paddingTop: '25px !important',
            alignItems: 'center',
            'border-bottom-left-radius': '0px !important',
            'border-top-left-radius': '5px !important',
            'border-top-right-radius': '5px !important'
          },

          '&:last-child': {
            position: 'unset',
            visibility: 'hidden',
            height: '0px !important',
            padding: '0px !important'
          },

          '&:nth-last-child(3)': {
            'border-bottom-left-radius': '5px !important'
          },

          '&:nth-last-child(2)': {
            'border-bottom-right-radius': '5px !important'
          }
        },

        'td > span:first-child': {
          display: 'block'
        },

        '.dropdown-container': {
          right: '0',
          left: '120px'
        }
      }
    }
  }
}

module.exports = TableComponent
