<template>
  <transition name="fade">
    <div v-show="isShow" :class="classes.container">
      <slot name="filter-header" />
      <div :class="classes.body">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import SwFilterWrapper from '../themes/default/SwFilterWrapper'
import { installComponent } from '../helpers/utilities'
const { classes } = SwFilterWrapper

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
    }
  }
}
</script>
