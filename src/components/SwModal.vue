<template>
  <transition
    enter-class="duration-300 ease-out"
    enter-active-class="duration-700 translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    enter-to-class="duration-700 translate-y-0 opacity-100 sm:scale-100"
    leave-active-class="duration-300 ease-in"
    leave-class="duration-300 translate-y-0 opacity-100 sm:scale-100"
    leave-to-class="duration-300 translate-y-4 opacity-0 sm:translate-y-0 sm:scale-90"
  >
    <div v-if="isShow" :class="classes.overlayContainer">
      <span :class="classes.centering"></span>&#8203;

      <div :class="classes.base">
        <div :class="classes.header">
          <slot name="header" />
        </div>

        <div :class="classes.body">
          <slot></slot>
        </div>

        <div v-show="hasFooter" :class="classes.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SwModal from '../themes/default/SwModal'
import { installComponent } from '../helpers/utilities'
const { classes } = SwModal
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
