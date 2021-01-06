<template>
  <vue-dropzone
    ref="myVueDropzone"
    class="p-10 border-2 border-dashed"
    :options="getOptions"
    accepted-files="application/pdf"
    v-bind="$attrs"
    :use-custom-slot="true"
    @vdropzone-thumbnail="thumbnail"
    v-on="$listeners"
  />
</template>
<script>
import vue2Dropzone from 'vue2-dropzone'
import { installComponent } from '../helpers/utilities'
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  inheritAttrs: false,
  install(Vue, theme) {
    installComponent(Vue, theme, this)
  },
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      defaultOptions: {
        previewTemplate: this.template()
      }
    }
  },
  computed: {
    getOptions() {
      return { ...this.defaultOptions, ...this.options }
    }
  },
  methods: {
    template() {
      return `
          <div class="relative inline-block m-4 align-top dz-preview dz-file-preview">
            <div class="flex items-center justify-center w-full mb-2">
              <div class="relative w-24 h-24">
                <div class="z-10 block w-full h-full overflow-hidden bg-gray-500 rounded bg-gradient-to-b from-gray-300 to-gray-400 dz-image">
                  <img
                    class="block"
                    data-dz-thumbnail=""
                    alt=".png" />
                </div>
                <a class="absolute z-20 flex justify-center block p-3 text-sm text-center border-none rounded-full cursor-pointer dz-remove hover:underline" href="javascript:undefined;" data-dz-remove="">
                  <svg class="w-6 h-6 bg-white rounded-full cursor-pointer text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
           
            <div class="absolute block w-32 px-2 py-5 text-sm text-white transition-opacity duration-300 ease-in rounded-lg opacity-0 pointer-events-none bg-danger bg-gradient-to-b from-red-500 to-red-600 hover:opacity-100 dz-error-message">
              <span class="absolute w-0 h-0 border-b-4 border-l-4 border-r-4 border-transparent dz-error-message-after"></span>
              <span data-dz-errormessage=""></span>
            </div>
            <div class="absolute block dz-success-mark">
              <svg
                class="block w-12 h-12"
                viewBox="0 0 54 54"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              >
                <title>Check</title>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  sketch:type="MSPage"
                >
                  <path
                    d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"
                    id="Oval-2"
                    stroke-opacity="0.198794158"
                    stroke="#747474"
                    fill-opacity="0.816519475"
                    fill="#FFFFFF"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="absolute block opacity-0 pointer-events-none dz-error-mark">
              <svg
                class="block w-12 h-12"
                viewBox="0 0 54 54"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              >
                <title>Error</title>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  sketch:type="MSPage"
                >
                  <g
                    id="Check-+-Oval-2"
                    sketch:type="MSLayerGroup"
                    stroke="#747474"
                    stroke-opacity="0.198794158"
                    fill="#FFFFFF"
                    fill-opacity="0.816519475"
                  >
                    <path
                      d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"
                      id="Oval-2"
                      sketch:type="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            
            <div class="w-full text-base text-center whitespace-nowrap dz-filename">
              <span class="w-full" data-dz-name=""></span>
            </div>
            <div class="w-full mb-2 text-xs text-center dz-size">
              <span class="w-full" data-dz-size=""></span>
            </div>
             <div class="relative w-20 h-1 overflow-hidden scale-100 rounded opacity-100 pointer-events-none bg-primary-200 dz-progress">
              <span
                class="absolute inset-0 w-0 bg-gray-700 dz-upload bg-primary-500"
                data-dz-uploadprogress=""
                style="width: 100%;"
              ></span>
            </div>
          </div>
        `
    },
    thumbnail(file, dataUrl) {
      var j, len, ref, thumbnailElement
      if (file.previewElement) {
        file.previewElement.classList.remove('dz-file-preview')
        ref = file.previewElement.querySelectorAll('[data-dz-thumbnail-bg]')
        for (j = 0, len = ref.length; j < len; j++) {
          thumbnailElement = ref[j]
          thumbnailElement.alt = file.name
          thumbnailElement.style.width = this.options.thumbnailWidth + 'px'
          thumbnailElement.style.height = this.options.thumbnailHeight + 'px'
          thumbnailElement.style['object-fit'] = 'contain'
          thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")'
        }
        return setTimeout(
          (function(_this) {
            return function() {
              _this
              return file.previewElement.classList.add('dz-image-preview')
            }
          })(this),
          1
        )
      }
    },
    uploadprogress(file, progress) {
      if (file.previewElement) {
        let progressElement = file.previewElement.querySelector(
          '[data-dz-uploadprogress]'
        )
        progressElement.style.width = progress + '%'
        if (progress == 100) {
          progressElement.style.width = 0 + '%'
        }
      }
    }
  }
}
</script>
