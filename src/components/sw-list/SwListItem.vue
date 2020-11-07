<template>
  <sw-custom-tag
    :class="itemContainerStyle"
    :tag="tagName"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span v-if="hasIconSlot" :class="listItemStyle.iconContainer">
      <slot name="icon" />
    </span>
    <span :class="listItemStyle.title">{{ title }}</span>
  </sw-custom-tag>
</template>
<script>
import { findByKey, installComponent } from '../../helpers/utilities'
import SwCustomTag from '../SwCustomTag'

export default {
  name: 'SwListItem',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    SwCustomTag
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    active: {
      type: Boolean,
      required: false
    },
    tagName: {
      type: String,
      required: false,
      default: 'a'
    }
  },
  data() {
    return {
      variants: null,
      classes: null,
      variant: null,
      isLoading: true,
      isListGroupItem: false
    }
  },
  computed: {
    hasIconSlot() {
      return !!this.$slots.icon
    },
    listItemStyle() {
      let style = findByKey(this.variant, this.variants)
      if (style && this.active) {
        let data = {}
        if (this.classes && this.classes.active) {
          data = { ...this.classes, ...this.classes.active }
        }
        return { ...data, ...style.active }
      }

      if ((style == undefined || style == null) && this.active) {
        if (this.classes && this.classes.active) {
          return { ...this.classes, ...this.classes.active }
        }
      }
      return { ...this.classes, ...style }
    },
    itemContainerStyle() {
      if (this.isListGroupItem) {
        return this.listItemStyle.listGroup.itemContainer
      }
      return this.listItemStyle.itemContainer
    }
  }
}
</script>
