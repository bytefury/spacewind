<template>
  <div :class="inputStyle.container">
    <!-- <div
      v-if="icon"
      :class="[
        'absolute inset-y-0 z-10 flex items-center justify-center bg-transparent',
        { 'right-0': iconRight },
      ]"
    >
      <font-awesome-icon :icon="icon" :class="iconStyle" />
    </div> -->
    <!-- <div
      v-else-if="type == 'password'"
      class="absolute inset-y-0 right-0 z-10 flex items-center justify-center bg-transparent cursor-pointer"
      @click="showPass = !showPass"
    >
      <font-awesome-icon
        :icon="!showPass ? 'eye' : 'eye-slash'"
        :class="iconStyle"
      />
    </div> -->
    <input
      ref="baseInput"
      v-model="inputValue"
      :type="toggleType"
      :disabled="disabled"
      :readonly="readOnly"
      :name="name"
      :tabindex="tabIndex"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :class="inputStyle.input"
      :max="max"
      :maxlength="maxlength"
      :min="min"
      :minlength="minlength"
      :pattern="pattern"
      @input="handleInput"
      @change="handleChange"
      @keyup="handleKeyupEnter"
      @keydown="handleKeyDownEnter"
      @blur="handleFocusOut"
      @focus="handleFocus"
      @keyup.enter="handleEnter"
    />
    <!-- <div
      v-if="showPassword && isAlignLeftIcon"
      style="cursor: pointer;"
      @click="showPass = !showPass"
    >
      <font-awesome-icon
        :icon="!showPass ? 'eye' : 'eye-slash'"
        class="right-icon"
      />
    </div>
    <span v-if="isInputGroup" :class="inputGroupTextStyle">
      {{ inputGroupText }}
    </span> -->
  </div>
</template>

<script>
import SwInput from '../themes/default/SwInput'
import { installComponent, findByKey } from '../helpers/utilities'
const { variants, classes } = SwInput
export default {
  name: 'SwInput',
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    id: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return (
          [
            'text',
            'number',
            'tel',
            'url',
            'email',
            'color',
            'password',
            'search'
          ].indexOf(value) !== -1
        )
      }
    },
    tabIndex: {
      type: [String, Number],
      default: null
    },
    value: {
      type: [String, Number, File],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    pattern: {
      type: String,
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    min: {
      type: [String, Number],
      default: null
    },
    minlength: {
      type: [String, Number],
      default: null
    },
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    // icon: {
    //   type: String,
    //   default: '',
    // },
    // iconRight: {
    //   type: Boolean,
    //   default: false,
    // },
    autocomplete: {
      type: String,
      default: 'on'
    },
    // showPassword: {
    //   type: Boolean,
    //   default: false,
    // },
    // isInputGroup: {
    //   type: Boolean,
    //   default: false,
    // },
    // inputGroupText: {
    //   type: String,
    //   default: null,
    // },
    variants: {
      type: Object,
      default: () => variants
    },
    variant: {
      type: String,
      required: false,
      default: ''
    }
    // alignIcon: {
    //   type: String,
    //   default: null
    // },
  },
  data() {
    return {
      inputValue: this.value,
      focus: false,
      showPass: false
    }
  },
  computed: {
    isFieldValid() {
      return this.invalid
    },
    toggleType() {
      if (this.showPass) {
        return 'text'
      }
      return this.type
    },

    inputStyle() {
      let style = {}
      if (this.variant) {
        style = findByKey(this.variant, this.variants)
      }

      if (this.invalid) {
        style = findByKey('danger', this.variants)
      }

      if (this.disabled) {
        style = findByKey('disabled', this.variants)
      }

      return { ...this.classes, ...style }
    },
    isAlignLeftIcon() {
      if (this.alignIcon === 'left') {
        return true
      }
      return false
    }
  },
  watch: {
    value() {
      this.inputValue = this.value
    },
    focus() {
      this.focusInput()
    }
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      if (this.focus) {
        this.$refs.baseInput.focus()
      }
    },
    handleInput() {
      this.$emit('input', this.inputValue)
    },
    handleChange() {
      this.$emit('change', this.inputValue)
    },
    handleKeyupEnter() {
      this.$emit('keyup', this.inputValue)
    },
    handleKeyDownEnter(e) {
      this.$emit('keydown', e, this.inputValue)
    },
    handleFocusOut() {
      this.$emit('blur', this.inputValue)
    },
    handleFocus() {
      this.$emit('handleFocus', this.inputValue)
    },
    handleEnter() {
      this.$emit('handleEnter', this.inputValue)
    }
  }
}
</script>
<style lang="scss">
.base-input {
  .left-icon,
  .right-icon {
    transform: translate(-50%, -50%);
  }
  .input-field {
    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
    }
  }
}
</style>
