import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import VueRouter from 'vue-router'
import store from './store'
import http from 'axios'
import './api/mock.js'

import {
  Button,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Card,
  Col,
  Divider,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.$http = http

Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Divider)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
