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
import SwBreadcrumb from '../src/components/sw-breadcrumb/SwBreadcrumb.vue'
import SwBreadcrumbItem from '../src/components/sw-breadcrumb/SwBreadcrumbItem.vue'
import SwButton from '../src/components/SwButton.vue'
import SwCard from '../src/components/SwCard.vue'
import SwCheckbox from '../src/components/SwCheckbox.vue'
import SwDivider from '../src/components/SwDivider.vue'
import SwDropdown from '../src/components/sw-dropdown/SwDropdown.vue'
import SwDropdownItem from '../src/components/sw-dropdown/SwDropdownItem.vue'
import SwDropdownDivider from '../src/components/sw-dropdown/SwDropdownDivider.vue'
import SwEmptyTablePlaceholder from '../src/components/SwEmptyTablePlaceholder.vue'
import SwFilterWrapper from '../src/components/SwFilterWrapper.vue'
import SwInput from '../src/components/SwInput.vue'
import SwInputGroup from '../src/components/SwInputGroup.vue'
import SwLabel from '../src/components/SwLabel.vue'
import SwList from '../src/components/sw-list/SwList.vue'
import SwListItem from '../src/components/sw-list/SwListItem.vue'
import SwListGroup from '../src/components/sw-list/SwListGroup.vue'
import SwModal from '../src/components/SwModal.vue'
import SwMoney from '../src/components/SwMoney.vue'
import SwPageHeader from '../src/components/SwPageHeader.vue'
import SwPopup from '../src/components/SwPopup.vue'
import SwFileUpload from '../src/components/SwFileUpload.vue'
import SwRadio from '../src/components/SwRadio.vue'
import SwSwitch from '../src/components/SwSwitch.vue'
import SwSelect from '../src/components/sw-select'
import SwTabItem from '../src/components/sw-tabs/SwTabItem.vue'
import SwTabs from '../src/components/sw-tabs/SwTabs.vue'
import SwTextarea from '../src/components/SwTextarea.vue'
import SwTransition from '../src/components/SwTransition.vue'
import SwEditor from '../src/components/sw-editor/Index.vue'
import SwWizard from '../src/components/sw-wizard/SwWizard.vue'
import SwWizardStep from '../src/components/sw-wizard/partials/SwWizardStep.vue'
import SwWizardNavigation from '../src/components/sw-wizard/partials/SwWizardNavigation.vue'
import {
  SwTableComponent,
  SwTableColumn,
  Pagination
} from '../src/components/sw-table/index'
import VTooltip from 'v-tooltip'

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
  SwDropdown,
  SwDropdownItem,
  SwDropdownDivider,
  SwEmptyTablePlaceholder,
  SwFilterWrapper,
  SwInput,
  SwLabel,
  SwList,
  SwListItem,
  SwModal,
  SwListGroup,
  SwMoney,
  SwPageHeader,
  SwPopup,
  SwInputGroup,
  SwFileUpload,
  SwRadio,
  SwSwitch,
  SwSelect,
  SwTabItem,
  SwTableComponent,
  SwTableColumn,
  Pagination,
  SwTabs,
  SwTextarea,
  SwTransition,
  SwEditor,
  SwWizard,
  SwWizardStep,
  SwWizardNavigation
}

export default {
  install(Vue, args = {}) {
    Vue.use(VTooltip)

    if (this.installed) {
      return
    }

    this.installed = true

    const ComponentTheme = {
      ...DefaultTheme,
      ...(args.theme || {})
    }

    const defaultOptions = {
      ...(args.option || {})
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
          DefaultTheme,
          defaultOptions
        )
      )
    })
  }
}
