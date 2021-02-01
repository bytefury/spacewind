<template>
  <div v-click-outside="clickOutsideMenu" :class="classesTheme.container">
    <div :class="classesTheme.activator" @click="toggleSearchMenu">
      <slot name="activator" />
    </div>
    <transition
      enter-class="duration-200 ease-out"
      enter-active-class="duration-300 translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="duration-300 translate-y-0 opacity-100 sm:scale-100"
      leave-active-class="duration-200 ease-in"
      leave-class="duration-200 translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="duration-200 translate-y-4 opacity-0 sm:translate-y-0 sm:scale-90"
    >
      <div v-if="showMenu" :class="baseStyle">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import SwPopup from '../themes/default/SwPopup'
import ClickOutside from 'vue-click-outside'
import { installComponent } from '../helpers/utilities'
const { classes } = SwPopup

export default {
  name: 'SwPopup',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  directives: {
    ClickOutside
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
      return this.classesTheme.above
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
      let style = [this.classesTheme.base]
      if (this.isAbove) {
        style.push(this.classesTheme.above)
      }
      return style
    },
    classesTheme() {
      return this.$theme && this.$theme.SwPopup
        ? { ...this.classes, ...this.$theme.SwPopup.classes }
        : this.classes
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
