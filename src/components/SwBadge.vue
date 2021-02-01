<template>
  <span :class="currentClass" :style="{ backgroundColor: bgColor, color }">
    <slot />
  </span>
</template>

<script>
import SwBadge from '../themes/default/SwBadge'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwBadge

export default {
  name: 'SwBadge',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      required: false,
      default: ''
    },
    classes: {
      type: String,
      default: classes
    },
    bgColor: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    currentClass() {
      let style = findByKey(this.variant, this.variantsTheme)
      return style ? style : this.classesTheme
    },
    classesTheme() {
      return this.$theme && this.$theme.SwBadge
        ? { ...this.classes, ...this.$theme.SwBadge.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwBadge
        ? { ...this.variants, ...this.$theme.SwBadge.variants }
        : this.variants
    }
  }
}
</script>
