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
      let style = findByKey(this.variant, this.variants)
      return style ? style : this.classes
    }
  }
}
</script>
