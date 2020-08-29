<template>
  <span :class="currentClass">
    {{ title }}
  </span>
</template>

<script>
import SwBadge from '../themes/default/SwBadge'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwBadge

export default {
  name: 'SwBadge',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    variants: {
      type: Object,
      default: () => variants
    },
    type: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    classes: {
      type: String,
      default: classes
    }
  },
  computed: {
    currentClass() {
      let classes = []
      let style = findByKey(this.type, this.variants)
      classes.push(style ? style : this.classes)

      return classes
    }
  }
}
</script>
