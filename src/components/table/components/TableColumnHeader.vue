<template>
  <th
    v-if="this.isVisible"
    :aria-sort="ariaSort"
    :aria-disabled="ariaDisabled"
    :class="headerClass"
    role="columnheader"
    @click="clicked"
  >
    {{ label }}
  </th>
</template>

<script>
import { classList } from '../helpers'
import SwTable from '../../../themes/default/SwTable'

const { classes } = SwTable

export default {
  props: {
    column: { type: Object },
    sort: { type: Object },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
    ariaDisabled() {
      if (!this.column.isSortable()) {
        return 'true'
      }
      return false
    },

    ariaSort() {
      if (!this.column.isSortable()) {
        return false
      }

      if ((this.column.sortAs || this.column.show) !== this.sort.fieldName) {
        return 'none'
      }

      return this.sort.order === 'asc' ? 'ascending' : 'descending'
    },

    headerClass() {
      if (!this.column.isSortable()) {
        return classList(
          'table-component__th',
          this.column.headerClass,
          this.headerStyle
        )
      }

      if ((this.column.sortAs || this.column.show) !== this.sort.fieldName) {
        return classList(
          'table-component__th table-component__th--sort',
          this.column.headerClass,
          this.headerStyle,
          this.classes.thSortStyles
        )
      }
      return classList(
        `table-component__th table-component__th--sort-${this.sort.order}`,
        this.column.headerClass,
        this.headerStyle,
        this.classes.thSortStyles
      )
    },

    isVisible() {
      return !this.column.hidden
    },

    label() {
      if (this.column.label === null) {
        return this.column.show
      }
      return this.column.label
    },
    headerStyle() {
      return this.classes.thStyles
    }
  },

  methods: {
    clicked() {
      if (this.column.isSortable()) {
        this.$emit('click', this.column)
      }
    }
  }
}
</script>
