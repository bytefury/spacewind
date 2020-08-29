/*
 |--------------------------------------------------------------------------
 | SPACEWIND-UI
 |--------------------------------------------------------------------------|
 */

// Base Configuration
import { DefaultTheme } from './themes'
import { extendComponent } from './helpers/utilities'

// Components
import SwButton from '../src/components/SwButton.vue'
import SwTextarea from '../src/components/SwTextarea.vue'
import SwBreadcrumb from '../src/components/breadcrumb/SwBreadcrumb.vue'
import SwBreadcrumbItem from '../src/components/breadcrumb/SwBreadcrumbItem.vue'
import SwTabs from '../src/components/tabs/SwTabs.vue'
import SwTabItem from '../src/components/tabs/SwTabItem.vue'
import SwCard from '../src/components/SwCard.vue'
import SwBadge from '../src/components/SwBadge.vue'
import SwPrefixInput from '../src/components/SwPrefixInput.vue'
import SwMoney from '../src/components/SwMoney.vue'
import SwInput from '../src/components/SwInput.vue'
import SwDivider from '../src/components/SwDivider.vue'
import SwLabel from '../src/components/SwLabel.vue'
import SwPageHeader from '../src/components/SwPageHeader.vue'
import SwFilterWrapper from '../src/components/SwFilterWrapper.vue'
import SwSwitch from '../src/components/SwSwitch.vue'
import SwPopup from '../src/components/SwPopup.vue'
import SwPage from '../src/components/SwPage.vue'
import SwInputGroup from '../src/components/SwInputGroup.vue'
import SwEmptyTablePlaceholder from '../src/components/SwEmptyTablePlaceholder.vue'

// Register Components
const components = {
  SwButton,
  SwTextarea,
  SwBreadcrumb,
  SwBreadcrumbItem,
  SwTabs,
  SwTabItem,
  SwCard,
  SwBadge,
  SwPrefixInput,
  SwMoney,
  SwInput,
  SwDivider,
  SwLabel,
  SwPageHeader,
  SwFilterWrapper,
  SwSwitch,
  SwPopup,
  SwPage,
  SwInputGroup,
  SwEmptyTablePlaceholder
}

export default {
  install(Vue, args = {}) {
    if (this.installed) {
      return
    }

    this.installed = true

    const ComponentTheme = {
      ...DefaultTheme,
      ...(args.theme || {})
    }

    const componentsToRegister = args.components || Object.keys(components)

    componentsToRegister.forEach(componentName => {
      Vue.component(
        componentName,
        extendComponent(
          Vue,
          ComponentTheme,
          componentName,
          components,
          DefaultTheme
        )
      )
    })
  }
}
