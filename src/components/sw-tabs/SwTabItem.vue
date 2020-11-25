<template>
  <sw-transition>
    <div v-show="isActive">
      <slot />
    </div>
  </sw-transition>
</template>

<script>
import SwTransition from '../../components/SwTransition'
import { installComponent } from '../../helpers/utilities'

export default {
  name: 'SwTabItem',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    SwTransition
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
