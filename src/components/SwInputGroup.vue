<template>
  <div :class="inputGroupStyle.container">
    <sw-label
      v-if="label"
      :variant="labelVariant"
      :class="inputGroupStyle.label"
    >
      {{ label }}
      <span v-show="required" :class="inputGroupStyle.requiredSign"> *</span>
      <v-popover
        v-if="tooltip"
        :trigger="tooltipTrigger"
        :show="tooltipShow"
        :placement="tooltipPlacement"
        :popover-class="inputGroupStyle.popoverClass"
        :popover-base-class="inputGroupStyle.popoverBaseClass"
        :popover-wrapper-class="inputGroupStyle.popoverWrapperClass"
        :popover-arrow-class="inputGroupStyle.popoverArrowClass"
        :popover-inner-class="inputGroupStyle.popoverInnerClass"
        :open-class="inputGroupStyle.openClass"
        :class="inputGroupStyle.tooltipContainer"
      >
        <div :class="inputGroupStyle.tooltipIconContainer">
          <slot v-if="hasTooltipIconSlot" name="tooltipIcon" />
          <svg
            v-else
            :class="inputGroupStyle.tooltipIcon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <template slot="popover">
          <span :class="inputGroupStyle.tooltip">
            {{ tooltip }}
          </span>
        </template>
      </v-popover>
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
    },
    tooltipTrigger: {
      type: String,
      default: 'hover'
    },
    tooltipShow: {
      type: Boolean,
      default: false
    },
    tooltipPlacement: {
      type: String,
      default: 'auto'
    },
    tooltip: {
      type: String,
      default: null
    },
    labelVariant: {
      type: String,
      default: null
    }
  },
  computed: {
    inputGroupStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    hasTooltipIconSlot() {
      return !!this.$slots.tooltipIcon
    },
    classesTheme() {
      return this.$theme && this.$theme.SwInputGroup
        ? { ...this.classes, ...this.$theme.SwInputGroup.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwInputGroup
        ? { ...this.variants, ...this.$theme.SwInputGroup.variants }
        : this.variants
    }
  }
}
</script>
