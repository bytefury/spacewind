<template>
  <div :class="checkBoxStyle.container">
    <input
      type="checkbox"
      v-model="checkValue"
      :id="uniqueId"
      :class="inputStyle"
      :value="value"
      :name="name"
      @input="handleInput"
      @change="handleChange"
      @keyup="handleKeyupEnter"
      @blur="handleFocusOut"
    />
    <label v-if="label" :for="uniqueId" :class="lebelStyle">{{ label }}</label>
  </div>
</template>
<script>
import { findByKey, installComponent } from '../helpers/utilities'
import SwCheckbox from '../themes/default/SwCheckbox'

const { classes, variants, sizes } = SwCheckbox

export default {
  name: 'SwCheckbox',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    value: {
      type: [Boolean, Number, Array, String],
      required: false,
      default: false
    },
    classes: {
      type: Object,
      default: () => classes
    },
    variants: {
      type: Object,
      default: () => variants
    },
    sizes: {
      type: Object,
      default: () => sizes
    },
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: String
    },
    size: {
      type: String,
      required: false,
      default: 'default'
    },
    variant: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      id: null,
      checkValue: this.value
    }
  },
  computed: {
    uniqueId() {
      return (
        'sw_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      )
    },
    checkBoxStyle() {
      let style = findByKey(this.variant, this.variants)
      return { ...this.classes, ...style }
    },
    lebelStyle() {
      let size = findByKey(this.size, this.sizes)
      return [this.checkBoxStyle.label, size.label]
    },
    inputStyle() {
      let size = findByKey(this.size, this.sizes)
      return [this.checkBoxStyle.input, size.input]
    }
  },
  watch: {
    value() {
      this.checkValue = this.value
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.checked, e)
    },
    handleChange(e) {
      this.$emit('change', this.checkValue, e)
    },
    handleKeyupEnter(e) {
      this.$emit('keyup', this.checkValue, e)
    },
    handleFocusOut(e) {
      this.$emit('blur', this.checkValue, e)
    }
  }
}
</script>
