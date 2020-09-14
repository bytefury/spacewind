const DatepickrComponent = theme => {
  return {
    '.flatpickr-calendar.open': {
      zIndex: '40 !important'
    },
    '.base-date-picker-input': {
      '&:focus': {
        boxShadow: 'none'
      }
    },

    '.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay': {
      '-webkit-box-shadow': 'none',
      boxShadow: 'none',
      backgroundColor: theme('colors.primary.500'),
      boaderColor: theme('colors.primary.500'),
      color: theme('colors.white')
    },

    '.flatpickr-day.inRange, .flatpickr-day.prevMonthDay.inRange, .flatpickr-day.nextMonthDay.inRange, .flatpickr-day.today.inRange, .flatpickr-day.prevMonthDay.today.inRange, .flatpickr-day.nextMonthDay.today.inRange, .flatpickr-day:hover, .flatpickr-day.prevMonthDay:hover, .flatpickr-day.nextMonthDay:hover, .flatpickr-day:focus, .flatpickr-day.prevMonthDay:focus, .flatpickr-day.nextMonthDay:focus': {
      cursor: 'pointer',
      outline: '0',
      background: theme('colors.gray.300'),
      borderColor: theme('colors.gray.300')
    }
  }
}

module.exports = DatepickrComponent
