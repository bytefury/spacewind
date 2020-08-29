<template>
  <div
    :class="[
      classes.base,
      { active: toggle || isActive() },
      { 'has-child': hasChild },
      { 'toggle-arrow': hasChild && showArrow },
      { 'dropdown-light': themeLight }
    ]"
  >
    <div class="dropdown-activator" @click.stop.prevent="showDropdown">
      <slot name="activator" />
    </div>
    <transition name="bounce">
      <div
        v-show="toggle"
        v-if="hasChild"
        ref="dropdownItems"
        :class="[
          classes.itemContainer,
          {
            rightAlignStyle: rightAlign,
            block: toggle || isActive(),
            hidden: !(toggle || isActive())
          }
        ]"
        style="
          min-width: 10rem;
          margin: 0.125rem 0 0 0.125rem;
          background-clip: padding-box;
        "
        @click="closeOnSelectDropdownItem"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import SwDropdown from '../../themes/default/dropdown/SwDropdown'
const { classes } = SwDropdown

export default {
  props: {
    classes: {
      type: [String, Object],
      default: () => classes
    },
    activeUrl: {
      type: String,
      require: true,
      default: String
    },
    showArrow: {
      type: Boolean,
      require: true,
      default: true
    },
    themeLight: {
      type: Boolean,
      require: true,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      require: true,
      default: true
    }
  },
  data() {
    return {
      toggle: true,
      hasChild: true,
      rightAlign: false
    }
  },
  computed: {
    rightAlignStyle() {
      return this.classes.rightAlign
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setDropdownPosition()
      window.addEventListener('resize', e => {
        if (this.toggle === true) {
          this.setDropdownPosition()
        }
        console.log(e)
      })
      if (!this.$slots.default) {
        this.hasChild = false
      }
      this.toggle = false
    })
  },
  methods: {
    setDropdownPosition() {
      let rect = this.$refs.dropdownItems.getBoundingClientRect()

      let offsetPos = rect.width - this.$el.offsetWidth
      let itemPos = rect.right + rect.width + offsetPos

      if (itemPos > window.innerWidth) {
        this.rightAlign = true
      }
      itemPos += offsetPos + rect.width + offsetPos
      if (itemPos < window.innerWidth) {
        this.rightAlign = false
      }
    },
    isActive() {
      if (this.activeUrl) {
        return this.$route.path.indexOf(this.activeUrl) > -1
      }
      return false
    },
    showDropdown() {
      this.toggle = !this.toggle
    },
    closeOnSelectDropdownItem() {
      if (this.closeOnSelect === false) {
        this.toggle = true
      } else {
        this.toggle = false
      }
    },
    closeDropdown() {
      this.toggle = false
    }
  }
}
</script>
<style>
.dropdown-item {
  background: transparent;
  transform-origin: top;
  position: relative;
  color: #040405;
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-direction: alternate;
}
.bounce-enter-active {
  /* zoom: 1; */
  transform-origin: top right;
  margin-top: 5px;
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}

@keyframes example {
  0% {
    color: #ffffff;
  }
  100% {
    color: #040405;
  }
}

@keyframes bounce-in {
  from {
    transform: scale(0);
  }
  to {
  }
}
</style>
