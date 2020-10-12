<template>
  <div :class="dropdownStyle.container" v-click-outside="clickOutsideMenu">
    <div @click.stop.prevent="showDropdown" :class="dropdownStyle.activator">
      <slot name="activator" />
    </div>
    <sw-transition :variant="transitionType">
      <div
        v-show="toggle"
        ref="dropdownItems"
        :class="itemContainerClasses"
        :style="itemContainerStyle"
        @click="closeOnSelectDropdownItem"
      >
        <slot />
      </div>
    </sw-transition>
  </div>
</template>

<script>
import SwDropdown from '../../themes/default/SwDropdown'
import { findByKey } from '../../helpers/utilities'
import vClickOutside from 'v-click-outside'
import SwTransition from '../SwTransition'
const { classes, variants, positions } = SwDropdown

export default {
  name: 'SwDrodown',
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    SwTransition
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
    positions: {
      type: Object,
      default: () => positions
    },
    position: {
      type: String,
      default: 'bottom-right'
    },
    maxHeight: {
      type: String,
      default: '200px'
    },
    show: {
      type: Boolean,
      default: false
    },
    transitionType: {
      type: String,
      default: 'dropdown'
    }
  },
  data() {
    return {
      toggle: this.show,
      preferredOpenDirection: 'below',
      optimizedHeight: null,
      windowHeight: window.innerHeight
    }
  },
  computed: {
    isAbove() {
      if (this.position === 'top-right' || this.position === 'top-left') {
        return true
      } else if (
        (this.position === 'bottom-right' || this.position === 'bottom-left') &&
        this.preferredOpenDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    itemContainerStyle() {
      return this.isAbove
        ? {
            bottom: '100%',
            minWidth: '10rem',
            backgroundClip: 'padding-box',
            maxHeight: this.maxHeight
          }
        : {
            minWidth: '10rem',
            backgroundClip: 'padding-box',
            maxHeight: this.maxHeight
          }
    },
    dropdownStyle() {
      let style = findByKey(this.variant, this.variants)

      return { ...this.classes, ...style }
    },
    itemContainerClasses() {
      let style = this.dropdownStyle

      let itemsContainerPosition = findByKey(this.position, this.positions)

      return `${style.itemContainer} ${itemsContainerPosition}`
    }
  },
  watch: {
    isShow(val) {
      this.toggle = val
    },
    windowHeight() {
      this.adjustPosition()
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
    },
    adjustPosition() {
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top
      const spaceBelow =
        window.innerHeight - this.$el.getBoundingClientRect().bottom
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight

      if (
        (hasEnoughSpaceBelow || spaceBelow > spaceAbove) &&
        (this.position === 'bottom-left' || this.position === 'bottom-right')
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
