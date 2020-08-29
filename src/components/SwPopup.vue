<template>
  <div v-click-outside="clickOutsideMenu" :class="classes.container">
    <div :class="classes.activator" @click="toggleSearchMenu">
      <slot name="activator" />
    </div>
    <transition name="fade">
      <div v-if="showMenu" :class="baseStyle">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import SwPopup from '../themes/default/SwPopup'
import vClickOutside from 'v-click-outside'
import { installComponent } from '../helpers/utilities'
const { classes } = SwPopup

export default {
  name: 'SwPopup',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    toggle: {
      type: Boolean,
      default: true
    },
    openDirection: {
      type: String,
      default: ''
    },
    maxHeight: {
      type: Number,
      default: 180
    }
  },
  data() {
    return {
      showMenu: false,
      preferredOpenDirection: 'below',
      optimizedHeight: null
    }
  },
  computed: {
    aboveStyle() {
      return this.classes.above
    },
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
    baseStyle() {
      let style = [this.classes.base]
      if (this.isAbove) {
        style.push(this.classes.above)
      }
      return style
    }
  },
  methods: {
    toggleSearchMenu() {
      this.adjustPosition()
      if (this.toggle) {
        this.showMenu = !this.showMenu
      } else {
        this.showMenu = true
      }
    },
    clickOutsideMenu() {
      this.showMenu = false
    },
    open() {
      this.showMenu = true
    },
    close() {
      this.showMenu = false
    },
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
        this.optimizedHeight = Math.min(spaceBelow - 20, this.maxHeight)
      } else {
        this.preferredOpenDirection = 'above'
        this.optimizedHeight = Math.min(spaceAbove - 20, this.maxHeight)
      }
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
