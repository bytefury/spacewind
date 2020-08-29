<template>
  <nav>
    <ol :class="classes">
      <slot />
    </ol>
  </nav>
</template>

<script>
import SwBreadcrumb from '../../themes/default/breadcrumb/SwBreadcrumb.js'
import { installComponent } from '../../helpers/utilities'

const { classes } = SwBreadcrumb
export default {
  name: 'SwBreadcrumb',
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
