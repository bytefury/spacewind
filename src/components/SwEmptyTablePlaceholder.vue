<template>
  <div :class="classesTheme.container">
    <div :class="classesTheme.slotContainer">
      <slot></slot>
    </div>
    <div :class="classesTheme.titleContainer">
      <label :class="classesTheme.title">{{ title }}</label>
    </div>
    <div :class="classesTheme.descriptionContainer">
      <label :class="classesTheme.description">
        {{ description }}
      </label>
    </div>
    <div :class="classesTheme.actionsContainer">
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
  },
  computed: {
    classesTheme() {
      return this.$theme && this.$theme.SwEmptyTablePlaceholder
        ? { ...this.classes, ...this.$theme.SwEmptyTablePlaceholder.classes }
        : this.classes
    }
  }
}
</script>
