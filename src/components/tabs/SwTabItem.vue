<template>
  <div v-show="isActive" :class="classes">
    <slot />
  </div>
</template>

<script>
import SwTabs from '../../themes/default/tabs/SwTabItem'
import { installComponent } from '../../helpers/utilities'
const { classes } = SwTabs

export default {
  name: 'SwTabs',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: [String, Array, Object],
      default: () => classes
    },
    href: {
      type: String,
      default: '#'
    },
    route: {
      type: String,
      default: null
    },
    filter: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {
      isActive: this.active
    }
  }
}
</script>
