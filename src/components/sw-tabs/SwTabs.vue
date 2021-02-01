<template>
  <div>
    <ul :class="getTabStyle.tabNavContainer">
      <slot name="nav">
        <li
          v-for="(tab, index) in getAllTabs"
          :key="index"
          :class="
            tab.isActive ? getTabStyle.tabNavItemActive : getTabStyle.tabNavItem
          "
          :aria-selected="tab.isActive"
          @click="setTab(tab)"
        >
          {{ tab.title }}
        </li>
      </slot>
    </ul>
    <slot />
  </div>
</template>

<script>
import SwTabs from '../../themes/default/SwTab'
import { installComponent, findByKey } from '../../helpers/utilities'
const { classes, variants } = SwTabs

export default {
  name: 'SwTabs',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    activeTab: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    }
  },
  data() {
    return {
      tabs: [],
      currentTab: null
    }
  },
  computed: {
    getTabStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    getAllTabs() {
      return this.tabs.filter(tab => tab.title)
    },
    classesTheme() {
      return this.$theme && this.$theme.SwTabs
        ? { ...this.classes, ...this.$theme.SwTabs.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwTabs
        ? { ...this.variants, ...this.$theme.SwTabs.variants }
        : this.variants
    }
  },
  watch: {
    currentTab(newState, oldState) {
      this.tabs.map(tab => (tab.isActive = tab == newState))
      if (oldState != null) {
        this.$emit('update', newState)
      }
    },
    activeTab(newTitle) {
      if (newTitle) {
        this.setActiveTab()
      }
    }
  },
  mounted() {
    this.tabs = this.$children
    this.setActiveTab()
  },
  methods: {
    setTab(tab) {
      this.currentTab = tab

      if (tab && tab.route) {
        this.$router.push(tab.route)
      }
    },
    setActiveTab() {
      this.currentTab = this.activeTab
        ? this.tabs.find(tab => tab.title == this.activeTab)
        : this.tabs[0]
      if (this.currentTab.route) {
        this.$router.push(this.currentTab.route)
      }
    }
  }
}
</script>
