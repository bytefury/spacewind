<template>
  <money
    v-model="inputValue"
    :class="baseStyle"
    v-bind="currency"
    :disabled="disabled"
    @input="$emit('input', inputValue)"
  />
</template>

<script>
import { Money } from 'v-money'
import SwMoney from '../themes/default/SwMoney'
import { installComponent, findByKey } from '../helpers/utilities'
const { variants, classes } = SwMoney

export default {
  name: 'SwMoney',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    Money
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    currency: {
      type: Object,
      default: null
    },
    classes: {
      type: String,
      default: () => classes
    },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  computed: {
    baseStyle() {
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

      return style ? style : this.classes
    }
  },
  watch: {
    value() {
      this.inputValue = this.value
    }
  }
}
</script>
