<template>
  <div :class="classes.item" @click="onClick">
    <slot />
  </div>
</template>

<script>
import SwDropdown from '../../themes/default/SwDropdown'
const { classes } = SwDropdown

export default {
  name: 'SwDropdownItem',
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    icon: {
      type: [String, Array],
      default: null
    },
    link: {
      type: [String, Object],
      default: null
    }
  },
  methods: {
    onClick() {
      if (this.link) {
        this.$router.push(this.link)
        return true
      }
      this.$emit('onClick')
    }
  }
}
</script>
