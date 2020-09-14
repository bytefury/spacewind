const fileUploadComponent = theme => {
  return {
    '.dropzone': {
      '.dz-message': {
        textAlign: 'center',
        margin: '2em 0'
      },
      '.dz-preview': {
        minHeight: '100px',
        '&:hover': {
          zIndex: '1000',
          '.dz-details': {
            opacity: '1',
            opacity: '1'
          }
        },
        '.dz-remove': {
          top: '-24px',
          right: '-24px'
        },
        '.dz-details': {
          '.dz-filename': {
            '&:hover': {
              span: {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme('colors.gray.400'),
                backgroundColor: theme('colors.gray.400')
              }
            },
            '&:not(:hover)': {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              span: {
                border: '1px solid transparent'
              }
            }
          }
        },
        '.dz-success-mark': {
          opacity: '0',
          zIndex: '500',
          top: '50%',
          left: '50%',
          marginLeft: '-27px',
          marginTop: '-27px'
        },
        '.dz-error-mark': {
          zIndex: '500',
          top: '50%',
          left: '50%',
          marginLeft: '-27px',
          marginTop: '-27px'
        },
        '&:not(.dz-processing)': {
          '.dz-progress': {
            '-webkit-animation': 'pulse 6s ease infinite',
            '-moz-animation': 'pulse 6s ease infinite',
            '-ms-animation': 'pulse 6s ease infinite',
            '-o-animation': 'pulse 6s ease infinite',
            animation: 'pulse 6s ease infinite'
          }
        },
        '.dz-progress': {
          display: 'none',
          zIndex: '1000',
          left: '50%',
          top: '50%',
          marginTop: '-8px',
          marginLeft: '-40px',
          '.dz-upload': {
            '-webkit-transition': 'width 300ms ease-in-out',
            '-moz-transition': 'width 300ms ease-in-out',
            '-ms-transition': 'width 300ms ease-in-out',
            '-o-transition': 'width 300ms ease-in-out',
            transition: 'width 300ms ease-in-out'
          }
        },
        '.dz-error-message': {
          zIndex: '1000',
          top: '130px',
          left: '-10px'
        }
      },
      '.dz-preview.dz-image-preview': {
        '.dz-details': {
          '-webkit-transition': 'opacity 0.2s linear',
          '-moz-transition': 'opacity 0.2s linear',
          '-ms-transition': 'opacity 0.2s linear',
          '-o-transition': 'opacity 0.2s linear',
          transition: 'opacity 0.2s linear'
        }
      },
      '.dz-preview.dz-success': {
        '.dz-success-mark': {
          opacity: '1',
          '-webkit-animation':
            'passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)',
          '-moz-animation':
            'passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)',
          '-ms-animation': 'passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)',
          '-o-animation': 'passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)',
          animation: 'passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)'
        }
      },
      '.dz-preview.dz-error': {
        '.dz-error-mark': {
          opacity: '1',
          '-webkit-animation': 'slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)',
          '-moz-animation': 'slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)',
          '-ms-animation': 'slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)',
          '-o-animation': 'slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)',
          animation: 'slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)'
        },
        '.dz-error-message': {
          display: 'block'
        },
        '&:hover': {
          '.dz-error-message': {
            opacity: '1',
            pointerEvents: 'auto'
          }
        }
      },
      '.dz-preview.dz-processing': {
        '.dz-progress': {
          display: 'block',
          opacity: '1',
          '-webkit-transition': 'all 0.2s linear',
          '-moz-transition': 'all 0.2s linear',
          '-ms-transition': 'all 0.2s linear',
          '-o-transition': 'all 0.2s linear',
          transition: 'all 0.2s linear'
        }
      },
      '.dz-preview.dz-complete': {
        '.dz-progress': {
          opacity: 0,
          '-webkit-transition': 'opacity 0.4s ease-in',
          '-moz-transition': 'opacity 0.4s ease-in',
          '-ms-transition': 'opacity 0.4s ease-in',
          '-o-transition': 'opacity 0.4s ease-in',
          transition: 'opacity 0.4s ease-in'
        },
        '.dz-success-mark': {
          opacity: '0',
          '-webkit-transition': 'all 0.2s linear',
          '-moz-transition': 'all 0.2s linear',
          '-ms-transition': 'all 0.2s linear',
          '-o-transition': 'all 0.2s linear',
          transition: 'all 0.2s linear'
        }
      }
    },
    '.dropzone.dz-started': {
      '.dz-message': {
        display: 'none'
      }
    },
    '.dropzone.dz-drag-hover': {
      borderStyle: 'solid',
      '.dz-message': {
        opacity: 0.5
      }
    }
  }
}

module.exports = fileUploadComponent
