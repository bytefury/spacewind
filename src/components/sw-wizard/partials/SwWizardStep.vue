<template>
  <div :class="classes.stepContainer">
    <slot></slot>
  </div>
</template>

<script>
import SwWizard from '../../../themes/default/SwWizard'
const { classes } = SwWizard

export default {
  name: 'SwWizardStep',
  props: {
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
