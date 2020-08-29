<template>
  <label :class="labelStyle">
    <slot />
  </label>
</template>

<script>
import SwLabel from '../themes/default/SwLabel'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwLabel

export default {
  name: 'SwLabel',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: String,
      default: classes
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
    labelStyle() {
      let style = null

      if (this.variant) {
        style = findByKey(this.variant, this.variants)
      }

      return style ? style : this.classes
    }
  }
}
</script>
