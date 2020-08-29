<script>
export default {
  render(createElement) {
    return createElement(
      this.tag,
      {
        on: {
          click: e => this.$emit('click', e),
          focus: e => this.$emit('focus', e),
          blur: e => this.$emit('blur', e)
        }
      },
      this.$slots.default
    )
  },
  props: {
    tag: {
      type: String,
      default: 'h2'
    }
  }
}
</script>
