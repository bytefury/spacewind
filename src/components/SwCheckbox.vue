<template>
  <div :class="checkBoxStyle.container">
    <input
      :id="id"
      type="checkbox"
      v-bind="$attrs"
      :class="inputStyle"
      :checked="shouldBeChecked"
      :value="value"
      @change="updateInput"
      @keyup="e => $emit('keyup', e)"
      @blur="e => $emit('blur', e)"
    />
    <label v-if="label" :for="id" :class="lebelStyle">{{ label }}</label>
  </div>
</template>
<script>
import { findByKey, installComponent } from '../helpers/utilities'
import SwCheckbox from '../themes/default/SwCheckbox'

const { classes, variants, sizes } = SwCheckbox

export default {
  name: 'SwCheckbox',
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    value: {
      type: [Boolean, Number, String]
    },
    modelValue: {
      default: false
    },
    trueValue: {
      default: true
    },
    falseValue: {
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
    size: {
      type: String,
      required: false,
      default: 'default'
    },
    variant: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: [String, Number],
      required: false,
      default: () =>
        `sw_${Math.random()
          .toString(36)
          .substr(2, 9)}`
    }
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }

      return this.modelValue === this.trueValue
    },
    checkBoxStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    lebelStyle() {
      let size = findByKey(this.size, this.sizes)
      return [this.checkBoxStyle.label, size.label]
    },
    inputStyle() {
      let size = findByKey(this.size, this.sizes)
      return [this.checkBoxStyle.input, size.input]
    },
    classesTheme() {
      return this.$theme && this.$theme.SwCheckbox
        ? { ...this.classes, ...this.$theme.SwCheckbox.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwCheckbox
        ? { ...this.variants, ...this.$theme.SwCheckbox.variants }
        : this.variants
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>
