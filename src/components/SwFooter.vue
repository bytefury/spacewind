<template>
  <footer :class="classes">
    <slot />
  </footer>
</template>

<script>
import SwFooter from '../themes/default/SwFooter'
const { classes } = SwFooter
export default {
  props: {
    classes: {
      type: String,
      default: () => classes
    }
  }
}
</script>
