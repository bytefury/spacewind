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
        style = findByKey(this.variant, this.variantsTheme)
      }
      return { ...this.classesTheme, ...style }
    },
    hasHeaderSlot() {
      return !!this.$slots['header']
    },
    hasFooterSlot() {
      return !!this.$slots['footer']
    },
    classesTheme() {
      return this.$theme && this.$theme.SwCard
        ? { ...this.classes, ...this.$theme.SwCard.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwCard
        ? { ...this.variants, ...this.$theme.SwCard.variants }
        : this.variants
    }
  }
}
</script>
