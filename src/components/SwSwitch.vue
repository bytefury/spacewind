<template>
  <div :class="classes.container">
    <input
      v-model="checkValue"
      :id="uniqueId"
      :class="classes.switch"
      type="checkbox"
      @input="handleInput"
      @change="handleChange"
      @keyup="handleKeyupEnter"
      @blur="handleFocusOut"
    />
    <label :for="uniqueId" :class="classes.label">
      <span class="switch-circle"></span>
    </label>
  </div>
</template>

<script>
import SwSwitch from '../themes/default/SwSwitch'
const { classes } = SwSwitch
export default {
  name: 'SwSwitch',
  props: {
    value: {
      type: [Boolean, Number],
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    classes: {
      type: Object,
      default: () => classes
    }
  },
  data() {
    return {
      id: null,
      checkValue: this.value
    }
  },
  computed: {
    uniqueId() {
      return (
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      )
    }
  },
  watch: {
    value() {
      this.checkValue = this.value
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.checked)
    },
    handleChange() {
      this.$emit('change', this.checkValue)
    },
    handleKeyupEnter() {
      this.$emit('keyup', this.checkValue)
    },
    handleFocusOut() {
      this.$emit('blur', this.checkValue)
    }
  }
}
</script>
