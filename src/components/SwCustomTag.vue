<script>
export default {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'button',
      required: true
    }
  },
  render: (createElement, context) => {
    return createElement(context.props.tag, context.data, context.children)
  }
}
</script>
