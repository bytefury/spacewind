<template>
  <div v-if="enableCropper">
    <div
      v-if="!hasTrigger"
      id="pick-avatar"
      :class="avatarStyle.avatarContainer"
    >
      <img
        v-if="selectedImage"
        :src="selectedImage"
        :class="avatarStyle.image"
        style="animation: fadeIn 2s ease;"
      />
      <div v-if="!selectedImage" :class="avatarStyle.previewAvatarClass">
        <div v-if="hasIconSlot" :class="avatarStyle.defaultIcon">
          <slot name="icon" />
        </div>
        <p :class="avatarStyle.defaultLabel">
          <slot>{{ label }}</slot>
        </p>
      </div>
    </div>
    <avatar-cropper
      :labels="labels"
      :cropper-options="cropperOptions"
      :output-options="cropperOutputOptions"
      :output-quality="outputQuality"
      :upload-handler="e => $emit('uploadHandler', e)"
      :trigger="trigger"
      @changed="e => $emit('changed', e)"
      @error="e => $emit('handleUploadError', e)"
    />
  </div>
  <div v-else>
    <div
      v-if="!hasTrigger"
      :class="avatarStyle.avatarContainer"
      @click="$refs.file.click()"
    >
      <img
        v-if="selectedImage"
        :src="selectedImage"
        :class="avatarStyle.image"
        style="animation: fadeIn 2s ease;"
      />
      <div v-if="!selectedImage" :class="avatarStyle.previewAvatarClass">
        <div v-if="hasIconSlot" :class="avatarStyle.defaultIcon">
          <slot name="icon" />
        </div>
        <p :class="avatarStyle.defaultLabel">
          <slot>{{ label }}</slot>
        </p>
      </div>
    </div>
    <input ref="file" class="hidden" type="file" @change="onFileChange" />
  </div>
</template>
<script>
import AvatarCropper from 'vue-avatar-cropper'
import SwAvatar from '../themes/default/SwAvatar'
import { installComponent, findByKey } from '../helpers/utilities'

const { classes, variants } = SwAvatar

export default {
  components: { AvatarCropper },
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    classes: {
      type: Object,
      default: () => classes
    },
    labels: {
      type: Object,
      default: () => {
        return { submit: 'Submit', cancel: 'Cancel' }
      }
    },
    enableCropper: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: '#pick-avatar'
    },
    previewAvatar: {
      type: String,
      default: null
    },
    cropperOptions: {
      type: Object,
      default() {
        return {
          autoCropArea: 1,
          viewMode: 1,
          movable: true,
          zoomable: true
        }
      }
    },
    outputQuality: {
      type: Number,
      default: 0.8
    },
    cropperOutputOptions: {
      type: Object,
      default() {
        return {
          width: 150,
          height: 150
        }
      }
    },
    label: {
      type: String,
      default: 'Choose File'
    },
    variant: {
      type: String,
      required: false,
      default: null
    },
    variants: {
      type: Object,
      default: () => variants
    }
  },
  data() {
    return {
      selectedImage: null
    }
  },
  computed: {
    avatarStyle() {
      let style = findByKey(this.variant, this.variantsTheme)
      return { ...this.classesTheme, ...style }
    },
    hasTrigger() {
      return this.$options.propsData.trigger !== undefined
    },
    hasIconSlot() {
      return !!this.$slots.icon
    },
    classesTheme() {
      return this.$theme && this.$theme.SwAvatar
        ? { ...this.classes, ...this.$theme.SwAvatar.classes }
        : this.classes
    },
    variantsTheme() {
      return this.$theme && this.$theme.SwAvatar
        ? { ...this.variants, ...this.$theme.SwAvatar.variants }
        : this.variants
    }
  },
  watch: {
    previewAvatar(val) {
      this.selectedImage = val
    }
  },
  mounted() {
    if (!this.enableCropper && this.hasTrigger) {
      let trigger = document.querySelector(this.trigger)
      if (!trigger) {
        this.$emit('error', 'No avatar make trigger found.', 'user')
      } else {
        trigger.addEventListener('click', this.pickImage)
      }
    }
  },
  methods: {
    onFileChange(e) {
      var input = e.target
      this.file = input.files[0]
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
          this.selectedImage = e.target.result
          this.$emit('changed', {
            file: this.file,
            image: this.selectedImage
          })
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    pickImage(e) {
      this.$refs.file.click()
      e.preventDefault()
      e.stopPropagation()
    }
  }
}
</script>
