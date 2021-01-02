<template>
  <sw-custom-tag
    :tag="tagName"
    :class="getDropdownItemStyle.item"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </sw-custom-tag>
</template>

<script>
import SwDropdown from '../../themes/default/SwDropdown'
import SwCustomTag from '../SwCustomTag'
import { installComponent } from '../../helpers/utilities'
const { classes } = SwDropdown

export default {
  name: 'SwDropdownItem',
  components: {
    SwCustomTag
  },
  inheritAttrs: false,
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    tagName: {
      type: String,
      required: false,
      default: 'div'
    }
  },
  data() {
    return {
      theme: null
    }
  },
  computed: {
    getDropdownItemStyle() {
      return { ...classes, ...this.theme }
    }
  }
}
</script>
