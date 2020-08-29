<template>
  <hr :class="dividerStyle" />
</template>

<script>
import SwDivider from '../themes/default/SwDivider'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwDivider

export default {
  name: 'SwDivider',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: String,
      default: () => classes
    },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    dividerStyle() {
      let style = null

      if (this.variant) {
        style = findByKey(this.variant, this.variants)
      }
      return style ? style : this.classes
    }
  }
}
</script>
