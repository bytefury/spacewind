<template>
  <transition name="fade">
    <div v-show="isShow" :class="filterWrapperStyle.container">
      <slot name="filter-header" />
      <div :class="filterWrapperStyle.body">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import SwFilterWrapper from '../themes/default/SwFilterWrapper'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwFilterWrapper

export default {
  name: 'SwFilterWrapper',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    classes: {
      type: Object,
      default: () => classes
    },
    variant: {
      type: String,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    }
  },
  computed: {
    filterWrapperStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    classesTheme() {
      return this.$theme && this.$theme.SwFilterWrapper
        ? { ...this.classes, ...this.$theme.SwFilterWrapper.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwFilterWrapper
        ? { ...this.variants, ...this.$theme.SwFilterWrapper.variants }
        : this.variants
    }
  }
}
</script>
