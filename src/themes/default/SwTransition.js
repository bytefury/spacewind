export default {
  classes: {
    enter: 'opacity-0',
    enterTo: 'opacity-100',
    enterActive: 'transition-all duration-500 ease-in-out',
    leave: 'opacity-100',
    leaveTo: 'opacity-0',
    leaveActive: 'transition-all ease-in-out'
  },
  variants: {
    dropdown: {
      enter: 'transform scale-95 opacity-0',
      enterTo: 'transform scale-100 opacity-100',
      enterActive: 'transition duration-100 ease-out',
      leave: 'transform scale-100 opacity-100',
      leaveTo: 'transform scale-95 opacity-0',
      leaveActive: 'transition duration-75 ease-out'
    }
  }
}
