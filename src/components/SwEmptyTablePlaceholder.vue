<template>
  <div :class="classes.container">
    <div :class="classes.slotContainer">
      <slot></slot>
    </div>
    <div :class="classes.titleContainer">
      <label :class="classes.title">{{ title }}</label>
    </div>
    <div :class="classes.descriptionContainer">
      <label :class="classes.description">
        {{ description }}
      </label>
    </div>
    <div :class="classes.actionsContainer">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
import SwEmptyTablePlaceholder from '../themes/default/SwEmptyTablePlaceholder'
import { installComponent } from '../helpers/utilities'
const { classes } = SwEmptyTablePlaceholder

export default {
  name: 'SwEmptyTablePlaceholder',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    itemIcon: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      default: String
    },
    description: {
      type: String,
      default: String
    },
    classes: {
      type: Object,
      default: () => classes
    }
  }
}
</script>
