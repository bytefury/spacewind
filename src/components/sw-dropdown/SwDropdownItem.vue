<template>
  <sw-custom-tag
    :tag="tagName"
    :class="classes.item"
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
  inheritAttrs: false,
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    icon: {
      type: [String, Array],
      default: null
    },
    link: {
      type: [String, Object],
      default: null
    },
    tagName: {
      type: String,
      required: false,
      default: 'div'
    }
  },
  components: {
    SwCustomTag
  }
}
</script>
