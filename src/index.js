/*
 |--------------------------------------------------------------------------
 | SPACEWIND-UI
 |--------------------------------------------------------------------------|
 */

// Base Configuration
import { DefaultTheme } from './themes'
import { extendComponent } from './helpers/utilities'

// Components
import SwAvatar from '../src/components/SwAvatar.vue'
import SwBadge from '../src/components/SwBadge.vue'
import SwBreadcrumb from '../src/components/breadcrumb/SwBreadcrumb.vue'
import SwBreadcrumbItem from '../src/components/breadcrumb/SwBreadcrumbItem.vue'
import SwButton from '../src/components/SwButton.vue'
import SwCard from '../src/components/SwCard.vue'
import SwCheckbox from '../src/components/SwCheckbox.vue'
import SwDivider from '../src/components/SwDivider.vue'
import SwEmptyTablePlaceholder from '../src/components/SwEmptyTablePlaceholder.vue'
import SwFilterWrapper from '../src/components/SwFilterWrapper.vue'
import SwFooter from '../src/components/SwFooter.vue'
import SwHeader from '../src/components/SwHeader.vue'
import SwInput from '../src/components/SwInput.vue'
import SwInputGroup from '../src/components/SwInputGroup.vue'
import SwLabel from '../src/components/SwLabel.vue'
import SwList from '../src/components/list/SwList.vue'
import SwListItem from '../src/components/list/SwListItem.vue'
import SwModal from '../src/components/SwModal.vue'
import SwMoney from '../src/components/SwMoney.vue'
import SwPage from '../src/components/SwPage.vue'
import SwPageHeader from '../src/components/SwPageHeader.vue'
import SwPopup from '../src/components/SwPopup.vue'
import SwFileUpload from '../src/components/SwFileUpload.vue'
import SwRadio from '../src/components/SwRadio.vue'
import SwSidebar from '../src/components/SwSidebar.vue'
import SwSwitch from '../src/components/SwSwitch.vue'
import SwTabItem from '../src/components/tabs/SwTabItem.vue'
import SwTabs from '../src/components/tabs/SwTabs.vue'
import SwTextarea from '../src/components/SwTextarea.vue'
import SwTransition from '../src/components/SwTransition.vue'
import SwEditor from '../src/components/sw-editor/Index.vue'

// Register Components
const components = {
  SwAvatar,
  SwBadge,
  SwBreadcrumb,
  SwBreadcrumbItem,
  SwButton,
  SwCard,
  SwCheckbox,
  SwDivider,
  SwEmptyTablePlaceholder,
  SwFilterWrapper,
  SwFooter,
  SwHeader,
  SwInput,
  SwLabel,
  SwList,
  SwListItem,
  SwMoney,
  SwPageHeader,
  SwPopup,
  SwPage,
  SwInputGroup,
  SwModal,
  SwFileUpload,
  SwRadio,
  SwSidebar,
  SwSwitch,
  SwTabItem,
  SwTabs,
  SwTextarea,
  SwTransition,
  SwEditor
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
