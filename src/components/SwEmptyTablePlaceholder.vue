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
    <div :class="classes.buttonContainer">
      <router-link
        v-if="isARouterLink"
        slot="item-title"
        :to="to"
        :class="classes.button"
      >
        {{ buttonTitle }}
      </router-link>
      <a v-else slot="item-title" :href="to" :class="classes.button">
        {{ buttonTitle }}</a
      >
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
    to: {
      type: [String, Object],
      default: undefined
    },
    buttonTitle: {
      type: String,
      default: String
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
    isARouterLink() {
      return this.to !== undefined && this.isRouterLinkComponentAvailable
    }
  }
}
</script>
