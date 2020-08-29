<template>
  <div :class="classes.base" @click="onClick">
    <font-awesome-icon v-if="icon" :icon="icon" :class="classes.icon" />
    <span v-if="title">{{ title }}</span>
  </div>
</template>

<script>
import SwDropdownItem from '../../themes/default/dropdown/SwDropdownItem'
const { classes } = SwDropdownItem

export default {
  name: 'SwDropdownItem',
  props: {
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
    },
    classes: {
      type: Object,
      default: () => classes
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
