<template>
  <div :class="dropdownStyle.container" v-click-outside="clickOutsideMenu">
    <div @click.stop.prevent="showDropdown" :class="dropdownStyle.activator">
      <slot name="activator" />
    </div>
    <transition :enter-active-class="dropdownStyle.animation">
      <div
        v-show="toggle"
        ref="dropdownItems"
        :class="dropdownStyle.itemContainer"
        :style="itemContainerStyle"
        @click="closeOnSelectDropdownItem"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import SwDropdown from '../../themes/default/SwDropdown'
import { findByKey } from '../../helpers/utilities'
import vClickOutside from 'v-click-outside'
const { classes, variants } = SwDropdown

export default {
  name: 'SwDrodown',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    variant: {
      type: String,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    },
    classes: {
      type: Object,
      default: () => classes
    },
    openDirection: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: Number,
      default: 180
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      toggle: this.isShow,
      preferredOpenDirection: 'below',
      optimizedHeight: null
    }
  },
  computed: {
    isAbove() {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
        this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    itemContainerStyle() {
      return this.isAbove
        ? { bottom: '100%', minWidth: '10rem', backgroundClip: 'padding-box' }
        : { minWidth: '10rem', backgroundClip: 'padding-box' }
    },
    dropdownStyle() {
      let dir = this.variant

      if (this.isAbove) {
        dir = this.variant ? 'above-' + this.variant : 'above'
      }

      let style = findByKey(dir, this.variants)

      return { ...this.classes, ...style }
    }
  },
  watch: {
    isShow(val) {
      this.toggle = val
    }
  },
  methods: {
    adjustPosition() {
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top
      const spaceBelow =
        window.innerHeight - this.$el.getBoundingClientRect().bottom
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight

      if (
        hasEnoughSpaceBelow ||
        spaceBelow > spaceAbove ||
        this.openDirection === 'below' ||
        this.openDirection === 'bottom'
      ) {
        this.preferredOpenDirection = 'below'
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight)
      } else {
        this.preferredOpenDirection = 'above'
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight)
      }
    },
    clickOutsideMenu() {
      this.toggle = false
    },
    closeOnSelectDropdownItem() {
      if (this.closeOnSelect === false) {
        this.toggle = true
      } else {
        this.toggle = false
      }
    },
    showDropdown() {
      this.adjustPosition()
      this.toggle = !this.toggle
    }
  }
}
</script>
