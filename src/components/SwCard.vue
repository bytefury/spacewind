<template>
  <div :class="cardStyle.container">
    <div v-if="hasHeaderSlot" :class="cardStyle.header">
      <slot name="header" />
    </div>
    <div :class="cardStyle.body">
      <slot />
    </div>
    <div v-if="hasFooterSlot" :class="cardStyle.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import SwCard from '../themes/default/SwCard'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwCard

export default {
  name: 'SwCard',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      default: null
    }
  },
  computed: {
    cardStyle() {
      let style = {}
      if (this.variant) {
        style = findByKey(this.variant, this.variants)
      }
      return { ...this.classes, ...style }
    },
    hasHeaderSlot() {
      return !!this.$slots['header']
    },
    hasFooterSlot() {
      return !!this.$slots['footer']
    }
  }
}
</script>
