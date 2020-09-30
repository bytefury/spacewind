import SwTable from '../../../themes/default/SwTable'

const { classes } = SwTable

export default {
  functional: true,

  props: {
    column: { type: Object },
    row: { type: Object },
    responsiveLabel: { type: String },
    classes: {
      type: Object,
      default: () => classes
    }
  },

  render(createElement, { props }) {
    const data = {}

    if (props.column.cellClass) {
      data.class = props.column.cellClass
    }

    data.class += ` ${props.classes.tdStyles}`

    if (props.column.template) {
      return createElement('td', data, props.column.template(props.row.data))
    }

    data.domProps = {}
    data.domProps.innerHTML = props.column.formatter(
      props.row.getValue(props.column.show),
      props.row.data
    )

    let tdData = {
      class: props.classes.tdStyles
    }

    return createElement('td', tdData, [
      createElement('span', props.responsiveLabel),
      data.domProps.innerHTML
    ])
  }
}
