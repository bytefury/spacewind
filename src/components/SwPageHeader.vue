<template>
  <div :class="classes.container">
    <div>
      <h3 :class="classes.pageTitle">
        {{ title }}
      </h3>
      <slot name="breadcrumbs" />
    </div>
    <div :class="classes.actionsContainer">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
import SwPageHeader from '../themes/default/SwPageHeader'
import { installComponent } from '../helpers/utilities'
const { classes } = SwPageHeader

export default {
  name: 'SwPageHeader',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    title: {
      type: String,
      default: null,
      required: true
    },
    classes: {
      type: Object,
      default: () => classes
    }
  }
}
</script>
