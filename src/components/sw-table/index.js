import SwTableComponent from './components/TableComponent'
import SwTableColumn from './components/TableColumn'
import Pagination from './components/Pagination'
import { mergeSettings } from './settings'

export default {
  install(Vue, options = {}) {
    mergeSettings(options)

    Vue.component('sw-table-component', SwTableComponent)
    Vue.component('sw-table-column', SwTableColumn)
    Vue.component('pagination', Pagination)
  },
  settings(settings) {
    mergeSettings(settings)
  }
}

export { SwTableComponent, SwTableColumn, Pagination }
