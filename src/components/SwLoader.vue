<template>
  <div :class="baseStyle">
    <div :class="overlayStyle">
      <div :class="ballStyle">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import SwLoader from '../themes/default/SwLoader'
const { classes } = SwLoader

export default {
  props: {
    classes: {
      type: Object,
      default: () => classes
    }
  },
  computed: {
    overlayStyle() {
      return this.classes.overlay
    },
    ballStyle() {
      return this.classes.ball
    },
    baseStyle() {
      return this.classes.base
    }
  }
}
</script>
<style lang="scss">
// function.scss

@function delay($interval, $count, $index) {
  @return ($index * $interval) - ($interval * $count);
}

// mixins.scss

@mixin global-bg() {
  @apply bg-primary-500;
}

@mixin global-animation() {
  animation-fill-mode: both;
}

@mixin balls() {
  @include global-bg();

  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
}

@mixin lines() {
  @include global-bg();

  width: $line-width;
  height: $line-height;
  border-radius: 2px;
  margin: $margin;
}

.base-loader {
  .overlay {
    @keyframes ball-scale-ripple-multiple {
      0% {
        transform: scale(0.1);
        opacity: 1;
      }
      70% {
        transform: scale(1);
        opacity: 0.7;
      }
      100% {
        opacity: 0;
      }
    }

    @mixin ball-scale-ripple-multiple($n: 3, $start: 0) {
      @for $i from $start through $n {
        > div:nth-child(#{$i}) {
          animation-delay: delay(0.2s, $n, $i - 1);
        }
      }
    }

    .loader {
      width: 100%;
      position: relative;
      min-height: 500px;
    }

    .ball-scale-ripple-multiple {
      transform: translateY(-25px);
      top: 60%;
      left: 40%;
      @include ball-scale-ripple-multiple();
      transform: translateY(-50px / 2);

      > div {
        @include global-animation();

        position: absolute;
        top: -2px;
        left: -26px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        animation: ball-scale-ripple-multiple 1.25s 0s infinite
          cubic-bezier(0.21, 0.53, 0.56, 0.8);
        border-width: 2px;
        border-style: solid;
        @apply border-primary-500;
      }
    }
  }

  &.table-loader .overlay {
    background: rgba(255, 255, 255, 0.5);
    height: calc(100% - 80px);
    top: 80px;
  }
}
</style>
