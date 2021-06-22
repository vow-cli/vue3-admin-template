/*
 * @Author: genfa.zeng
 * @Date: 2021-02-01 10:14:04
 * @LastEditors: genfa.zeng
 * @LastEditTime: 2021-06-22 22:01:29
 * @Description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/index.vue'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: layout,
    meta: { icon: 'el-icon-s-home', title: '系统首页', showLink: true },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashBoard/index.vue'),
        meta: { icon: 'el-icon-s-home', title: '首页', showLink: true },
      },
    ],
  },
  {
    path: '/banner',
    name: 'Banner',
    component: layout,
    redirect: '/banner/list',
    meta: {
      icon: 'el-icon-picture',
      title: 'Banner管理',
      showLink: true,
    },
    children: [
      {
        path: '/banner/list',
        name: 'BannerList',
        component: () => import('@/views/banner/bannerList.vue'),
        meta: {
          icon: '',
          title: 'banner列表',
          showLink: true,
        },
      },
      {
        path: '/banner/add',
        name: 'BannerAdd',
        component: () => import('@/views/banner/bannerAdd.vue'),
        meta: {
          icon: '',
          title: '创建banner',
          showLink: true,
        },
      },
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
