<template>
  <div>
    <ul :class="tabsContailerStyle">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="tab.isActive ? classes.tabNavItemActive : classes.tabNavItem"
        :aria-selected="tab.isActive"
        @click="setTab(tab)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import SwTabs from '../../themes/default/SwTab'
import { installComponent } from '../../helpers/utilities'
const { classes } = SwTabs

export default {
  name: 'SwTabs',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    }
  },
  data() {
    return {
      tabs: [],
      activeTab: null
    }
  },
  computed: {
    tabsContailerStyle() {
      return [this.classes.tabNavContainer]
    }
  },
  watch: {
    activeTab(activeTab) {
      this.tabs.map(tab => (tab.isActive = tab == activeTab))

      this.$emit('update', activeTab)
    }
  },
  mounted() {
    this.tabs = this.$children
    this.setInitialActiveTab()
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab

      if (tab && tab.route) {
        this.$router.push(tab.route)
      }
    },
    setInitialActiveTab() {
      this.activeTab = this.tabs.find(tab => tab.active) || this.tabs[0]
      if (this.activeTab.route) {
        this.$router.push(this.activeTab.route)
      }
    }
  }
}
</script>
