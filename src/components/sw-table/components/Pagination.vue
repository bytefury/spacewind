<template>
  <nav v-if="shouldShowPagination">
    <ul :class="paginationContainerStyle">
      <li :class="firstPageDisabledStyle">
        <a
          :class="firstPageDisabledStyle"
          @click="pageClicked(pagination.currentPage - 1)"
        >
          <i :class="paginationLeftIconStyle">«</i>
        </a>
      </li>
      <li v-if="hasFirst" class="overflow-hidden">
        <a
          :class="paginationPageClass(1)"
          :style="paginationPageStyle(1)"
          @click="pageClicked(1)"
          >1</a
        >
      </li>
      <li v-if="hasFirstEllipsis">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li v-for="page in pages" :key="page">
        <a
          :class="paginationPageClass(page)"
          :style="paginationPageStyle(page)"
          @click="pageClicked(page)"
          >{{ page }}</a
        >
      </li>
      <li v-if="hasLastEllipsis">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li v-if="hasLast">
        <a
          :class="paginationPageClass(this.pagination.totalPages)"
          :style="paginationPageStyle(this.pagination.totalPages)"
          @click="pageClicked(pagination.totalPages)"
        >
          {{ pagination.totalPages }}
        </a>
      </li>
      <li>
        <a
          :style="lastPageDisabledStyle"
          @click="pageClicked(pagination.currentPage + 1)"
        >
          <i :class="paginationRightIconStyle">»</i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import SwTable from '../../../themes/default/SwTable'
import { findByKey } from '../../../helpers/utilities'
// import { classList } from "../helpers";
const { classes, variants } = SwTable
export default {
  props: {
    pagination: {
      type: Object,
      default: () => ({})
    },
    classes: {
      type: Object,
      default: () => classes
    },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      default: null
    }
  },
  computed: {
    classesTheme() {
      return this.$theme && this.$theme.SwTable
        ? { ...this.classes, ...this.$theme.SwTable.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwTable
        ? { ...this.variants, ...this.$theme.SwTable.variants }
        : this.variants
    },
    pages() {
      return this.pagination.totalPages === undefined ? [] : this.pageLinks()
    },

    hasFirst() {
      return this.pagination.currentPage >= 4 || this.pagination.totalPages < 10
    },

    hasLast() {
      return (
        this.pagination.currentPage <= this.pagination.totalPages - 3 ||
        this.pagination.totalPages < 10
      )
    },

    hasFirstEllipsis() {
      return (
        this.pagination.currentPage >= 4 && this.pagination.totalPages >= 10
      )
    },

    hasLastEllipsis() {
      return (
        this.pagination.currentPage <= this.pagination.totalPages - 3 &&
        this.pagination.totalPages >= 10
      )
    },

    shouldShowPagination() {
      if (this.pagination.totalPages === undefined) {
        return false
      }

      if (this.pagination.count === 0) {
        return false
      }

      return this.pagination.totalPages > 1
    },

    paginationContainerStyle() {
      return [this.tableTheme.paginationContainer]
    },
    firstPageDisabledStyle() {
      let style = null
      if (this.pagination.currentPage === 1) {
        style = this.tableTheme.paginationDisabled
      }
      return style
    },
    lastPageDisabledStyle() {
      let style = null
      if (this.pagination.currentPage === this.pagination.totalPages) {
        style = this.tableTheme.paginationDisabled
      }
      return style
    },
    paginationLeftIconStyle() {
      return [this.tableTheme.paginationLeftIcon]
    },
    paginationRightIconStyle() {
      return [this.tableTheme.paginationRightIcon]
    },
    tableTheme() {
      let style = {}
      if (this.variant) {
        style = findByKey(this.variant, this.variantsTheme)
      }
      return { ...this.classesTheme, ...style }
    }
  },
  methods: {
    isActive(page) {
      const currentPage = this.pagination.currentPage || 1

      return currentPage === page
    },
    paginationPageClass(page) {
      let style = ''

      style += ` ${this.tableTheme.pageItem}`

      if (this.isActive(page)) {
        style += ` ${this.tableTheme.activePageItem}`
      }

      return style
    },
    paginationPageStyle(page) {
      let style = ''

      if (page === '...') {
        style += ` ${this.tableTheme.paginationDisabled}`
      }

      return style
    },
    pageClicked(page) {
      if (
        page === '...' ||
        page === this.pagination.currentPage ||
        page > this.pagination.totalPages ||
        page < 1
      ) {
        return
      }
      this.$emit('pageChange', page)
    },

    pageLinks() {
      const pages = []

      let left = 2
      let right = this.pagination.totalPages - 1

      if (this.pagination.totalPages >= 10) {
        left = Math.max(1, this.pagination.currentPage - 2)
        right = Math.min(
          this.pagination.currentPage + 2,
          this.pagination.totalPages
        )
      }
      for (let i = left; i <= right; i++) {
        pages.push(i)
      }

      return pages
    }
  }
}
</script>
