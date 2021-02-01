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
        style = findByKey(this.variant, this.variantsTheme)
      }

      if (this.invalid) {
        style = findByKey('danger', this.variantsTheme)
      }

      if (this.disabled) {
        style = findByKey('disabled', this.variantsTheme)
      }

      return style ? style : this.classesTheme
    },
    classesTheme() {
      return this.$theme && this.$theme.SwTextarea
        ? { ...this.classes, ...this.$theme.SwTextarea.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwTextarea
        ? { ...this.variants, ...this.$theme.SwTextarea.variants }
        : this.variants
    }
  }
}
</script>
