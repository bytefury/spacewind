<template>
  <div :class="classes.divider" />
</template>

<script>
import SwDropdown from '../../themes/default/SwDropdown'
const { classes } = SwDropdown

export default {
  name: 'SwDropdownDivider',
  props: {
    variants: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      classes: classes
    }
  }
}
</script>
