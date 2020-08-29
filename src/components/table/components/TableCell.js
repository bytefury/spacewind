import SwTable from '../../../themes/default/SwTable'

const { classes } = SwTable

export default {
  functional: true,

  props: ['column', 'row', 'responsiveLabel'],

  render(createElement, { props }) {
    const data = {}

    if (props.column.cellClass) {
      data.class = props.column.cellClass
    }

    data.class += ` ${classes.tdStyles}`

    if (props.column.template) {
      return createElement('td', data, props.column.template(props.row.data))
    }

    data.domProps = {}
    data.domProps.innerHTML = props.column.formatter(
      props.row.getValue(props.column.show),
      props.row.data
    )

    let tdData = {
      class: classes.tdStyles,
    }

    return createElement('td', tdData, [
      createElement('span', props.responsiveLabel),
      data.domProps.innerHTML,
    ])
  },
}
