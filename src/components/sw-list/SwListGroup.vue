<template>
  <div :class="listGroupStyle.listGroup.container">
    <div :class="listGroupStyle.listGroup.titleContainer" @click="handleClick">
      <div class="flex flex-row items-center w-full h-full">
        <slot name="titleIcon" />
        <span :class="listGroupStyle.listGroup.title">
          {{ title }}
        </span>
      </div>
      <svg
        :class="listGroupStyle.listGroup.icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
    <transition>
      <div v-show="isShow" :class="listGroupStyle.listGroup.itemsContainer">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import { findByKey, installComponent } from '../../helpers/utilities'
export default {
  name: 'SwListGroup',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    title: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      isShow: this.active,
      variants: null,
      classes: null,
      variant: null,
      items: []
    }
  },
  computed: {
    listGroupStyle() {
      let style = findByKey(this.variant, this.variants)
      let listGroup = {
        container: '',
        titleContainer: '',
        title: '',
        icon: '',
        itemsContainer: '',
        itemContainer: ''
      }

      if (style && this.isShow) {
        let data = {}
        if (this.classes && this.classes.active) {
          data = { ...this.classes, ...this.classes.active }
        }
        return { listGroup, ...data, ...style.active }
      }

      if ((style == undefined || style == null) && this.isShow) {
        if (this.classes && this.classes.active) {
          return { listGroup, ...this.classes, ...this.classes.active }
        }
      }

      return { listGroup, ...this.classes, ...style }
    }
  },
  watch: {
    listGroupStyle() {
      this.items.forEach(item => {
        item.classes = this.classes
        item.variants = this.variants
        item.variant = this.variant
        item.isListGroupItem = true
      })
    },
    active(state) {
      this.isShow = state
    }
  },
  mounted() {
    this.items = this.$children
  },
  methods: {
    handleClick() {
      this.isShow = !this.isShow
      this.$emit('click')
    }
  }
}
</script>
