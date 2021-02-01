<template>
  <div :class="containerStyle">
    <div v-if="hasLeftIconSlot" :class="inputStyle.leftIconContainer">
      <slot name="leftIcon" />
    </div>
    <p v-if="prefix" :class="inputStyle.prefixContainer">
      <span :class="inputStyle.prefix">{{ prefix }}</span>
    </p>
    <input
      ref="baseInput"
      v-model="inputValue"
      v-bind="$attrs"
      :class="getBaseInputStyle"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      @change="handleChange"
      @keyup="handleKeyupEnter"
      @keydown="handleKeyDownEnter"
      @blur="handleFocusOut"
      @focus="handleFocus"
      @keyup.enter="handleEnter"
    />
    <div v-if="hasRightIconSlot" :class="inputStyle.rightIconContainer">
      <slot name="rightIcon" />
    </div>
  </div>
</template>

<script>
import SwInput from '../themes/default/SwInput'
import { installComponent, findByKey } from '../helpers/utilities'
const { variants, classes } = SwInput
export default {
  name: 'SwInput',
  inheritAttrs: false,
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    prefix: {
      type: String,
      default: null,
      required: false
    },
    classes: {
      type: Object,
      default: () => classes
    },
    value: {
      type: [String, Number],
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
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      inputValue: this.value,
      focus: false,
      isFocused: false
    }
  },
  computed: {
    isFieldValid() {
      return this.invalid
    },
    inputStyle() {
      let style = {}
      if (this.variant) {
        style = findByKey(this.variant, this.variantsTheme)
      }

      if (this.invalid) {
        style = findByKey('danger', this.variantsTheme)
      }

      if (this.disabled) {
        style = findByKey('disabled', this.variantsTheme)
      }

      return { ...this.classesTheme, ...style }
    },
    getBaseInputStyle() {
      if (this.hasLeftIconSlot || this.prefix)
        return this.inputStyle.leftIconInput
      if (this.hasRightIconSlot) return this.inputStyle.rightIconInput
      return this.inputStyle.baseInput
    },
    isAlignLeftIcon() {
      if (this.alignIcon === 'left') {
        return true
      }
      return false
    },
    containerStyle() {
      let style = [this.inputStyle.container]
      if (this.isFocused) {
        style.push(this.inputStyle.containerFocusIn)
      } else {
        style.push(this.inputStyle.containerFocusOut)
      }
      return style
    },
    hasLeftIconSlot() {
      return !!this.$slots.leftIcon
    },
    hasRightIconSlot() {
      return !!this.$slots.rightIcon
    },
    classesTheme() {
      return this.$theme && this.$theme.SwInput
        ? { ...this.classes, ...this.$theme.SwInput.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwInput
        ? { ...this.variants, ...this.$theme.SwInput.variants }
        : this.variants
    }
  },
  watch: {
    value() {
      this.inputValue = this.value
    },
    focus() {
      this.focusInput()
    }
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      if (this.focus) {
        this.$refs.baseInput.focus()
      }
    },
    handleInput() {
      this.$emit('input', this.inputValue)
    },
    handleChange() {
      this.$emit('change', this.inputValue)
    },
    handleKeyupEnter() {
      this.$emit('keyup', this.inputValue)
    },
    handleKeyDownEnter(e) {
      this.$emit('keydown', e, this.inputValue)
    },
    handleFocusOut() {
      this.isFocused = false
      this.$emit('blur', this.inputValue)
    },
    handleFocus() {
      this.isFocused = true
      this.$emit('handleFocus', this.inputValue)
    },
    handleEnter() {
      this.$emit('handleEnter', this.inputValue)
    }
  }
}
</script>
