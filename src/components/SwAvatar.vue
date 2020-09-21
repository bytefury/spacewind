<template>
  <div v-if="enableCropper">
    <div v-if="!hasTrigger" id="pick-avatar" :class="classes.avatarContainer">
      <img
        v-if="selectedImage"
        :src="selectedImage"
        :class="classes.image"
        style="animation: fadeIn 2s ease;"
      />
      <div v-if="!selectedImage" :class="classes.previewAvatarClass">
        <div v-if="hasIconSlot" :class="classes.defaultIcon">
          <slot name="icon" />
        </div>
        <p :class="classes.defaultLabel">
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
      @click="$refs.file.click()"
      :class="classes.avatarContainer"
    >
      <img
        v-if="selectedImage"
        :src="selectedImage"
        :class="classes.image"
        style="animation: fadeIn 2s ease;"
      />
      <div v-if="!selectedImage" :class="classes.previewAvatarClass">
        <div v-if="hasIconSlot" :class="classes.defaultIcon">
          <slot name="icon" />
        </div>
        <p :class="classes.defaultLabel">
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
import { installComponent } from '../helpers/utilities'

const { classes } = SwAvatar

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
  data() {
    return {
      selectedImage: null
    }
  },
  computed: {
    hasTrigger() {
      return this.$options.propsData.trigger !== undefined
    },
    hasIconSlot() {
      return !!this.$slots.icon
    }
  },
  watch: {
    previewAvatar(val) {
      this.selectedImage = val
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
