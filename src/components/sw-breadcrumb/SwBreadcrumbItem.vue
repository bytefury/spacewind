<template>
  <li :class="classes.itemContainer">
    <router-link v-if="hasRouteLink" :class="classes.base" :to="to">
      {{ title }}
    </router-link>
    <a v-else :href="to" :class="classes.base">{{ title }}</a>
    <span v-if="!active" :class="classes.separator">/</span>
  </li>
</template>

<script>
import { installComponent } from '../../helpers/utilities'

export default {
  name: 'SwBreadcrumbItem',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    title: {
      type: String,
      default: String
    },
    to: {
      type: String,
      default: '#'
    },
    active: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      classes: {
        itemContainer: '',
        base: '',
        separator: ''
      }
    }
  },
  computed: {
    hasRouteLink() {
      return !!this.$router
    }
  }
}
</script>
