<template>
  <main :class="classes">
    <slot />
  </main>
</template>

<script>
import SwPage from '../themes/default/SwPage'
import { installComponent } from '../helpers/utilities'
const { classes } = SwPage

export default {
  name: 'SwPage',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: String,
      default: classes
    }
  }
}
</script>
