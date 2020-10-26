<template>
  <div :class="classes.divider" />
</template>

<script>
import SwDropdown from '../../themes/default/SwDropdown'
const { classes } = SwDropdown

export default {
  name: 'SwDropdownDivider',
  data() {
    return {
      classes: classes
    }
  }
}
</script>
