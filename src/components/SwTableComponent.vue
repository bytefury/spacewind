<template>
  <div :class="tableComponentContainerStyle">
    <div v-if="showFilter && filterableColumnExists" class="relative self-end">
      <input
        v-model="filter"
        :class="fullFilterInputClass"
        :placeholder="filterPlaceholder"
        type="text"
      />
      <a v-if="filter" :class="filterClearStyle" @click="filter = ''">×</a>
    </div>

    <div :class="tableWrapperStyle">
      <base-loader v-if="loading" class="table-loader" />

      <table :class="tableStyle">
        <caption
          v-if="showCaption"
          :class="tableCaptionStyle"
          role="alert"
          aria-live="polite"
        >
          {{
            ariaCaption
          }}
        </caption>
        <thead :class="fullTableHeadClass">
          <tr>
            <table-column-header
              v-for="column in columns"
              :key="column.show || column.show"
              :sort="sort"
              :column="column"
              :classes="tableTheme"
              @click="changeSorting"
            />
          </tr>
        </thead>
        <tbody :class="fullTableBodyClass">
          <table-row
            v-for="row in displayedRows"
            :key="row.vueTableComponentInternalRowId"
            :row="row"
            :columns="columns"
            :classes="tableTheme"
            @rowClick="emitRowClick"
          />
        </tbody>
        <tfoot>
          <slot :rows="rows" name="tfoot" />
        </tfoot>
      </table>
    </div>

    <div
      v-if="displayedRows.length === 0 && !loading"
      :class="emptyTableMessageStyle"
    >
      {{ filterNoResults }}
    </div>

    <div style="display: none;">
      <slot />
    </div>

    <pagination
      v-if="pagination && !loading"
      :classes="tableTheme"
      :pagination="pagination"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import Column from './sw-table/classes/Column'
import expiringStorage from './sw-table/expiring-storage'
import Row from './sw-table/classes/Row'
import TableColumnHeader from './sw-table/components/TableColumnHeader'
import TableRow from './sw-table/components/TableRow'
import settings from './sw-table/settings'
import Pagination from './sw-table/components/Pagination'
import { classList, pick } from './sw-table/helpers'
import { findByKey } from '../helpers/utilities'
import SwTable from '../themes/default/SwTable'
const { classes, variants } = SwTable

export default {
  components: {
    TableColumnHeader,
    TableRow,
    Pagination
  },

  props: {
    data: { default: () => [], type: [Array, Function] },

    classes: {
      type: Object,
      default: () => classes
    },
    showFilter: { type: Boolean, default: false },
    showCaption: { type: Boolean, default: false },

    sortBy: { default: '', type: String },
    sortOrder: { default: '', type: String },

    cacheKey: { default: null },
    cacheLifetime: { default: 5 },

    tableClass: { default: () => settings.tableClass },
    theadClass: { default: () => settings.theadClass },
    tbodyClass: { default: () => settings.tbodyClass },
    filterInputClass: { default: () => settings.filterInputClass },
    filterPlaceholder: { default: () => settings.filterPlaceholder },
    filterNoResults: { default: () => settings.filterNoResults },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      default: null
    }
  },

  data: () => ({
    columns: [],
    rows: [],
    filter: '',
    sort: {
      fieldName: '',
      order: ''
    },
    pagination: null,

    loading: false,
    localSettings: {}
  }),

  computed: {
    fullTableClass() {
      return classList('table-component__table', this.tableClass)
    },

    fullTableHeadClass() {
      return classList('table-component__table__head', this.theadClass)
    },

    fullTableBodyClass() {
      return classList('table-component__table__body', this.tbodyClass)
    },

    fullFilterInputClass() {
      return classList('table-component__filter__field', this.filterInputClass)
    },

    ariaCaption() {
      if (this.sort.fieldName === '') {
        return ''
      }
      return (
        `Table sorted by ${this.sort.fieldName} ` +
        (this.sort.order === 'asc' ? '(ascending)' : '(descending)')
      )
    },

    usesLocalData() {
      return Array.isArray(this.data)
    },

    displayedRows() {
      if (!this.usesLocalData) {
        return this.sortedRows
      }

      if (!this.showFilter) {
        return this.sortedRows
      }

      if (!this.columns.filter(column => column.isFilterable()).length) {
        return this.sortedRows
      }

      return this.sortedRows.filter(row => row.passesFilter(this.filter))
    },

    sortedRows() {
      if (!this.usesLocalData) {
        return this.rows
      }

      if (this.sort.fieldName === '') {
        return this.rows
      }

      if (this.columns.length === 0) {
        return this.rows
      }

      const sortColumn = this.getColumn(this.sort.fieldName)

      if (!sortColumn) {
        return this.rows
      }

      let data = this.rows

      return data.sort(
        sortColumn.getSortPredicate(this.sort.order, this.columns)
      )
    },

    filterableColumnExists() {
      return this.columns.filter(c => c.isFilterable()).length > 0
    },

    storageKey() {
      return this.cacheKey
        ? `vue-table-component.${this.cacheKey}`
        : `vue-table-component.${window.location.host}${window.location.pathname}${this.cacheKey}`
    },
    tableComponentContainerStyle() {
      let style = this.tableTheme.tableComponentContainer

      return style
    },
    filterClearStyle() {
      return this.tableTheme.tableComponentFilterClear
    },
    tableWrapperStyle() {
      return this.tableTheme.tableComponentTableWrapper
    },
    tableStyle() {
      return this.tableTheme.baseTableStyle
      // let el = document.getElementById("table");
      // if (baseTableStyle.style && el) {
      //   el.style = baseTableStyle.style;
      // }
      // return [baseTableStyle.class];
    },
    tableCaptionStyle() {
      return this.tableTheme.tableCaption
    },
    emptyTableMessageStyle() {
      return this.tableTheme.emptyTableMessage
    },
    tableTheme() {
      let style = {}
      if (this.variant) {
        style = findByKey(this.variant, this.variantsTheme)
      }
      return { ...this.classesTheme, ...style }
    },
    classesTheme() {
      return this.$theme && this.$theme.SwTable
        ? { ...this.classes, ...this.$theme.SwTable.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwTable
        ? { ...this.variants, ...this.$theme.SwTable.variants }
        : this.variants
    }
  },

  watch: {
    filter() {
      if (!this.usesLocalData) {
        this.mapDataToRows()
      }

      this.saveState()
    },

    data() {
      if (this.usesLocalData) {
        this.mapDataToRows()
      }
    }
  },

  created() {
    this.sort.order = this.sortOrder
  },

  async mounted() {
    this.restoreState()
    this.sort.fieldName = this.sortBy
    const columnComponents = this.$slots.default
      .filter(column => column.componentInstance)
      .map(column => column.componentInstance)

    this.columns = columnComponents.map(column => new Column(column))

    columnComponents.forEach(columnCom => {
      Object.keys(columnCom.$options.props).forEach(prop =>
        columnCom.$watch(prop, () => {
          this.columns = columnComponents.map(column => new Column(column))
        })
      )
    })

    await this.mapDataToRows()
  },

  methods: {
    async pageChange(page) {
      this.pagination.currentPage = page

      await this.mapDataToRows()
    },

    async mapDataToRows() {
      const data = this.usesLocalData
        ? this.prepareLocalData()
        : await this.fetchServerData()

      let rowId = 0

      this.rows = data
        .map(rowData => {
          rowData.vueTableComponentInternalRowId = rowId++
          return rowData
        })
        .map(rowData => new Row(rowData, this.columns))
    },

    prepareLocalData() {
      this.pagination = null

      return this.data
    },

    async fetchServerData() {
      const page = (this.pagination && this.pagination.currentPage) || 1
      this.loading = true

      const response = await this.data({
        filter: this.filter,
        sort: this.sort,
        page: page
      })

      this.pagination = response.pagination
      this.loading = false
      return response.data
    },

    async refresh() {
      if (this.pagination) {
        this.pagination.currentPage = 1
      }
      await this.mapDataToRows()
    },

    changeSorting(column) {
      if (this.sort.fieldName !== (column.sortAs || column.show)) {
        this.sort.fieldName = column.sortAs || column.show
        this.sort.order = 'asc'
      } else {
        this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc'
      }

      if (!this.usesLocalData) {
        this.mapDataToRows()
      }

      this.saveState()
    },

    getColumn(columnName) {
      return this.columns.find(column => column.show === columnName)
    },

    saveState() {
      expiringStorage.set(
        this.storageKey,
        pick(this.$data, ['filter', 'sort']),
        this.cacheLifetime
      )
    },

    restoreState() {
      const previousState = expiringStorage.get(this.storageKey)

      if (previousState === null) {
        return
      }

      this.sort = previousState.sort
      this.filter = previousState.filter

      this.saveState()
    },

    emitRowClick(row) {
      this.$emit('rowClick', row)
      this.$emit('row-click', row)
    }
  }
}
</script>
