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
      let style = this.classesTheme

      if (this.variant) {
        style = findByKey(this.variant, this.variantsTheme)
      }
      return style
    },
    classesTheme() {
      return this.$theme && this.$theme.SwDivider
        ? { ...this.classes, ...this.$theme.SwDivider.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwDivider
        ? { ...this.variants, ...this.$theme.SwDivider.variants }
        : this.variants
    }
  }
}
</script>
