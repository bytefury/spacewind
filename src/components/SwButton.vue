<template>
  <sw-custom-tag
    :tag="getRenderElement"
    :class="buttonStyle"
    :exact="exact"
    :href="href"
    :method="method"
    :data="data"
    :preserveState="preserveState"
    :preserveScroll="preserveScroll"
    :id="id"
    :value="value"
    :autofocus="autofocus"
    :disabled="disabled"
    :name="name"
    :type="type"
    :tabindex="tabindex"
    :to="to"
    :replace="replace"
    :append="this.append"
    :activeClass="activeClass"
    :exactActiveClass="exactActiveClass"
    @click="e => $emit('click', e)"
    @focus="e => $emit('focus', e)"
    @blur="e => $emit('blur', e)"
  >
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
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  components: {
    SwCustomTag
  },
  props: {
    tagName: {
      type: String,
      default: 'button',
      validator: function(value) {
        return ['button', 'a'].indexOf(value) !== -1
      }
    },
    href: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'default'
    },
    method: {
      type: String,
      default: undefined
    },
    data: {
      type: Object,
      default: undefined
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    id: {
      type: Number,
      required: false,
      default: null
    },
    block: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    tabindex: {
      type: Number,
      required: false,
      default: null
    },
    preserveState: {
      type: Boolean,
      default: false
    },
    preserveScroll: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: undefined
    },
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: 'router-link-active'
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String,
      default: 'router-link-exact-active'
    },
    autofocus: {
      type: Boolean,
      default: null
    },
    value: {
      type: [String, Number],
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
    sizes: {
      type: Object,
      default: () => sizes
    }
  },
  computed: {
    isAnIntertiaLink() {
      return this.href !== undefined && this.isInertiaLinkComponentAvailable
    },
    isARouterLink() {
      return this.to !== undefined && this.isRouterLinkComponentAvailable
    },
    getRenderElement() {
      if (this.isARouterLink) {
        return (
          this.$options.components.NuxtLink ||
          this.$options.components.RouterLink
        )
      }

      if (this.isAnIntertiaLink) {
        return this.$options.components.InertiaLink
      }

      if (this.href) {
        return 'a'
      }

      return this.tagName
    },
    buttonStyle() {
      let classes = []
      let style = findByKey(this.variant, this.variants)
      let size = findByKey(this.size, this.sizes)

      classes.push(style ? style.button : this.classes.button)

      if (size && size.button) {
        classes.push(size.button)
      }

      if (this.disabled) {
        classes.push(
          style && style.disabledClass
            ? style.disabledClass
            : this.classes.disabledClass
        )
      }
      return classes
    }
  },
  methods: {
    blur() {
      this.$el.blur()
    },

    focus() {
      this.$el.focus()
    }
  }
}
</script>
