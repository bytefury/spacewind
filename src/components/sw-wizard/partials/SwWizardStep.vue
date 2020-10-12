<template>
  <div :class="classes.stepContainer">
    <div :class="classes.stepHeadingContainer">
      <p :class="classes.stepTitle">
        {{ title }}
      </p>
      <p :class="classes.stepDescription">
        {{ description }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import SwWizard from '../../../themes/default/SwWizard'
const { classes } = SwWizard

export default {
  name: 'SwWizardStep',
  props: {
    description: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    classes: {
      type: Object,
      default: () => classes
    },
    beforeChange: {
      type: Function
    }
  }
}
</script>
