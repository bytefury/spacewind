<template>
  <div :class="wizardStyle.wizardContainer">
    <slot name="nav">
      <wizard-navigation
        :current-step.sync="getCurrentStep"
        :steps="steps"
        :classes="wizardStyle"
      />
    </slot>
    <div :class="wizardStyle.wizardStepsContainer">
      <slot />
    </div>
  </div>
</template>
<script>
import WizardNavigation from './partials/SwWizardNavigation'
import SwWizard from '../../themes/default/SwWizard'
import { installComponent, findByKey } from '../../helpers/utilities'
const { classes, variants } = SwWizard

export default {
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    WizardNavigation
  },
  props: {
    currentStep: {
      type: Number,
      default: 0
    },
    steps: {
      type: Number,
      default: 0
    },
    classes: {
      type: Object,
      default: () => classes
    },
    variant: {
      type: String,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    },
    allowNavigationRedirect: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wizardStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    classesTheme() {
      return this.$theme && this.$theme.SwWizard
        ? { ...this.classes, ...this.$theme.SwWizard.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwWizard
        ? { ...this.variants, ...this.$theme.SwWizard.variants }
        : this.variants
    },
    getCurrentStep: {
      get: function() {
        return this.currentStep
      },
      set: function(newValue) {
        if (this.allowNavigationRedirect) {
          this.$emit('update:currentStep', newValue)
        }
      }
    }
  }
}
</script>
