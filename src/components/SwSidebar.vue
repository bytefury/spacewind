<template>
  <div :class="sidebarStyle.container" class="sidebar-left">
    <slot />
  </div>
</template>
<script>
import SwSidebar from '../themes/default/SwSidebar'
const { classes } = SwSidebar
export default {
  props: {
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
    sidebarStyle() {
      return { ...this.classes }
    }
  }
}
</script>
