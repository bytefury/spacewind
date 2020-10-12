<template>
  <div>
    <base-header />
    <div class="flex h-screen pt-16 pb-10 overflow-hidden bg-gray-100">
      <base-sidebar />
      <div
        class="flex flex-col flex-1 p-8 overflow-y-auto border-b border-gray-300 border-solid"
      >
        <sw-page-header title="Demo">
          <template v-slot:breadcrumbs>
            <sw-breadcrumb>
              <sw-breadcrumb-item title="Dashboard" />
              <sw-breadcrumb-item title="Invoice" />
              <sw-breadcrumb-item title="Create" active />
            </sw-breadcrumb>
          </template>
          <template v-slot:actions>
            <div>
              <sw-button variant="primary">Test 1</sw-button>&nbsp;
              <sw-button variant="warning">Test 1</sw-button>&nbsp;
            </div>
          </template>
        </sw-page-header>
        <sw-tabs>
          <sw-tab-item title="SwSelect" class="mt-5">
            <div class="mb-5">
              <sw-select
                v-model="database_connection1"
                :options="options2"
                :searchable="true"
                :show-labels="false"
                :allow-empty="true"
                :multiple="false"
                placeholder="select a value "
              />
            </div>
            <div class="mb-5">
              <sw-select
                v-model="database_connection2"
                :options="options2"
                :searchable="true"
                :show-labels="false"
                :allow-empty="true"
                :multiple="true"
                placeholder="select a value "
              />
            </div>
          </sw-tab-item>
          <sw-tab-item title="Button" class="mt-5">
            <div class="p-4">
              <sw-modal ref="myModal">
                <template v-slot:header>
                  Title
                </template>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, nulla aliquam quam facilis in voluptatem assumenda
                  dolore ut atque consequatur laudantium at asperiores rem
                  provident a accusamus ad qua
                </div>
                <template v-slot:footer>
                  <sw-button
                    variant="danger"
                    @click="() => $refs.myModal.close()"
                  >
                    Close
                  </sw-button>
                  &nbsp;
                </template>
              </sw-modal>
              <sw-button size="lg" variant="primary" @click="onModal">
                Primary Button
              </sw-button>
              &nbsp;
              <sw-button
                size="lg"
                variant="danger"
                :loading="isLoading"
                @click="isLoading != isLoading"
              >
                Danger Button
              </sw-button>
              &nbsp;
              <sw-button size="lg" variant="warning">
                Warning Button
              </sw-button>
              &nbsp;
              <sw-button size="lg" variant="success">
                Success Button
              </sw-button>
              &nbsp;
              <sw-button size="lg" variant="info"> Info Button </sw-button
              >&nbsp;
              <sw-button size="lg" variant="primary-light">
                Primary Light Button
              </sw-button>
              &nbsp;
              <br />
              <br />
              <sw-button size="lg" variant="primary-outline">
                Primary Button
              </sw-button>
              &nbsp;
              <sw-button size="lg" variant="danger-outline">
                Danger Button
              </sw-button>
              &nbsp;
              <sw-button size="lg" variant="warning-outline">
                Warning Button
              </sw-button>
              &nbsp;
              <sw-button size="lg" variant="success-outline">
                Success Button
              </sw-button>
              &nbsp;
              <sw-button size="lg" variant="info-outline"
                >Info Button</sw-button
              >
              &nbsp;
              <sw-button size="lg" variant="primary-light-outline">
                Primary Light Button
              </sw-button>
            </div>
          </sw-tab-item>
          <sw-tab-item title="Card" class="mt-5">
            <sw-card class="mt-6">
              <div class="grid grid-cols-3 gap-4 mb-6">
                <sw-input-group label="Name">
                  <sw-input prefix="EST">
                    <template v-slot:rightIcon>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-5 h-5 mr-1 text-gray-500 "
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </template>
                  </sw-input>
                </sw-input-group>
                <sw-input-group label="Age">
                  <sw-input type="number" />
                </sw-input-group>
                <sw-input-group label="Amount">
                  <sw-money v-model="money" :currency="currency" />
                </sw-input-group>
                <sw-input-group label="Address">
                  <sw-textarea row="2" v-model="address" />
                </sw-input-group>
                <sw-input-group label="Toggle">
                  <sw-switch />
                </sw-input-group>
              </div>
              <template v-slot:footer>
                <sw-button variant="danger" @click="() => $refs.myModal.close()"
                  >Close</sw-button
                >&nbsp;
              </template>
            </sw-card>
            <sw-divider class="my-5" />
          </sw-tab-item>
          <sw-tab-item title="Badges" class="mt-5">
            <div class="flex flex-row mt-4">
              <sw-badge>Default</sw-badge>
              <sw-badge variant="success" class="ml-5">Success</sw-badge>
              <sw-badge variant="warning" class="ml-5">Warning</sw-badge>
              <sw-badge variant="info" class="ml-5">Info</sw-badge>
              <sw-badge variant="danger" class="ml-5">Danger</sw-badge>
              <sw-badge bg-color="#FF9988" color="white" class="ml-5"
                >Custom Color</sw-badge
              >
            </div>
          </sw-tab-item>
          <sw-tab-item title="Card" class="mt-5">
            <sw-card class="mt-6">
              <div class="grid grid-cols-3 gap-4 mb-6">
                <sw-input-group label="Name">
                  <sw-input prefix="EST">
                    <template v-slot:rightIcon>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-5 h-5 mr-1 text-gray-500 "
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </template>
                  </sw-input>
                </sw-input-group>
                <sw-input-group label="Age">
                  <sw-input type="number" />
                </sw-input-group>
                <sw-input-group label="Amount">
                  <sw-money v-model="money" :currency="currency" />
                </sw-input-group>
                <sw-input-group label="Last Name">
                  <sw-input />
                </sw-input-group>
                <sw-input-group label="Surname Name">
                  <sw-input />
                </sw-input-group>
                <sw-input-group label="Testing">
                  <sw-input />
                </sw-input-group>
                <sw-input-group label="Checkbox">
                  <sw-checkbox
                    v-model="hobbies"
                    name="hobbies"
                    label="Cricket"
                    value="cricket"
                    variant="success"
                    size="sm"
                    autofocus
                  />
                  <sw-checkbox
                    v-model="hobbies"
                    name="hobbies"
                    label="Foot Ball"
                    value="football"
                  />
                  <sw-checkbox
                    v-model="hobbies"
                    name="hobbies"
                    label="Wally Ball"
                    value="wallyball"
                    variant="danger"
                    size="lg"
                  />
                </sw-input-group>
                <sw-input-group label="Gender">
                  <sw-radio
                    v-model="gender"
                    label="Male"
                    name="gender"
                    value="male"
                    size="sm"
                    variant="success"
                  />
                  <sw-radio
                    v-model="gender"
                    label="Female"
                    name="gender"
                    value="female"
                  />
                </sw-input-group>
                <sw-input-group label="Date of Birth">
                  <sw-date-picker v-model="dob" placeholder="dd-mm-yyyy" />
                </sw-input-group>
              </div>
            </sw-card>
          </sw-tab-item>
          <sw-tab-item title="Filter Wrapper" class="mt-5">
            <sw-filter-wrapper is-show class="mt-6">
              <sw-input-group label="First Name">
                <sw-input />
              </sw-input-group>
              <sw-input-group label="Last Name">
                <sw-input />
              </sw-input-group>
              <sw-input-group label="Surname Name">
                <sw-input />
              </sw-input-group>
              <sw-input-group label="Testing">
                <sw-input />
              </sw-input-group>
            </sw-filter-wrapper>
          </sw-tab-item>
          <sw-tab-item title="Popup" class="mt-5">
            <sw-popup>
              <template v-slot:activator>
                <span>Click Here</span>
              </template>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aperiam blanditiis quia odio ipsam unde voluptates aut cum
                necessitatibus architecto numquam reprehenderit illum
                consequatur optio et ut. Numquam, sapiente nihil!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aperiam blanditiis quia odio ipsam unde voluptates aut cum
                necessitatibus architecto numquam reprehenderit illum
                consequatur optio et ut. Numquam, sapiente nihil!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aperiam blanditiis quia odio ipsam unde voluptates aut cum
                necessitatibus architecto numquam reprehenderit illum
                consequatur optio et ut. Numquam, sapiente nihil!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aperiam blanditiis quia odio ipsam unde voluptates aut cum
                necessitatibus architecto numquam reprehenderit illum
                consequatur optio et ut. Numquam, sapiente nihil!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aperiam blanditiis quia odio ipsam unde voluptates aut cum
                necessitatibus architecto numquam reprehenderit illum
                consequatur optio et ut. Numquam, sapiente nihil!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                aperiam blanditiis quia odio ipsam unde voluptates aut cum
                necessitatibus architecto numquam reprehenderit illum
                consequatur optio et ut. Numquam, sapiente nihil!
              </p>
            </sw-popup>
          </sw-tab-item>
          <sw-tab-item title="Avatar Cropper" class="mt-5">
            <sw-card class="mt-6">
              <sw-avatar
                :preview-avatar="previewAvatar"
                @changed="onChange"
                @uploadHandler="onUploadHandler"
                @handleUploadError="onHandleUploadError"
              >
                <template v-slot:icon>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-6 h-6 text-gray-400 cloud-upload"
                  >
                    <path
                      d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
                    ></path>
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                  </svg>
                </template>
              </sw-avatar>
            </sw-card>
          </sw-tab-item>
          <sw-tab-item title="Empty Table Placeholder" class="mt-5">
            <sw-card class="mt-6">
              <sw-empty-table-placeholder
                title="Testing"
                buttonTitle="Testing"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, consectetur consequuntur, provident dolores enim facere quam soluta dolore mollitia officiis libero quia nulla corporis sapiente perferendis illum corrupti eveniet odit."
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-6 h-6 academic-cap"
                >
                  <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                  ></path>
                </svg>
                <template v-slot:actions>
                  <sw-button>Test</sw-button>
                </template>
              </sw-empty-table-placeholder>
            </sw-card>
          </sw-tab-item>
          <sw-tab-item title="Transition" class="mt-5">
            <div class="grid grid-cols-3 mt-4">
              <div class="p-2">
                <sw-button variant="primary" @click="toggleFade"
                  >Fade</sw-button
                >
                <sw-transition>
                  <div v-show="fade" class="p-4 mt-2 rounded bg-primary-200">
                    Content Of Fade Transition
                  </div>
                </sw-transition>
              </div>
              <div class="p-2">
                <sw-button variant="primary" @click="toggleBounce">
                  Bounce
                </sw-button>
                <sw-transition variant="bounce">
                  <div v-show="bounce" class="p-4 mt-2 rounded bg-primary-200">
                    Content Of Bounce Transition
                  </div>
                </sw-transition>
              </div>
            </div>
          </sw-tab-item>
          <sw-tab-item title="Table" class="mt-5">
            <sw-table-component ref="table" :data="users" table-class="table">
              <sw-table-column label="Name" show="name" />
              <sw-table-column label="Age" show="age" />
              <sw-table-column label="Phone" show="phone" />
              <sw-table-column label="Last Name" show="last_name" />
            </sw-table-component>
          </sw-tab-item>
          <sw-tab-item
            title="List"
            class="flex flex-col w-full mt-5 space-x-0 space-y-4 md:space-x-4 md:space-y-0 md:flex-row"
          >
            <div class="flex-1 bg-white">
              <sw-list
                v-for="(menuGroups, groupIndex) in menu2"
                :key="groupIndex"
              >
                <sw-list-item
                  v-for="(item, index) in menuGroups"
                  :title="item.title"
                  :key="index"
                  :active="
                    index === activeIndex && groupActiveIndex === groupIndex
                  "
                  @click="setActive(index, groupIndex)"
                >
                  <span slot="icon" v-html="item.icon" />
                </sw-list-item>
              </sw-list>
            </div>
            <div class="flex-1 bg-white">
              <sw-list>
                <sw-list-group title="A">
                  <sw-list-group title="AA">
                    <sw-list-item title="AAA" />
                    <sw-list-item title="AAB" />
                    <sw-list-item title="AAC" />
                  </sw-list-group>
                  <sw-list-item title="AB" />
                  <sw-list-item title="AC" />
                  <sw-list-item title="AD" />
                  <sw-list-item title="AE" />
                </sw-list-group>
                <sw-list-item title="B" />
                <sw-list-item title="C" />
                <sw-list-item title="D" />
              </sw-list>
            </div>
          </sw-tab-item>
          <sw-tab-item title="Dropdown" class="grid grid-cols-2 mt-5">
            <div class="flex">
              <sw-dropdown show>
                <sw-button slot="activator" variant="primary">
                  Default
                </sw-button>
                <sw-dropdown-item>
                  item1
                </sw-dropdown-item>
                <sw-dropdown-item>item2</sw-dropdown-item>
                <sw-dropdown-divider />
                <sw-dropdown-item>item3</sw-dropdown-item>
                <sw-dropdown-item>item4</sw-dropdown-item>
              </sw-dropdown>
            </div>
            <div class="flex">
              <sw-dropdown position="bottom-right">
                <sw-button slot="activator" variant="primary">
                  Right
                </sw-button>
                <sw-dropdown-item>item1</sw-dropdown-item>
                <sw-dropdown-item>item2</sw-dropdown-item>
                <sw-dropdown-item>item3</sw-dropdown-item>
                <sw-dropdown-item>item4</sw-dropdown-item>
                <sw-dropdown-item>item1</sw-dropdown-item>
                <sw-dropdown-item>item2</sw-dropdown-item>
                <sw-dropdown-item>item3</sw-dropdown-item>
                <sw-dropdown-item>item4</sw-dropdown-item>
                <sw-dropdown-item>item1</sw-dropdown-item>
                <sw-dropdown-item>item2</sw-dropdown-item>
                <sw-dropdown-item>item3</sw-dropdown-item>
                <sw-dropdown-item>item4</sw-dropdown-item>
                <sw-dropdown-item>item1</sw-dropdown-item>
                <sw-dropdown-item>item2</sw-dropdown-item>
                <sw-dropdown-item>item3</sw-dropdown-item>
                <sw-dropdown-item>item4</sw-dropdown-item>
                <sw-dropdown-item>item1</sw-dropdown-item>
                <sw-dropdown-item>item2</sw-dropdown-item>
                <sw-dropdown-item>item3</sw-dropdown-item>
                <sw-dropdown-item>item4</sw-dropdown-item>
                <sw-dropdown-item>item1</sw-dropdown-item>
                <sw-dropdown-item>item2</sw-dropdown-item>
                <sw-dropdown-item>item3</sw-dropdown-item>
                <sw-dropdown-item>item4</sw-dropdown-item>
              </sw-dropdown>
            </div>
          </sw-tab-item>
          <sw-tab-item title="Editor" class="mt-5">
            <sw-editor />
          </sw-tab-item>
          <sw-tab-item title="File Upload" class="mt-5">
            <sw-file-upload
              id="mydropzone"
              ref="dropZone"
              :options="dropzoneOptions"
            />
          </sw-tab-item>
          <sw-tab-item title="Wizard">
            <div class="flex items-center justify-center w-full">
              <img
                id="logo-crater"
                src="https://demo.craterapp.com/assets/img/crater-logo.png"
                alt="Crater Logo"
                class="h-12 mt-2"
              />
            </div>
            <sw-wizard
              :steps="3"
              :currentStep.sync="wizardStep"
              @submit="submitWizard"
            >
              <component :is="tab" @next="setNextTab()" @back="setBackTab()" />
            </sw-wizard>
          </sw-tab-item>
        </sw-tabs>
      </div>
    </div>
    <base-footer />
  </div>
</template>

<script>
import SwModal from './components/SwModal.vue'
import SwButton from './components/SwButton.vue'
import SwTextarea from './components/SwTextarea.vue'
import SwBreadcrumb from './components/sw-breadcrumb/SwBreadcrumb.vue'
import SwBreadcrumbItem from './components/sw-breadcrumb/SwBreadcrumbItem.vue'
import SwTabs from './components/sw-tabs/SwTabs.vue'
import SwTabItem from './components/sw-tabs/SwTabItem.vue'
import SwCard from './components/SwCard.vue'
import SwBadge from './components/SwBadge.vue'
import SwMoney from './components/SwMoney.vue'
import SwInput from './components/SwInput.vue'
import SwDivider from './components/SwDivider.vue'
import SwAvatar from './components/SwAvatar.vue'
import SwPageHeader from './components/SwPageHeader.vue'
import SwFilterWrapper from './components/SwFilterWrapper.vue'
import SwSwitch from './components/SwSwitch.vue'
import SwPopup from './components/SwPopup.vue'
import SwTransition from './components/SwTransition.vue'
import SwInputGroup from './components/SwInputGroup.vue'
import SwFileUpload from './components/SwFileUpload'
import SwEmptyTablePlaceholder from './components/SwEmptyTablePlaceholder.vue'
import { SwTableComponent, SwTableColumn } from './components/sw-table/index'
import SwList from './components/sw-list/SwList.vue'
import SwListItem from './components/sw-list/SwListItem.vue'
import SwSelect from './components/sw-select/SwSelect'
import SwDropdown from './components/sw-dropdown/SwDropdown.vue'
import SwDropdownItem from './components/sw-dropdown/SwDropdownItem'
import SwDropdownDivider from './components/sw-dropdown/SwDropdownDivider'
import SwCheckbox from './components/SwCheckbox'
import SwRadio from './components/SwRadio'
import SwDatePicker from './components/SwDatePicker'
import SwEditor from './components/sw-editor/Index'
import SwListGroup from './components/sw-list/SwListGroup'
import SwWizard from './components/sw-wizard/SwWizard'
import SwWizardStep from './components/sw-wizard/partials/SwWizardStep'

import BaseHeader from './views/layouts/Header'
import BaseSidebar from './views/layouts/Sidebar'
import BaseFooter from './views/layouts/Footer'

import Test1 from './views/Test1'
import Test2 from './views/Test2'
import Test3 from './views/Test3'

export default {
  name: 'App',
  data() {
    return {
      fade: false,
      bounce: false,
      previewAvatar: null,
      cropperOutputMime: '',
      fileSizeInKb: null,
      fileObject: null,
      dob: new Date(),
      isLoading: false,
      currency: {
        decimal: '.',
        thousands: ',',
        prefix: '$',
        precision: 2,
        masked: false
      },
      users: [
        {
          name: 'jay',
          last_name: 'last Name',
          age: '22',
          phone: '234234234234'
        },
        {
          name: 'asd',
          last_name: 'last Name',
          age: '34',
          phone: '234234234234'
        },
        {
          name: 'qwe',
          last_name: 'last Name',
          age: '12',
          phone: '234234234234'
        },
        {
          name: 'qwe',
          last_name: 'last Name',
          age: '12',
          phone: '234234234234'
        }
      ],
      activeIndex: 0,
      groupActiveIndex: 0,
      database_connection1: '',
      database_connection2: '',
      options1: ['sqlite', 'mysql', 'pgsql', 'sqlsrv'],
      options2: ['sqlite', 'mysql', 'pgsql', 'sqlsrv'],
      money: 0,
      address: null,
      gender: 'male',
      hobbies: [],
      wizardStep: 1,
      menu2: [
        [
          {
            title: 'Dashboard',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 home">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>`,
            route: '/admin/dashboard'
          },
          {
            title: 'Customers',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 user">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>`,
            route: '/admin/customers'
          },
          {
            title: 'Items',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 star">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>`,
            route: '/admin/items'
          }
        ],
        [
          {
            title: 'Estimates',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 document-duplicate">
                  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                  </svg>`,
            route: '/admin/estimates'
          },
          {
            title: 'Invoices',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 document-text">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/
                  ></svg>`,
            route: '/admin/invoices'
          },
          {
            title: 'Payments',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 credit-card">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"/>
                    </svg>`,
            route: '/admin/payments'
          },
          {
            title: 'Expenses',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 calculator">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd"/>
                  </svg>`,
            route: '/admin/expenses'
          }
        ],
        [
          {
            title: 'Reports',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 chart-bar">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>`,
            route: '/admin/reports'
          },
          {
            title: 'Settings',
            icon: `<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 cog">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                  </svg>`,
            route: '/admin/settings'
          }
        ]
      ],
      dropzoneOptions: {
        autoProcessQueue: false,
        url: `https://httpbin.org/post`,
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        maxFilesize: 1,
        maxFiles: 10,
        parallelUploads: 5,
        uploadMultiple: true,
        dictDefaultMessage: 'drag and drop',
        dictCancelUpload: 'cancel',
        dictRemoveFile: 'remove',
        dictInvalidFileType: 'This file type is not supported.',
        dictFileTooBig: 'File size too Big',
        addRemoveLinks: false,
        method: 'post'
      }
    }
  },
  computed: {
    tab() {
      switch (this.wizardStep) {
        case 1:
          return 'test-1'
        case 2:
          return 'test-2'
        case 3:
          return 'test-3'
        default:
          return ''
      }
    }
  },
  components: {
    SwButton,
    SwTextarea,
    SwBreadcrumb,
    SwAvatar,
    SwBreadcrumbItem,
    SwTabs,
    SwTabItem,
    SwCard,
    SwBadge,
    SwMoney,
    SwInput,
    SwDivider,
    SwPageHeader,
    SwFilterWrapper,
    SwSwitch,
    SwPopup,
    SwInputGroup,
    SwEmptyTablePlaceholder,
    SwTransition,
    SwModal,
    SwCheckbox,
    SwTableComponent,
    SwTableColumn,
    SwSelect,
    SwDropdown,
    SwDropdownItem,
    SwDropdownDivider,
    SwList,
    SwListItem,
    SwRadio,
    SwDatePicker,
    SwEditor,
    SwFileUpload,
    SwListGroup,
    SwWizard,
    SwWizardStep,
    BaseHeader,
    BaseSidebar,
    BaseFooter,
    Test1,
    Test2,
    Test3
  },
  methods: {
    toggleFade() {
      this.fade = !this.fade
    },
    toggleBounce() {
      this.bounce = !this.bounce
    },
    onClick() {
      alert('Button Clicked')
    },
    onModal() {
      this.$refs.myModal.open()
    },
    onChange(file) {
      this.fileSizeInKb = parseFloat(file.size / 1024).toFixed(2)
      this.cropperOutputMime = file.type
      this.fileObject = file
    },
    onUploadHandler(cropper) {
      this.previewAvatar = cropper
        .getCroppedCanvas()
        .toDataURL(this.cropperOutputMime)
    },
    onHandleUploadError() {
      window.toastr['error']('Oops! Something went wrong...')
    },
    submitWizard() {
      this.wizardStep = 3
      alert('wizard completed')
    },
    setNextTab() {
      if (this.wizardStep < 3) {
        this.wizardStep += 1
        return true
      }
      alert('steps completed!')
    },
    setBackTab() {
      if (this.wizardStep > 1) {
        this.wizardStep -= 1
      }
    }
  }
}
</script>
<style lang="scss">
@import 'tailwindcss/base';

@import 'tailwindcss/components';

@import 'tailwindcss/utilities';
</style>
