<template>
  <header :class="classes">
    <slot />
  </header>
</template>
<script>
import SwHeader from '../themes/default/SwHeader'
const { classes } = SwHeader
export default {
  props: {
    classes: {
      type: String,
      default: () => classes
    }
  }
}
</script>
