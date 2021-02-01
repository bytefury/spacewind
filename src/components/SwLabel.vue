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
        style = findByKey(this.variant, this.variantsTheme)
      }

      return style ? style : this.classesTheme
    },
    classesTheme() {
      return this.$theme && this.$theme.SwLabel
        ? { ...this.classes, ...this.$theme.SwLabel.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwLabel
        ? { ...this.variants, ...this.$theme.SwLabel.variants }
        : this.variants
    }
  }
}
</script>
