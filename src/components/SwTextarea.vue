<template>
  <textarea
    v-model="inputValue"
    v-bind="$attrs"
    :class="textAreaStyle"
    :disabled="disabled"
    @input="$emit('input', inputValue)"
    @change="$emit('change', inputValue)"
    @keyup="$emit('keyup', $event)"
    @keydown="$emit('keydown', $event)"
    @blur="onBlur"
    @focus="onFocus"
  />
</template>

<script>
import SwTextarea from '../themes/default/SwTextarea'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwTextarea

export default {
  name: 'SwTextarea',
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
      inputValue: null,
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
  },
  methods: {
    handleInput() {
      this.$emit('input', this.inputValue)
    },
    handleChange() {
      this.$emit('change', this.inputValue)
    },
    handleKeyupEnter() {
      this.$emit('keyup', this.inputValue)
    },
    onBlur(e) {
      this.$emit('blur', e)
      if (this.inputValue !== this.valueWhenFocus) {
        this.$emit('change', this.inputValue)
      }
    },

    onFocus(e) {
      this.$emit('focus', e)
      this.valueWhenFocus = this.inputValue
    }
  }
}
</script>
