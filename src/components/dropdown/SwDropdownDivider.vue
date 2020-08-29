<template>
  <div :class="classes" />
</template>

<script>
import SwDropdownDivider from '../../themes/default/dropdown/SwDropdownDivider'
const { classes } = SwDropdownDivider

export default {
  name: 'SwDropdownDivider',
  props: {
    classes: {
      type: Object,
      default: () => classes
    }
  }
}
</script>
