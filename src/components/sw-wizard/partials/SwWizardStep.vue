<template>
  <div :class="classes.stepContainer">
    <div v-if="title || description" :class="classes.stepHeadingContainer">
      <p v-if="title" :class="classes.stepTitle">
        {{ title }}
      </p>
      <p v-if="description" :class="classes.stepDescription">
        {{ description }}
      </p>
    </div>
    <slot />
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
    }
  }
}
</script>
