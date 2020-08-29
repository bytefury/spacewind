<template>
  <sw-page class="p-4">
    <sw-page-header title="Demo">
      <template v-slot:breadcrumbs>
        <sw-breadcrumb>
          <sw-breadcrumb-item title="Dashboard" />
          <sw-breadcrumb-item title="Invoice" />
          <sw-breadcrumb-item title="Create" is-active />
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
      <sw-tab-item title="Button">
        <div class="p-4">
          <sw-button size="lg" variant="primary" @click="onClick">
            Primary Button
          </sw-button>
          &nbsp;
          <sw-button size="lg" variant="danger"> Danger Button </sw-button
          >&nbsp;
          <sw-button size="lg" variant="warning"> Warning Button </sw-button
          >&nbsp;
          <sw-button size="lg" variant="success"> Success Button </sw-button
          >&nbsp;
          <sw-button size="lg" variant="info"> Info Button </sw-button>&nbsp;
          <sw-button size="lg" variant="primary-light">
            Primary Light Button </sw-button
          >&nbsp;
          <br />
          <br />
          <sw-button size="lg" variant="primary-outline">
            Primary Button </sw-button
          >&nbsp;
          <sw-button size="lg" variant="danger-outline">
            Danger Button </sw-button
          >&nbsp;
          <sw-button size="lg" variant="warning-outline">
            Warning Button </sw-button
          >&nbsp;
          <sw-button size="lg" variant="success-outline">
            Success Button
          </sw-button>
          &nbsp;
          <sw-button size="lg" variant="info-outline">Info Button</sw-button
          >&nbsp;
          <sw-button size="lg" variant="primary-light-outline">
            Primary Light Button
          </sw-button>
        </div>
      </sw-tab-item>
      <sw-tab-item title="Badges">
        <div class="flex flex-row mt-4">
          <sw-badge title="default" />
          <sw-badge title="success" type="success" class="ml-5" />
          <sw-badge title="warning" type="warning" class="ml-5" />
          <sw-badge title="info" type="info" class="ml-5" />
          <sw-badge title="danger" type="danger" class="ml-5" />
        </div>
      </sw-tab-item>
      <sw-tab-item title="Card">
        <sw-card class="mt-6">
          <div class="grid grid-cols-3 gap-4 mb-6">
            <sw-input-group label="Name">
              <sw-input />
            </sw-input-group>
            <sw-input-group label="Age">
              <sw-input type="number" />
            </sw-input-group>
            <sw-input-group label="Surname">
              <sw-money v-model="money" :currency="currency" />
            </sw-input-group>
          </div>
          <sw-divider />
          <div class="grid grid-cols-3 gap-4 my-6">
            <sw-input-group label="First Name">
              <sw-prefix-input prefix="INV" />
            </sw-input-group>
            <sw-input-group label="Middle Name">
              <sw-switch />
            </sw-input-group>
            <sw-input-group label="Surname">
              <sw-textarea />
            </sw-input-group>
          </div>
        </sw-card>
      </sw-tab-item>
      <sw-tab-item title="Filter Wrapper">
        <sw-filter-wrapper is-show class="mt-6">
          <sw-input-group label="First Name" class="w-1/4">
            <sw-input />
          </sw-input-group>
          <sw-input-group label="Last Name" class="w-1/4 ml-2">
            <sw-input />
          </sw-input-group>
          <sw-input-group label="Surname Name" class="w-1/4 ml-2">
            <sw-input />
          </sw-input-group>
          <sw-input-group label="Testing" class="w-1/4 ml-2">
            <sw-input />
          </sw-input-group>
        </sw-filter-wrapper>
      </sw-tab-item>
      <sw-tab-item title="Popup">
        <sw-popup>
          <template v-slot:activator>
            <span>Click Here</span>
          </template>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            aperiam blanditiis quia odio ipsam unde voluptates aut cum
            necessitatibus architecto numquam reprehenderit illum consequatur
            optio et ut. Numquam, sapiente nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            aperiam blanditiis quia odio ipsam unde voluptates aut cum
            necessitatibus architecto numquam reprehenderit illum consequatur
            optio et ut. Numquam, sapiente nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            aperiam blanditiis quia odio ipsam unde voluptates aut cum
            necessitatibus architecto numquam reprehenderit illum consequatur
            optio et ut. Numquam, sapiente nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            aperiam blanditiis quia odio ipsam unde voluptates aut cum
            necessitatibus architecto numquam reprehenderit illum consequatur
            optio et ut. Numquam, sapiente nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            aperiam blanditiis quia odio ipsam unde voluptates aut cum
            necessitatibus architecto numquam reprehenderit illum consequatur
            optio et ut. Numquam, sapiente nihil!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            aperiam blanditiis quia odio ipsam unde voluptates aut cum
            necessitatibus architecto numquam reprehenderit illum consequatur
            optio et ut. Numquam, sapiente nihil!
          </p>
        </sw-popup>
      </sw-tab-item>
      <sw-tab-item title="Empty Table Placeholder">
        <sw-card class="mt-6">
          <sw-empty-table-placeholder
            title="Testing"
            buttonTitle="Testing"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, consectetur consequuntur, provident dolores enim facere quam soluta dolore mollitia officiis libero quia nulla corporis sapiente perferendis illum corrupti eveniet odit."
          >
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, iusto quos, ipsum nesciunt enim nam consectetur neque
              quia delectus reiciendis eius quasi obcaecati assumenda unde
              consequuntur harum soluta veniam explicabo.
            </p>
          </sw-empty-table-placeholder>
        </sw-card>
      </sw-tab-item>
    </sw-tabs>
  </sw-page>
</template>

<script>
import SwButton from './components/SwButton.vue'
import SwTextarea from './components/SwTextarea.vue'
import SwBreadcrumb from './components/breadcrumb/SwBreadcrumb.vue'
import SwBreadcrumbItem from './components/breadcrumb/SwBreadcrumbItem.vue'
import SwTabs from './components/tabs/SwTabs.vue'
import SwTabItem from './components/tabs/SwTabItem.vue'
import SwCard from './components/SwCard.vue'
import SwBadge from './components/SwBadge.vue'
import SwPrefixInput from './components/SwPrefixInput.vue'
import SwMoney from './components/SwMoney.vue'
import SwInput from './components/SwInput.vue'
import SwDivider from './components/SwDivider.vue'
// import SwLabel from './components/SwLabel.vue'
import SwPageHeader from './components/SwPageHeader.vue'
import SwFilterWrapper from './components/SwFilterWrapper.vue'
import SwSwitch from './components/SwSwitch.vue'
import SwPopup from './components/SwPopup.vue'
import SwPage from './components/SwPage.vue'
import SwInputGroup from './components/SwInputGroup.vue'
import SwEmptyTablePlaceholder from './components/SwEmptyTablePlaceholder.vue'
export default {
  name: 'App',
  data() {
    return {
      currency: {
        decimal: '.',
        thousands: ',',
        prefix: '$',
        precision: 2,
        masked: false
      },
      money: 0
    }
  },
  components: {
    SwButton,
    SwTextarea,
    SwBreadcrumb,
    SwBreadcrumbItem,
    SwTabs,
    SwTabItem,
    SwCard,
    SwBadge,
    SwPrefixInput,
    SwMoney,
    SwInput,
    SwDivider,
    // SwLabel,
    SwPageHeader,
    SwFilterWrapper,
    SwSwitch,
    SwPopup,
    SwPage,
    SwInputGroup,
    SwEmptyTablePlaceholder
  },
  methods: {
    onClick() {
      alert('Button Clicked')
    }
  }
}
</script>
