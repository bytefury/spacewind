<template>
  <div :class="classesTheme.container">
    <input
      :id="uniqueId"
      v-model="checkValue"
      :class="classesTheme.switch"
      type="checkbox"
      :disabled="disabled"
      @input="handleInput"
      @change="handleChange"
      @keyup="handleKeyupEnter"
      @blur="handleFocusOut"
    />
    <label :for="uniqueId" :class="classesTheme.label">
      <span class="switch-circle"></span>
    </label>
  </div>
</template>

<script>
import SwSwitch from '../themes/default/SwSwitch'
import { installComponent } from '../helpers/utilities'
const { classes } = SwSwitch
export default {
  name: 'SwSwitch',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    value: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    classes: {
      type: Object,
      default: () => classes
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
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      )
    },
    classesTheme() {
      return this.$theme && this.$theme.SwSwitch
        ? { ...this.classes, ...this.$theme.SwSwitch.classes }
        : this.classes
    }
  },
  watch: {
    value() {
      this.checkValue = this.value
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.checked)
    },
    handleChange() {
      this.$emit('change', this.checkValue)
    },
    handleKeyupEnter() {
      this.$emit('keyup', this.checkValue)
    },
    handleFocusOut() {
      this.$emit('blur', this.checkValue)
    }
  }
}
</script>
