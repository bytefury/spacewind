<template>
  <div v-click-outside="destroyPopperInstance" :class="dropdownStyle.container">
    <!-- <sw-transition :variant="transitionType"> -->
    <div
      v-show="toggle"
      :id="itemsId"
      :class="dropdownStyle.itemContainer"
      aria-describedby="tooltip"
    >
      <slot />
    </div>
    <!-- </sw-transition> -->
    <div :id="activatorID" role="tooltip" @click="showDropdown">
      <slot name="activator" />
    </div>
  </div>
</template>

<script>
import SwDropdown from '../../themes/default/SwDropdown'
import ClickOutside from 'vue-click-outside'
import { findByKey } from '../../helpers/utilities'
// import SwTransition from '../SwTransition'
import { createPopper } from '@popperjs/core'
const { classes, variants } = SwDropdown

export default {
  name: 'SwDropdown',
  directives: {
    ClickOutside
  },
  components: {
    // SwTransition
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
    position: {
      type: String,
      default: 'bottom-end'
    },
    show: {
      type: Boolean,
      default: false
    },
    transitionType: {
      type: String,
      default: 'dropdown'
    },
    modifiers: {
      type: [Array, Object],
      default: () => [
        {
          name: 'offset',
          options: {
            offset: [0, 4]
          }
        }
      ]
    }
  },
  data() {
    return {
      toggle: this.show,
      children: [],
      activatorID: `sw_activator_id_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      itemsId: `sw_items_id_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      popperInstance: null,
      isOpenThroughShow: false
    }
  },
  computed: {
    dropdownStyle() {
      let style = findByKey(this.variant, this.variantsTheme)

      return { ...this.classesTheme, ...style }
    },
    classesTheme() {
      return this.$theme && this.$theme.SwDropdown
        ? { ...this.classes, ...this.$theme.SwDropdown.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwDropdown
        ? { ...this.variants, ...this.$theme.SwDropdown.variants }
        : this.variants
    }
  },
  watch: {
    show(state) {
      if (state) {
        this.isOpenThroughShow = true
        this.toggle = true
        this.createPopperInstance()
        return true
      }
      this.isOpenThroughShow = false
      this.destroyPopperInstance()
    },
    variant() {
      this.children.forEach(child => {
        child.theme = this.dropdownStyle
      })
    }
  },
  mounted() {
    // this.$children.forEach(child => {
    //   if (child.$children.length) {
    //     this.children = child.$children
    //   }
    // })
    if (this.show) {
      this.createPopperInstance()
    }
    // this.children.forEach(child => {
    //   console.log(child, this.variant, this.dropdownStyle)
    //   child.theme = this.dropdownStyle
    // })
    this.$children.forEach(child => {
      child.theme = this.dropdownStyle
    })

    document.addEventListener(
      'click',
      event => {
        if (event.target.closest(`#${this.itemsId}`))
          this.destroyPopperInstance()
      },
      false
    )
  },
  methods: {
    createPopperInstance() {
      let activator = document.querySelector(`#${this.activatorID}`)
      let items = document.querySelector(`#${this.itemsId}`)
      this.popperInstance = createPopper(activator, items, {
        placement: this.position,
        modifiers: this.modifiers
      })
    },
    destroyPopperInstance() {
      if (this.isOpenThroughShow) {
        this.isOpenThroughShow = false
        return true
      }
      this.toggle = false
      if (this.popperInstance) {
        this.popperInstance.destroy()
        this.popperInstance = null
      }
    },
    showDropdown() {
      if (this.toggle) {
        this.toggle = !this.toggle
        this.popperInstance.destroy()
        this.popperInstance = null
        return true
      }
      this.toggle = !this.toggle
      this.createPopperInstance()
    }
  }
}
</script>
