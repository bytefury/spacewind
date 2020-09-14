<template>
  <nav>
    <ol :class="classes.listContainer">
      <slot />
    </ol>
  </nav>
</template>

<script>
import SwBreadcrumb from '../../themes/default/SwBreadcrumb.js'
import { installComponent } from '../../helpers/utilities'

const { classes } = SwBreadcrumb
export default {
  name: 'SwBreadcrumb',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    }
  },
  data() {
    return {
      breadcrumbItems: []
    }
  },
  mounted() {
    this.breadcrumbItems = this.$children
    this.setChilds()
  },
  methods: {
    setChilds() {
      this.breadcrumbItems.forEach(item => {
        item.classes = this.classes
      })
    }
  }
}
</script>
