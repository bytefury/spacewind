<template>
  <transition
    :enter-active-class="transitionStyle.enterActive"
    :leave-active-class="transitionStyle.leave"
    :enter-class="transitionStyle.enter"
    :enter-to-class="transitionStyle.enterTo"
    :leave-class="transitionStyle.leave"
    :leave-to-class="transitionStyle.leaveTo"
  >
    <slot />
  </transition>
</template>

<script>
import { installComponent, findByKey } from '../helpers/utilities'
import SwTransition from '../themes/default/SwTransition'
const { classes, variants } = SwTransition

export default {
  name: 'SwTransition',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    variant: {
      type: String,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
    transitionStyle() {
      let style = findByKey(this.variant, this.variantsTheme)

      return { ...this.classesTheme, ...style }
    },
    classesTheme() {
      return this.$theme && this.$theme.SwTransition
        ? { ...this.classes, ...this.$theme.SwTransition.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwTransition
        ? { ...this.variants, ...this.$theme.SwTransition.variants }
        : this.variants
    }
  }
}
</script>
