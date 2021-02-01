<template>
  <nav>
    <ol :class="classesTheme.listContainer">
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
  computed: {
    classesTheme() {
      return this.$theme && this.$theme.SwBreadcrumb
        ? { ...this.classes, ...this.$theme.SwBreadcrumb.classes }
        : this.classes
    }
  },
  mounted() {
    this.breadcrumbItems = this.$children
    this.setChilds()
  },
  methods: {
    setChilds() {
      this.breadcrumbItems.forEach(item => {
        item.classes = this.classesTheme
      })
    }
  }
}
</script>
