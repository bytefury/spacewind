<template>
  <sw-custom-tag
    :tag="getRenderElement"
    :class="buttonStyle"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div v-if="isLoading" :class="iconStyle.loadingIconContainer">
      <slot v-if="hasLoaderSlot" name="loader" />
      <svg
        v-else
        :class="loadingIconStyle"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <slot />
  </sw-custom-tag>
</template>

<script>
import SwButton from '../themes/default/SwButton'
import { installComponent, findByKey } from '../helpers/utilities'
import SwCustomTag from './SwCustomTag'
const { classes, variants, sizes } = SwButton

export default {
  name: 'SwButton',
  components: {
    SwCustomTag
  },
  inheritAttrs: false,
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    tagName: {
      type: String,
      default: 'button'
    },
    classes: {
      type: Object,
      default: () => classes
    },
    size: {
      type: String,
      required: false,
      default: 'md'
    },
    sizes: {
      type: Object,
      default: () => sizes
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    variant: {
      type: String,
      required: false,
      default: 'primary'
    },
    variants: {
      type: Object,
      default: () => variants
    }
  },
  computed: {
    isAnIntertiaLink() {
      return this.href !== undefined && this.isInertiaLinkComponentAvailable
    },
    isARouterLink() {
      return !!this.$router
    },
    getRenderElement() {
      if (this.to) {
        if (this.isARouterLink) {
          return 'router-link'
        }

        if (this.isAnIntertiaLink) {
          return this.$options.components.InertiaLink
        }
      }

      if (this.href) {
        return 'a'
      }

      return this.tagName
    },
    iconStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    buttonStyle() {
      let classes = []
      let style = findByKey(this.variant, this.variantsTheme)
      let size = findByKey(this.size, this.sizes)

      classes.push(style ? style.button : this.classesTheme.button)

      if (size && size.button) {
        classes.push(size.button)
      }

      if (this.disabled) {
        classes.push(
          style && style.disabledClass
            ? style.disabledClass
            : this.classesTheme.disabledClass
        )
      }
      return classes
    },
    loadingIconStyle() {
      let classes = []
      let size = findByKey(this.size, this.sizes)

      classes.push(this.classesTheme.loadingIcon)

      if (size && size.loadingIcon) {
        classes.push(size.loadingIcon)
      }

      return classes
    },
    isLoading() {
      return this.loading ? true : false
    },
    hasLoaderSlot() {
      return !!this.$slots.loader
    },
    classesTheme() {
      return this.$theme && this.$theme.SwButton
        ? { ...this.classes, ...this.$theme.SwButton.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwButton
        ? { ...this.variants, ...this.$theme.SwButton.variants }
        : this.variants
    }
  }
}
</script>
