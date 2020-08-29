<template>
  <textarea
    ref="textarea"
    v-model="inputValue"
    :rows="rows"
    :cols="cols"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="textAreaStyle"
    :readonly="readonly"
    :required="required"
    :maxlength="maxlength"
    :autofocus="autofocus"
    :wrap="wrap"
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
    variants: {
      type: Object,
      default: () => variants
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    rows: {
      type: [String, Number],
      default: 4
    },
    cols: {
      type: String,
      default: '10'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: undefined
    },
    required: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    autofocus: {
      type: Boolean,
      default: null
    },
    wrap: {
      type: String,
      default: 'soft'
    },
    classes: {
      type: String,
      default: classes
    },
    variant: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      inputValue: this.value,
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
  watch: {
    value() {
      this.inputValue = this.value
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
