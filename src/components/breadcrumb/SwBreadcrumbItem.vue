<template>
  <li :class="classes.container">
    <router-link v-if="hasRouteLink" :class="classes.base" :to="to">
      {{ title }}
    </router-link>
    <a :to="to" v-else :class="classes.base">{{ title }}</a>
    <span v-if="!isActive" :class="classes.separator">/</span>
  </li>
</template>

<script>
import SwBreadcrumbItem from '../../themes/default/breadcrumb/SwBreadcrumbItem'
import { installComponent } from '../../helpers/utilities'

const { classes } = SwBreadcrumbItem

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
    isActive: {
      type: Boolean,
      default: false,
      required: false
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
    hasRouteLink() {
      return !!(
        this.$options.components.RouterLink || this.$options.components.NuxtLink
      )
    }
  },
  mounted() {
    console.log(this.hasRouteLink)
  }
}
</script>
