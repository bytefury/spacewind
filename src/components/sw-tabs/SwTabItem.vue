<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
import { installComponent } from '../../helpers/utilities'

export default {
  name: 'SwTabItem',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    route: {
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
      isActive: false
    }
  }
}
</script>
