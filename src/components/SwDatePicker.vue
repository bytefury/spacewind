<template>
  <div :class="datepickerStyle.container">
    <svg
      v-if="calendarButton && !hasIconSlot"
      viewBox="0 0 20 20"
      fill="currentColor"
      :class="datepickerStyle.icon"
      @click="$refs.BaseDatepicker.fp.open()"
    >
      <path
        fill-rule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <slot v-if="calendarButton && hasIconSlot" name="icon" />
    <flatpickr
      ref="BaseDatepicker"
      v-bind="$attrs"
      :disabled="disabled"
      :class="datepickerStyle.datepicker"
      v-on="$listeners"
    />
  </div>
</template>
<script>
import Flatpickr from 'vue-flatpickr-component'
import SwDatePicker from '../themes/default/SwDatePicker'
import 'flatpickr/dist/flatpickr.css'
import { installComponent, findByKey } from '../helpers/utilities'

const { classes, variants } = SwDatePicker

export default {
  name: 'SwDatePicker',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    Flatpickr
  },
  inheritAttrs: false,
  props: {
    calendarButton: {
      type: Boolean,
      default: true
    },
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
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
    variant: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    datepickerStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      if (this.invalid) {
        style = findByKey('invalid', this.variantsTheme)
      }
      if (this.disabled) {
        style = findByKey('disabled', this.variantsTheme)
      }
      return { ...this.classesTheme, ...style }
    },
    hasIconSlot() {
      return !!this.$slots.icon
    },
    classesTheme() {
      return this.$theme && this.$theme.SwDatePicker
        ? { ...this.classes, ...this.$theme.SwDatePicker.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwDatePicker
        ? { ...this.variants, ...this.$theme.SwDatePicker.variants }
        : this.variants
    }
  }
}
</script>
