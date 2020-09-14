<template>
  <div :class="inputGroupStyle.container">
    <sw-label v-if="label" :class="inputGroupStyle.label">
      {{ label }}
      <span v-show="required" :class="inputGroupStyle.requiredSign"> *</span>
    </sw-label>
    <sw-label
      v-if="variant === 'horizontal' && !label"
      :class="inputGroupStyle.label"
    ></sw-label>
    <div :class="inputGroupStyle.inputContainer">
      <slot></slot>
      <span v-if="error" :class="inputGroupStyle.errorText">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script>
import SwLabel from './SwLabel'
import SwInputGroup from '../themes/default/SwInputGroup'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwInputGroup

export default {
  name: 'SwInputGroup',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    SwLabel
  },
  props: {
    color: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => classes
    },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputGroupStyle() {
      let style = findByKey(this.variant, this.variants)
      return { ...this.classes, ...style }
    }
  }
}
</script>
