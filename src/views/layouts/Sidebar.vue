<template>
  <div
    class="hidden w-64 h-screen pb-32 overflow-y-auto bg-white border-r border-gray-300 border-solid md:block sw-scroll"
  >
    <sw-list variant="collapse-sidebar">
      <div v-for="(menuGroups, groupIndex) in menu" :key="groupIndex">
        <sw-list-group
          v-if="menuGroups.items"
          :title="menuGroups.title"
          :active="groupActiveIndex == groupIndex"
          @click="setActiveGroup(groupIndex)"
        >
          <span slot="titleIcon" v-html="menuGroups.icon" />
          <sw-list-item
            v-for="(item, index) in menuGroups.items"
            :title="item.title"
            :key="index"
            :route="item.route"
            :active="activeIndex == index && groupActiveIndex == groupIndex"
            @click="setActive(index, groupIndex)"
          />
        </sw-list-group>
        <sw-list-item
          v-else
          :title="menuGroups.title"
          :active="activeIndex == -1 && groupActiveIndex == groupIndex"
          @click="setActiveGroup(groupIndex)"
        >
          <span slot="icon" v-html="menuGroups.icon" />
        </sw-list-item>
      </div>
    </sw-list>
  </div>
</template>
<script>
import SwList from '../../components/sw-list/SwList'
import SwListItem from '../../components/sw-list/SwListItem.vue'
import SwListGroup from '../../components/sw-list/SwListGroup'
export default {
  components: {
    SwList,
    SwListItem,
    SwListGroup
  },
  data() {
    return {
      activeIndex: 0,
      groupActiveIndex: 0,
      menu: [
        {
          title: 'Test 1',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-4">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>`,
          active: false,
          items: [
            {
              title: 'Test 3',
              route: '',
              active: false
            },
            {
              title: 'Test 4',
              route: '',
              active: false
            },
            {
              title: 'Test 5',
              route: '',
              active: false
            }
          ]
        },
        {
          title: 'Test 2',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-4">
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                  </svg>`,
          active: false,
          items: [
            {
              title: 'Test 3',
              route: '',
              active: false
            },
            {
              title: 'Test 4',
              route: '',
              active: false
            },
            {
              title: 'Test 5',
              route: '',
              active: false
            }
          ]
        },
        {
          title: 'Test 3',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-4">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>`,
          active: false,
          items: [
            {
              title: 'Test 3',
              icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>`,
              route: '',
              active: false
            },
            {
              title: 'Test 4',
              icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>`,
              route: '',
              active: false
            },
            {
              title: 'Test 5',
              icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>`,
              route: '',
              active: false
            }
          ]
        },
        {
          title: 'Test 2',
          icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>`,
          route: '',
          active: false
        }
      ]
    }
  },
  methods: {
    setActive(index, groupIndex) {
      this.activeIndex = index
      this.groupActiveIndex = groupIndex
      this.menu.forEach(item => {
        if (item.items) {
          item.items.forEach(_item => {
            _item.active = false
          })
        }
        item.active = false
      })
      this.menu[groupIndex].items[index].active = true
      this.menu[groupIndex].active = true
    },
    setActiveGroup(groupIndex) {
      this.activeIndex = -1
      this.groupActiveIndex = groupIndex
      this.menu.forEach(item => {
        if (item.items) {
          item.active = false
          item.items.forEach(_item => {
            _item.active = false
          })
        }
      })
      this.menu[groupIndex].active = true
    }
  }
}
</script>