<template>
  <div :class="radioButtonStyle.container">
    <input
      type="radio"
      :class="inputStyle"
      :id="id"
      :checked="shouldBeChecked"
      :value="value"
      v-bind="$attrs"
      @change="updateInput"
      @keyup="e => $emit('keyup', e)"
      @blur="e => $emit('blur', e)"
    />
    <label v-if="label" :for="id" :class="lebelStyle">{{ label }}</label>
  </div>
</template>
<script>
import { installComponent, findByKey } from '../helpers/utilities'
import SwRadio from '../themes/default/SwRadio'

const { classes, variants, sizes } = SwRadio

export default {
  name: 'SwRadio',
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
      type: [Boolean, Number, String],
      required: false,
      default: false
    },
    modelValue: {
      default: ''
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
    radioButtonStyle() {
      let style = findByKey(this.variant, this.variants)
      return { ...this.classes, ...style }
    },
    lebelStyle() {
      let size = findByKey(this.size, this.sizes)
      return [this.radioButtonStyle.label, size.label]
    },
    inputStyle() {
      let size = findByKey(this.size, this.sizes)
      return [this.radioButtonStyle.input, size.input]
    },
    shouldBeChecked() {
      return this.modelValue == this.value
    }
  },
  methods: {
    updateInput() {
      this.$emit('change', this.value)
    }
  }
}
</script>
