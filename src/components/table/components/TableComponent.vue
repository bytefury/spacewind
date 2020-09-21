<template>
  <div :class="tableComponentContainerStyle">
    <div v-if="showFilter && filterableColumnExists" class="relative self-end">
      <input
        :class="fullFilterInputClass"
        v-model="filter"
        :placeholder="filterPlaceholder"
        type="text"
      />
      <a v-if="filter" :class="filterClearStyle" @click="filter = ''">×</a>
    </div>

    <div :class="tableWrapperStyle">
      <base-loader v-if="loading" class="table-loader" />

      <table :class="tableStyle" style="border-spacing: 0 15px;">
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
import Column from '../classes/Column'
import expiringStorage from '../expiring-storage'
import Row from '../classes/Row'
import TableColumnHeader from './TableColumnHeader'
import TableRow from './TableRow'
import settings from '../settings'
import Pagination from './Pagination'
import { classList, pick } from '../helpers'
import { findByKey } from '../../../helpers/utilities'
import SwTable from '../../../themes/default/SwTable'
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
        style = findByKey(this.variant, this.variants)
      }
      return { ...this.classes, ...style }
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

    this.restoreState()
  },

  async mounted() {
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

<style lang="scss">
// Vue Table

.table-component__filter {
  align-self: flex-end;
  position: relative;
}

.table-component__filter__field {
  padding: 0.15em 1.25em 0.15em 0.75em;
  border: solid 1px #e0e0e0;
  font-size: 15px;
  border-radius: 3px;
}

.table-component__filter__field:focus {
  outline: 0;
  @apply border-primary-500;
}

.table-component__table {
  border-spacing: 0 15px;
}

.table-component__th--sort-asc:after,
.table-component__th--sort-desc:after {
  position: absolute;
  left: 0px;
  display: inline-block;
  color: #bbb;
}

.table-component__th--sort-asc:after {
  content: '↑';
}

.table-component__th--sort-desc:after {
  content: '↓';
}

// Pagination
.table-component .pagination {
  .page-item.active .page-link {
    color: #fff !important;
  }

  a i {
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
  }
}

table.full-width {
  width: 100%;
}

.selectall {
  cursor: pointer;
  z-index: 10;
}

.table-component td > span:first-child {
  background: #ebf1fa;
  @apply text-primary-700;
  display: none;
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
  left: 0;
  position: absolute;
  text-transform: uppercase;
  top: 0;
}

.select-all-label {
  display: none !important;
}

@media (max-width: 768px) {
  .select-all-label {
    display: inline !important;
    @apply text-primary-700;
    cursor: pointer;
  }

  .selectall {
    top: 20px;
  }

  .table-component {
    .dropdown-group {
      position: absolute;
      visibility: visible;
      top: 15px;
      right: 10px;
    }

    thead {
      left: -9999px;
      position: absolute;
      visibility: hidden;
    }

    tr {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 50px;
      position: relative;
    }

    td {
      margin: 0 -1px -1px 0;
      padding-top: 40px !important;
      position: relative;
      width: 50%;
      left: 0;
      border: 1px solid #ebf1fa !important;

      &:not(:first-child) {
        text-align: center !important;
      }

      &:first-child {
        display: flex;
        justify-content: space-between;
        flex: 1 100%;
        height: 50px;
        padding-top: 25px !important;
        align-items: center;
        border-bottom-left-radius: 0px !important;
        border-top-left-radius: 5px !important;
        border-top-right-radius: 5px !important;
      }

      // &:last-child {
      //   position: unset;
      //   visibility: hidden;
      //   height: 0px !important;
      //   padding: 0px !important;
      // }

      &:nth-last-child(3) {
        border-bottom-left-radius: 5px !important;
      }
      &:nth-last-child(2) {
        border-bottom-right-radius: 5px !important;
      }
    }

    td > span:first-child {
      display: block;
    }

    .dropdown-container {
      right: 0;
      left: 120px;
    }
  }
}
</style>
