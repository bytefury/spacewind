<template>
  <textarea
    v-bind="$attrs"
    :class="textAreaStyle"
    :disabled="disabled"
    @input="e => $emit('input', e.target.value)"
  />
</template>

<script>
import SwTextarea from '../themes/default/SwTextarea'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwTextarea

export default {
  name: 'SwTextarea',
  inheritAttrs: false,
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: String,
      default: classes
    },
    variant: {
      type: String,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    },
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      valueWhenFocus: null
    }
  },
  computed: {
    isFieldValid() {
      return this.invalid
    },
    textAreaStyle() {
      let style = null
      if (this.variant) {
        style = findByKey(this.variant, this.variants)
      }

      if (this.invalid) {
        style = findByKey('danger', this.variants)
      }

      if (this.disabled) {
        style = findByKey('disabled', this.variants)
      }

      return style ? style : this.classes
    }
  }
}
</script>
