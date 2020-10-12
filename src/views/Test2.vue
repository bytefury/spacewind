<template>
  <sw-wizard-step
    title="Test 2"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eos suscipit! Optio officia quas provident necessitatibus molestiae doloribus veritatis laboriosam repudiandae facere eligendi esse, neque iste quia enim! Fugiat, voluptatibus!"
  >
    <sw-button @click="$emit('back')">Back</sw-button>&nbsp;
    <sw-button @click="$emit('next')">Next</sw-button>
  </sw-wizard-step>
</template>
<script>
import SwWizardStep from '../components/sw-wizard/partials/SwWizardStep'
import SwButton from '../components/SwButton'
export default {
  components: {
    SwWizardStep,
    SwButton
  }
}
</script>