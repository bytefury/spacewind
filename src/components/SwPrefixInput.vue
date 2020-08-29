<template>
  <div :class="containerStyle" @click="focusInput">
    <p :class="prefixInputStyle.prefix">
      <span class="mr-1">{{ prefix }}</span> -
    </p>
    <input
      ref="basePrefixInput"
      v-model="inputValue"
      :type="type"
      :class="prefixInputStyle.input"
      :disabled="disabled"
      @input="$emit('input', inputValue)"
      @change="$emit('change', inputValue)"
      @keyup="$emit('keyup', inputValue)"
      @keydown="e => $emit('keydown', e, inputValue)"
      @focus="handleFocus"
      @blur="handleFocusOut"
    />
  </div>
</template>

<script>
import SwPrefixInput from '../themes/default/SwPrefixInput'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwPrefixInput

export default {
  name: 'SwPrefixInput',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    prefix: {
      type: String,
      default: null,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number, File],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return ['text', 'number', 'tel', 'url'].indexOf(value) !== -1
      }
    },
    classes: {
      type: Object,
      default: () => classes
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
      inputValue: this.value,
      isFocused: false
    }
  },
  computed: {
    prefixInputStyle() {
      let style = this.classes
      if (this.variant) {
        style = findByKey(this.variant, this.variants)
      }
      if (this.invalid) {
        style = findByKey('danger', this.variants)
      }
      if (this.disabled) {
        style = findByKey('disabled', this.variants)
      }
      return { ...this.classes, ...style }
    },
    containerStyle() {
      let style = [this.prefixInputStyle.container]
      if (this.isFocused) {
        style.push(this.prefixInputStyle.focusIn)
      } else {
        style.push(this.prefixInputStyle.focusOut)
      }
      return style
    },
    inputStyle() {
      return [this.prefixInputStyle.input]
    }
  },
  watch: {
    value() {
      this.inputValue = this.value
    }
  },
  methods: {
    focusInput() {
      this.$refs.basePrefixInput.focus()
    },
    handleFocus() {
      this.isFocused = true
      this.$emit('focus', this.inputValue)
    },
    handleFocusOut() {
      this.isFocused = false
      this.$emit('blur', this.inputValue)
    }
  }
}
</script>
