<template>
  <div :class="sidebarStyle.container" class="sidebar-left">
    <slot />
  </div>
</template>
<script>
import SwSidebar from '../themes/default/SwSidebar'
import { installComponent } from '../helpers/utilities'
const { classes } = SwSidebar
export default {
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
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
