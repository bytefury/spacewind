<template>
  <div :class="getDropdownDividerStyle.divider" />
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
      theme: classes
    }
  },
  computed: {
    getDropdownDividerStyle() {
      let classes = this.classes || {}
      return { ...this.theme, ...classes }
    }
  }
}
</script>
