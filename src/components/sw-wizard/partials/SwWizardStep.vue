<template>
  <div :class="classesTheme.stepContainer">
    <div v-if="title || description" :class="classesTheme.stepHeadingContainer">
      <p v-if="title" :class="classesTheme.stepTitle">
        {{ title }}
      </p>
      <p v-if="description" :class="classesTheme.stepDescription">
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
  },
  computed: {
    classesTheme() {
      return this.$theme && this.$theme.SwWizard
        ? { ...this.classes, ...this.$theme.SwWizard.classes }
        : this.classes
    }
  }
}
</script>
