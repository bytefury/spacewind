<template>
  <tr :class="rowStyle" @click="onClick">
    <table-cell
      v-for="column in visibleColumns"
      :key="column.id"
      :row="row"
      :column="column"
      :classes="classesTheme"
      :responsive-label="column.label"
    ></table-cell>
  </tr>
</template>

<script>
import TableCell from './TableCell'
import SwTable from '../../../themes/default/SwTable'
const { classes } = SwTable

export default {
  components: {
    TableCell
  },
  props: {
    columns: {
      type: [String, Object, Array],
      default: null
    },
    row: {
      type: [String, Object, Array],
      default: null
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
    classesTheme() {
      return this.$theme && this.$theme.SwTable
        ? { ...this.classes, ...this.$theme.SwTable.classes }
        : this.classes
    },
    visibleColumns() {
      return this.columns.filter(column => !column.hidden)
    },
    rowStyle() {
      return this.classesTheme.trStyles
    }
  },
  methods: {
    onClick(e) {
      this.$emit('rowClick', {
        e,
        row: this.row
      })
    }
  }
}
</script>
