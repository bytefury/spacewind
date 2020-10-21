import Vue from 'vue'
import VueRouter from 'vue-router'

// basic-ui
import Cards from '../demo/views/basic-ui/Cards.vue'
import Tabs from '../demo/views/basic-ui/Tabs.vue'
import Typography from '../demo/views/basic-ui/Typography.vue'
import Tables from '../demo/views/basic-ui/Table.vue'
import Modals from '../demo/views/basic-ui/Modals.vue'

// form
import Buttons from '../demo/views/form/Buttons.vue'
import GeneralElements from '../demo/views/form/GeneralElements.vue'
import AdvancedElements from '../demo/views/form/AdvancedElements.vue'
import FormLayout from '../demo/views/form/FormLayout.vue'

// components
import Badges from '../demo/views/components/Badges.vue'
import List from '../demo/views/components/List.vue'
import FileUpload from '../demo/views/components/FileUpload.vue'
import Dropdown from '../demo/views/components/Dropdown.vue'
import Editors from '../demo/views/components/Editors.vue'
import Wizards from '../demo/views/components/Wizards.vue'
import Popup from '../demo/views/components/Popup.vue'

Vue.use(VueRouter)

const routes = [
  // basic-ui
  {
    path: '/basic-ui/cards',
    component: Cards
  },
  {
    path: '/basic-ui/modals',
    component: Modals
  },
  {
    path: '/basic-ui/tables',
    component: Tables
  },
  {
    path: '/basic-ui/tabs',
    component: Tabs
  },
  {
    path: '/basic-ui/tabs',
    component: Tabs
  },
  {
    path: '/basic-ui/typography',
    component: Typography
  },

  // form
  {
    path: '/form/buttons',
    component: Buttons
  },
  {
    path: '/form/general-elements',
    component: GeneralElements
  },
  {
    path: '/form/advanced-elements',
    component: AdvancedElements
  },
  {
    path: '/form/form-layout',
    component: FormLayout
  },

  // components
  {
    path: '/components/list',
    component: List
  },
  {
    path: '/components/badges',
    component: Badges
  },
  {
    path: '/components/file-upload',
    component: FileUpload
  },
  {
    path: '/components/editors',
    component: Editors
  },
  {
    path: '/components/dropdown',
    component: Dropdown
  },
  {
    path: '/components/wizards',
    component: Wizards
  },
  {
    path: '/components/popup',
    component: Popup
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

export default router
