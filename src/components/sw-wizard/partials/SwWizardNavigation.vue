<template>
  <div :class="classes.navigationContainer">
    <div v-if="steps > 0" :class="classes.progressesContainer">
      <div :class="classes.progressesSubContainer">
        <div
          v-for="(number, index) in steps"
          :key="index"
          :class="stepStyle(number)"
          @click="$emit('update:currentStep', index + 1)"
        >
          <svg
            v-if="currentStep > number"
            :class="classes.icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            @click="$emit('update:currentStep', index + 1)"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SwWizard from '../../../themes/default/SwWizard'
const { classes } = SwWizard
export default {
  props: {
    currentStep: {
      type: Number,
      default: null
    },
    steps: {
      type: Number,
      default: null
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  methods: {
    stepStyle(number) {
      if (this.currentStep === number) {
        return [this.classes.currentStep, this.classes.progress]
      }
      if (this.currentStep > number) {
        return [this.classes.previousStep, this.classes.progress]
      }
      if (this.currentStep < number) {
        return [this.classes.nextStep, this.classes.progress]
      }
      return [this.classes.progress]
    }
  }
}
</script>
