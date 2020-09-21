<template>
  <footer :class="classes">
    <slot />
  </footer>
</template>

<script>
import SwFooter from '../themes/default/SwFooter'
import { installComponent } from '../helpers/utilities'
const { classes } = SwFooter
export default {
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: String,
      default: () => classes
    }
  }
}
</script>
