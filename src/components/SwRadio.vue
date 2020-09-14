<template>
  <div :class="checkBoxStyle.container">
    <input
      type="radio"
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
    <label :for="uniqueId" :class="lebelStyle">{{ label }}</label>
  </div>
</template>
<script>
import { findByKey } from '../helpers/utilities'
import SwRadio from '../themes/default/SwRadio'
const { classes, variants, sizes } = SwRadio
export default {
  name: 'SwRadio',
  props: {
    value: {
      type: [Boolean, Number, String],
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
      default: String
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
      let classes = []
      let size = findByKey(this.size, this.sizes)
      let style = findByKey(this.variant, this.variants)

      if (style) {
        classes.push(style.label)
      } else {
        classes.push(this.checkBoxStyle.label)
      }

      classes.push(size.label)
      return classes
    },
    inputStyle() {
      let classes = []
      let size = findByKey(this.size, this.sizes)
      let style = findByKey(this.variant, this.variants)

      if (style) {
        classes.push(style.input)
      } else {
        classes.push(this.checkBoxStyle.input)
      }

      classes.push(size.input)
      return classes
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
