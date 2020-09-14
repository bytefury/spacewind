<template>
  <div :class="classes.item" @click="onClick">
    <span v-if="title">{{ title }}</span>
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
    title: {
      type: String,
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
