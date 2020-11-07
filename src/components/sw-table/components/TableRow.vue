<template>
  <tr :class="rowStyle" @click="onClick">
    <table-cell
      v-for="column in visibleColumns"
      :key="column.id"
      :row="row"
      :column="column"
      :classes="classes"
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
    visibleColumns() {
      return this.columns.filter(column => !column.hidden)
    },
    rowStyle() {
      return this.classes.trStyles
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
