<template>
  <transition
    enter-class="duration-300 ease-out"
    enter-active-class="duration-700 translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    enter-to-class="duration-700 translate-y-0 opacity-100 sm:scale-100"
    leave-active-class="duration-300 ease-in"
    leave-class="duration-300 translate-y-0 opacity-100 sm:scale-100"
    leave-to-class="duration-300 translate-y-4 opacity-0 sm:translate-y-0 sm:scale-90"
  >
    <div v-if="isShow" :class="modalStyle.overlayContainer">
      <div :class="modalStyle.base">
        <div :class="modalStyle.header">
          <slot name="header" />
        </div>

        <div :class="modalStyle.body">
          <slot></slot>
        </div>

        <div v-show="hasFooter" :class="modalStyle.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SwModal from '../themes/default/SwModal'
import { installComponent, findByKey } from '../helpers/utilities'
const { classes, variants } = SwModal
export default {
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    isOpen: {
      type: Boolean,
      default: false,
      validator: value => {
        return [true, false].indexOf(value) !== -1
      }
    },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    hasFooter() {
      return this.$slots && this.$slots.footer ? true : false
    },
    hasHeader() {
      return this.$slots && this.$slots.header ? true : false
    },
    modalStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    classesTheme() {
      return this.$theme && this.$theme.SwModal
        ? { ...this.classes, ...this.$theme.SwModal.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwModal
        ? { ...this.variants, ...this.$theme.SwModal.variants }
        : this.variants
    }
  },
  watch: {
    isOpen(val) {
      this.isShow = val
    }
  },
  methods: {
    open() {
      this.isShow = true
    },
    close(e) {
      this.isShow = false
      this.$emit('close', e)
    }
  }
}
</script>
