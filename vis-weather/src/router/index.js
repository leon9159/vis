import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import TableView from '../components/TableView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/table',
      name: 'TableView',
      component: TableView
    }
  ]
})
