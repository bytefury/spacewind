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
// import { classList } from "../helpers";
const { classes } = SwTable
export default {
  props: {
    pagination: {
      type: Object,
      default: () => ({})
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
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
      return [this.classes.paginationContainer]
    },
    firstPageDisabledStyle() {
      let style = null
      if (this.pagination.currentPage === 1) {
        style = this.classes.paginationDisabled
      }
      return style
    },
    lastPageDisabledStyle() {
      let style = null
      if (this.pagination.currentPage === this.pagination.totalPages) {
        style = this.classes.paginationDisabled
      }
      return style
    },
    paginationLeftIconStyle() {
      return [this.classes.paginationLeftIcon]
    },
    paginationRightIconStyle() {
      return [this.classes.paginationRightIcon]
    }
  },
  methods: {
    isActive(page) {
      const currentPage = this.pagination.currentPage || 1

      return currentPage === page
    },
    paginationPageClass(page) {
      let style = ''

      style += ` ${this.classes.pageItem}`

      if (this.isActive(page)) {
        style += ` ${this.classes.activePageItem}`
      }

      return style
    },
    paginationPageStyle(page) {
      let style = ''

      if (page === '...') {
        style += ` ${this.classes.paginationDisabled}`
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
