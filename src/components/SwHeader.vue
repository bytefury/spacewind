<template>
  <header :class="classes">
    <slot />
  </header>
</template>
<script>
import SwHeader from '../themes/default/SwHeader'
import { installComponent } from '../helpers/utilities'
const { classes } = SwHeader
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
