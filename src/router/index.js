import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'banner',
    meta: { title: '轮播图管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'banner-list',
        component: () => import('@/views/banner/list'),
        meta: { title: '轮播图列表', }
      },
      {
        path: 'add',
        name: 'banner-add',
        component: () => import('@/views/banner/form'),
        meta: { title: '新增轮播图', }
      },
      {
        path: 'edit',
        name: 'banner-edit',
        component: () => import('@/views/banner/form'),
        meta: { title: '编辑轮播图', },
        hidden: true
      }
    ]
  },
  {
    path: '/nav',
    component: Layout,
    redirect: '/nav/list',
    name: 'nav',
    meta: { title: '导航管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'nav-list',
        component: () => import('@/views/nav/list'),
        meta: { title: '导航列表', }
      },
      {
        path: 'add',
        name: 'nav-add',
        component: () => import('@/views/nav/form'),
        meta: { title: '新增导航', }
      },
      {
        path: 'edit',
        name: 'nav-edit',
        component: () => import('@/views/nav/form'),
        meta: { title: '编辑导航', },
        hidden: true
      }
    ]
  },
  {
    path: '/goodsType',
    component: Layout,
    redirect: '/goodsType/list',
    name: 'goodsType',
    meta: { title: '商品类型管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'goodsType-list',
        component: () => import('@/views/goodsType/list'),
        meta: { title: '商品类型列表', }
      },
      {
        path: 'add',
        name: 'goodsType-add',
        component: () => import('@/views/goodsType/form'),
        meta: { title: '新增商品类型', }
      },
      {
        path: 'edit',
        name: 'goodsType-edit',
        component: () => import('@/views/goodsType/form'),
        meta: { title: '编辑商品类型', },
        hidden: true
      }
    ]
  },
  {
    path: '/goodsCate',
    component: Layout,
    redirect: '/goodsCate/list',
    name: 'goodsCate',
    meta: { title: '商品分类管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'goodsCate-list',
        component: () => import('@/views/goodsCate/list'),
        meta: { title: '商品分类列表', }
      },
      {
        path: 'add',
        name: 'goodsCate-add',
        component: () => import('@/views/goodsCate/form'),
        meta: { title: '新增商品分类', }
      },
      {
        path: 'edit',
        name: 'goodsCate-edit',
        component: () => import('@/views/goodsCate/form'),
        meta: { title: '编辑商品分类', },
        hidden: true
      }
    ]
  },
  {
    path: '/goodsTypeAttribute',
    component: Layout,
    redirect: '/goodsTypeAttribute/list',
    name: 'goodsTypeAttribute',
    meta: { title: '商品分类属性管理', icon: 'el-icon-s-help' },
    hidden: true,
    children: [
      {
        path: 'list',
        name: 'goodsTypeAttribute-list',
        component: () => import('@/views/goodsTypeAttribute/list'),
        meta: { title: '商品分类属性列表', }
      },
      {
        path: 'add',
        name: 'goodsTypeAttribute-add',
        component: () => import('@/views/goodsTypeAttribute/form'),
        meta: { title: '新增商品分类属性', }
      },
      {
        path: 'edit',
        name: 'goodsTypeAttribute-edit',
        component: () => import('@/views/goodsTypeAttribute/form'),
        meta: { title: '编辑商品分类属性', },
        hidden: true
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/list',
    name: 'goods',
    meta: { title: '商品管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'goods-list',
        component: () => import('@/views/goods/list'),
        meta: { title: '商品列表', }
      },
      {
        path: 'add',
        name: 'goods-add',
        component: () => import('@/views/goods/form'),
        meta: { title: '新增商品', }
      },
      {
        path: 'edit',
        name: 'goods-edit',
        component: () => import('@/views/goods/form'),
        meta: { title: '编辑商品', },
        hidden: true
      }
    ]
  },
  {
    path: '/manager',
    component: Layout,
    redirect: '/manager/list',
    name: 'manager',
    meta: { title: '管理员管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'manager-list',
        component: () => import('@/views/manager/list'),
        meta: { title: '管理员列表', }
      },
      {
        path: 'add',
        name: 'manager-add',
        component: () => import('@/views/manager/form'),
        meta: { title: '新增管理员', }
      },
      {
        path: 'edit',
        name: 'manager-edit',
        component: () => import('@/views/manager/form'),
        meta: { title: '编辑管理员', },
        hidden: true
      }
    ]
  },
  {
    path: '/role',
    component: Layout,
    redirect: '/role/list',
    name: 'role',
    meta: { title: '角色管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'role-list',
        component: () => import('@/views/role/list'),
        meta: { title: '角色列表', }
      },
      {
        path: 'add',
        name: 'role-add',
        component: () => import('@/views/role/form'),
        meta: { title: '新增角色', }
      },
      {
        path: 'auth',
        name: 'role-auth',
        component: () => import('@/views/role/auth'),
        meta: { title: '授权', },
        hidden: true
      },
      {
        path: 'edit',
        name: 'role-edit',
        component: () => import('@/views/role/form'),
        meta: { title: '编辑角色', },
        hidden: true
      }
    ]
  },
  {
    path: '/access',
    component: Layout,
    redirect: '/access/list',
    name: 'access',
    meta: { title: '权限管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'list',
        name: 'access-list',
        component: () => import('@/views/access/list'),
        meta: { title: '权限列表', }
      },
      {
        path: 'add',
        name: 'access-add',
        component: () => import('@/views/access/form'),
        meta: { title: '新增权限', }
      },
      {
        path: 'edit',
        name: 'access-edit',
        component: () => import('@/views/access/form'),
        meta: { title: '编辑权限', },
        hidden: true
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
